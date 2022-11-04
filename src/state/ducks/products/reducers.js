import Types from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case Types.SET_PRODUCT_DATA: {
      const data = action.payload;
      return {
        ...state,
        data,
      };
    }
    case Types.SET_ERROR: {
      const error = action.payload;
      return {
        ...state,
        error,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
