/* eslint-disable import/prefer-default-export */
import * as R from 'ramda';

const getProducts = (state) => R.pathOr([], ['products', 'data'], state);

const getModalState = (state) => R.pathOr(false, ['products', 'modal'], state);

const getErrorMessage = (state) => R.pathOr(false, ['products', 'error'], state);

export default {
  getProducts,
  getModalState,
  getErrorMessage,
};
