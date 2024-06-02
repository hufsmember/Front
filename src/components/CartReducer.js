import {
  ADD_TO_CART,
  DELETE_CART,
  CLEAR_CART,
  CHECK_ALL,
  CHECK,
} from "./CartActions";

const initialState = {
  items: {},
  totalAmount: 0,
  allchecked: false,
};

export default CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.productName;
      const prodId = addedProduct.productID;
      let updatedOrNewCartItem;

      // 이미 상품이 담겨있는 경우
      if (state.items[prodId]) {
        state.items[prodId].quantitiy += 1;
        return {
          ...state,
          items: { ...state.items },
          totalAmount: state.totalAmount + prodPrice,
        };
      } else {
        state.items[prodId];
        updatedOrNewCartItem = {
          productID: addedProduct.id,
          price: prodPrice,
          productName: prodTitle,
          quantity: 1,
          checked: false,
        };
        return {
          ...state,
          items: { ...state.items, prodId: updatedOrNewCartItem },
          totalAmount: state.totalAmount + prodPrice,
        };
      }
    case DELETE_CART:
      return {
        ...state,
        //   itemes: { newItems },
        //   totalAmount: state.totalAmount - deleteProdPrice,
      };
    case CLEAR_CART:
      return {
        ...state,
      };

    case CHECK_ALL:
      const alls = state.allchecked;
      for (let i in state.items) {
        state.items[i].checked = !alls;
      }
      return {
        ...state,
        allchecked: !state.allchecked,
      };
    case CHECK:
      const checkId = action.productID;
      const now = state.items[checkId].checked;
      state.items[checkId].checked = !now;
      return {
        ...state,
      };
  }

  return state;
};
