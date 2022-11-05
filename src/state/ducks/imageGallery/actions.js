import Types from './types';

const getImagesFromFlicker = () => {
  console.log(Types);
  return {
    type: Types.FETCH_IMAGES,
  };
};

export default {
  getImagesFromFlicker,
};
