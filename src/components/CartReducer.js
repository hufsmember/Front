import { ADD_TO_CART, DELETE_CART, CLEAR_CART } from "./CartActions";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.productName;
      const prodId = addedProduct.id;
      let updatedOrNewCartItem;

      // 이미 상품이 담겨있는 경우
      if (state.items[prodId]) {
        state.items[prodId].quantitty += 1;
        return {
          ...state,
          items: { ...state.items },
          totalAmount: state.totalAmount + prodPrice,
        };
      } else {
        state.items[prodId];
        updatedOrNewCartItem = {
          prodId: addedProduct.id,
          prodPrice,
          prodTitle,
          quantitty: 1,
        };
        return {
          ...state,
          items: { ...state.items, prodId: updatedOrNewCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      }
    case DELETE_CART:
      const deleteProduct = action.product;
      const deleteProdId = deleteProduct.id;
      const deleteProdPrice = deleteProduct.price;
      const newItems = delete { ...state.items }[deleteProdId];
      return {
        ...state,
        itemes: { newItems },
        totalAmount: state.totalAmount - deleteProdPrice,
      };
    case CLEAR_CART:
      return {
        items: {},
        totalAmount: 0,
      };
  }

  return state;
};
