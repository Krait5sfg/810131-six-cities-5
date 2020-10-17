export const getRating = (rating) => {
  const roundRating = Math.round(rating);
  return roundRating > 0 && roundRating <= 5 ? `${roundRating * 20}%` : false;
};
