export const date = (date) => {
  if (!date) return "";
  return date.replace(/(\d*)-(\d*)-(\d*).*/, "$3/$2/$1");
};
