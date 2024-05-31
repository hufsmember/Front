export const ADD_TO_CART = "Add_TO_CART";
export const DELETE_CART = "DELETE_CART";
export const CLEAR_CART = "CLEAR_CART";

export const addToCart = (product) => {
  return { type: ADD_TO_CART, product: product };
};
export const deleteCart = (product) => {
  return { type: DELETE_CART, product: product };
};
export const clearCart = (product) => {
  return { type: CLEAR_CART, product: product };
};
