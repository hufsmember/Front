export const ADD_TO_CART = "Add_TO_CART";
export const DELETE_CART = "DELETE_CART";
export const CLEAR_CART = "CLEAR_CART";
export const CHECK_ALL = "CHECK_ALL";
export const CHECK = "CHECK";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, product: product };
};
export const deleteCart = (product) => {
  return { type: DELETE_CART, product: product };
};
export const clearCart = (product) => {
  return { type: CLEAR_CART, product: product };
};

export const checkAll = () => {
  return { type: CHECK_ALL };
};

export const check = (productID) => {
  return { type: CHECK, productID: productID };
};
