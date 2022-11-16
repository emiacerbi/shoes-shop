export const reducePrice = (array) => array.reduce((acc, elem) => acc + elem.price * elem.quantity, 0)
