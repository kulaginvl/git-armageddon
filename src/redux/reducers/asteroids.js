const initialState = {
  items: [],
  isLoaded: false,
};

const asteroids = (state = initialState, action) => {
  if (action.type === 'SET_ASTEROIDS') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default asteroids;
