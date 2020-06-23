export const addFeature = feature => {
  return { type: 'ADD_FEATURE', payload: feature };
};

export const removeFeature = feature => {
  console.log('Running!!!!!');
  return { type: 'REMOVE_FEATURE', payload: feature };
};
