/* eslint-disable import/prefer-default-export */
import * as R from 'ramda';

const getProducts = (state) => R.pathOr([], ['products', 'data'], state);

export default {
  getProducts,
};
