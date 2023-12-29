export const getComputedOpacity = (value) => {

  if (value === 50) {
    return {
      finalFontOpacity: 100,
      fallbackFontOpacity: 100,
    };
  }

  const convertedPercentage = (100 * value) / 50;

  if (value < 50) {
    return {
      finalFontOpacity: 100,
      fallbackFontOpacity: convertedPercentage,
    };
  }

  if (value > 50) {
    return {
      finalFontOpacity: 100 - (convertedPercentage - 100),
      fallbackFontOpacity: 100,
    };
  }

  return {
    finalFontOpacity: 100,
    fallbackFontOpacity: 100,
  };
};
