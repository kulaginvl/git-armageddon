const initialState = {
  items: {},
};

const distriction = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ASTEROIDS_DISTRICT': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      return {
        ...state,
        items: newItems,
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = {
        ...state.items,
      };

      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
      };
    }
    case 'CLEAR_DISTRICT':
      return {
        items: {},
      };

    default:
      return state;
  }
};
export default distriction;
