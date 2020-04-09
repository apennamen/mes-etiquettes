export const SELECT_CHOICE = 'SELECT_CHOICE';

export const selectChoice = title => ({
  type: SELECT_CHOICE,
  value: title,
});

export const SELECT_FONT = 'SELECT_FONT';

export const selectFont = font => {
  const root = document.documentElement;
  root.style.setProperty('font-family', `${font}, cursive`);
  return {
    type: SELECT_FONT,
    value: font,
  };
};
