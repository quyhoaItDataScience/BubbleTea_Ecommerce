const cart_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, product } = action.payload;
      let tempCart = state.cart.find((item) => item.id === id);
      if (tempCart) {
        return { ...state };
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
    case "UPDATE_CART_ITEM_AMOUNT": {
      console.log(action.payload);
      const existingCartItem = state.cart;
      existingCartItem.every((cartItem) => {
        action.payload.every((product) => {
          if (product.id === cartItem.id) {
            cartItem.amount = product.amount;
          }
          return product;
        });
        return cartItem;
      });
      console.log(existingCartItem);
      // I don't understand why my cartItemAmount changed when I don't return the new state
      return { ...state, cart: existingCartItem };
    }

    case "COUNT_TOTAL":
      const tempCartForCount = [...state.cart];

      const { total_items, total_price } = tempCartForCount.reduce(
        (total, cartItem) => {
          total.total_items += cartItem.amount;
          total.total_price += cartItem.amount * cartItem.price;
          return total;
        },
        {
          total_items: 0,
          total_price: 0,
        }
      );

      return { ...state, total_items: total_items, total_price: total_price };

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
