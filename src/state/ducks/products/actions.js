import Types from './types';

const addProductAction = (payload) => ({
  type: Types.ADD_USER,
  payload,
});

const editProductAction = (payload) => ({
  type: Types.EDIT_PRODUCT,
  payload,
});

const deleteProductAction = (payload) => ({
  type: Types.DELETE_PRODUCT,
  payload,
});

const getAllProductsAction = () => ({
  type: Types.FETCH_ALL_PRODUCTS,
});

export default {
  addProductAction,
  editProductAction,
  deleteProductAction,
  getAllProductsAction,
};
