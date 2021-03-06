import { SELECT_CHOICE } from './actions.js';

const steps = [
  [
    { title: 'Les règles morales sont universelles.', img: 'red.png' },
    { title: "La morale s'évalue par les conséquences des actes.", img: 'blue.png' },
  ],
  [
    { title: 'Notre conscience morale initiale est minimale.', img: 'blue.png' },
    { title: 'Notre conscience morale initiale est maximale.', img: 'red.png' },
  ],
];

const INITIAL_STATE = {
  step: 0,
  choices: steps[0],
  selectedChoices: [],
  progress: 0,
};

export const reducer = (state = INITIAL_STATE, action) => {
  const { type, value } = action;
  const newStep = Math.min(state.step + 1, steps.length);
  const progress = Math.floor((newStep * 100) / steps.length);
  switch (type) {
    case SELECT_CHOICE:
      return {
        ...state,
        step: newStep,
        choices: progress === 100 ? [] : steps[newStep],
        selectedChoices: [...state.selectedChoices, value],
        progress,
      };
    default:
      return state;
  }
};
