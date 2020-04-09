import { SELECT_FONT } from './actions.js';

const fonts = ['Gloria Hallelujah', 'Kalam'];

const INITIAL_STATE = {
  fonts,
  selectedFont: fonts[0],
};

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, value } = action;
  switch (type) {
    case SELECT_FONT:
      return {
        ...state,
        selectedFont: value,
      };
    default:
      return state;
  }
};
