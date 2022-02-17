const cart_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, product } = action.payload;
      let tempCart = state.cart.find((item) => item.id === id);
      if (tempCart) {
        console.log("already have");
      } else {
        let newItem = {
          id: id,
          name: product.name,
          img: product.img,
          price: product.price,
          amount: product.amount,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
      break;
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE_ITEM": {
      const tempCart = state.cart.filter((item) => item.id !== action.payload);
      console.log(tempCart);
      return { ...state, cart: tempCart };
    }

    default:
      return state;
  }
};

export default cart_reducer;
