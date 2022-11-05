import Types from './types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case Types.STORE_IMAGES: {
      const data = action.payload;
      return {
        ...state,
        imageData: data,
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
