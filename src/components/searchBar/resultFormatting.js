export default result => {
  if (result && result.entity && result.entity.features) {
    return result.entity.features.map(feature => ({
      key: feature.id,
      text: feature.place_name,
      coordinates: feature.geometry.coordinates,
    }));
  }

  return [];
};
