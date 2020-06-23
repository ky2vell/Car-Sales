export const addFeature = newFeature => {
  console.log('running!');
  return { type: 'ADD_FEATURE', payload: newFeature };
};
