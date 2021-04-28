const initialState = {
  items: [],
  isLoaded: false,
};

const asteroids = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ASTEROIDS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default asteroids;
