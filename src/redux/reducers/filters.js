const initialState = {
  distance: 0,
  danger: false,
};

const filters = (state = initialState, action) => {
  if (action.type === 'SET_DISTANCE') {
    return {
      ...state,
      distance: action.payload,
    };
  }
  if (action.type === 'SHOW_DANGER') {
    return {
      ...state,
      danger: !state.danger,
    };
  }
  return state;
};

export default filters;
