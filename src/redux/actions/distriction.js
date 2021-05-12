export const addAsteroidsToDistrict = (asteroidObj) => ({
  type: 'ADD_ASTEROIDS_DISTRICT',
  payload: asteroidObj,
});
export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
});
export const clearDistr = () => ({
  type: 'CLEAR_DISTRICT',
});
