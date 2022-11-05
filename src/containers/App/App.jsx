/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DataTable from '../../components/Table';
import { selectors, actions } from '../../state/ducks/products/index';
import getColumns from '../../constants/TableHeader';
import Popup from '../../components/Popup';
import Op from '../../constants/operations';
import './App.scss';

const { EDIT, ADD, DELETE } = Op;
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalTitle: '',
      editData: {},
    };
  }

  componentDidMount() {
    const { getAllProducts } = this.props;
    getAllProducts();
  }

  handleClose = () => {
    const { toggleModal } = this.props;
    toggleModal(false);
  }

  handleButtonClick = (title) => (data) => {
    const { toggleModal } = this.props;
    this.setState({ modalTitle: title, editData: data });
    toggleModal(true);
  }

  handleSubmit = (operation, data) => {
    const {
      editProduct, addProduct, deleteProduct, toggleModal,
    } = this.props;
    switch (operation) {
      case EDIT: {
        editProduct(data);
        break;
      }
      case ADD: {
        addProduct(data);
        break;
      }
      case DELETE: {
        deleteProduct(data);
        break;
      }
      default:
        toggleModal(false);
    }
    toggleModal(false);
  }

  render() {
    const { products, isOpen, errorMessage } = this.props;
    const { modalTitle, editData } = this.state;
    const headers = getColumns(this.handleButtonClick(EDIT),
      this.handleButtonClick(DELETE));
    return (
      <Box className="center-screen">
        <div>
          <h1 className="title">Product listing</h1>
          <div className="add-new">
            <Button
              color="success"
              onClick={this.handleButtonClick(ADD)}
              variant="contained"
            >
              Add new
            </Button>
          </div>
          <Paper className="app-layout" elevation={3}>
            <DataTable rows={products} columns={headers} />
          </Paper>
          <Popup
            handleClose={this.handleClose}
            title={modalTitle}
            open={isOpen}
            data={editData}
            handleSubmit={this.handleSubmit}
          />
          <p className="error">{errorMessage}</p>
        </div>
      </Box>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(actions.getAllProductsAction()),
  editProduct: (payload) => dispatch(actions.editProductAction(payload)),
  deleteProduct: (payload) => dispatch(actions.deleteProductAction(payload)),
  addProduct: (payload) => dispatch(actions.addProductAction(payload)),
  toggleModal: (payload) => dispatch(actions.toggleModal(payload)),
});

const mapStateToProps = (state) => ({
  products: selectors.getProducts(state),
  isOpen: selectors.getModalState(state),
  errorMessage: selectors.getErrorMessage(state),
});

App.defaultProps = {
  errorMessage: '',
};

App.propTypes = {
  getAllProducts: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  errorMessage: PropTypes.string,
};

const container = connect(mapStateToProps, mapDispatchToProps)(App);

export default container;
