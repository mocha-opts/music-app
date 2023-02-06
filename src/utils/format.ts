export const formatPlayCount = (countString: number) => {
  return countString.toString().length < 6 ? countString.toString() : countString.toString().slice(0, -4) + '万';
};
