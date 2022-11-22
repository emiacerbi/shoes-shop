export const reducePrice = (array) =>
  array.reduce((acc, elem) => acc + elem.price.toString() * elem.quantity, 0)
