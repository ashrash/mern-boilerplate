const EDIT = 'Edit product data';
const ADD = 'Add New Product';
const DELETE = 'Delete Product';

const button = {
  [EDIT]: { text: 'Update', color: 'primary' },
  [ADD]: { text: 'Save', color: 'success' },
  [DELETE]: { text: 'Delete', color: 'error' },
};

export default {
  EDIT,
  ADD,
  DELETE,
  button,
};
