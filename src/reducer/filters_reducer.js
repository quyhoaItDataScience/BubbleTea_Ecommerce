const filters_reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      let maxPrice = action.payload.map((product) => product.price);
      let minPrice = action.payload.map((product) => product.price);
      maxPrice = Math.max(...maxPrice);
      minPrice = Math.min(...minPrice);

      return {
        ...state,
        all_products: action.payload,
        filtered_products: action.payload,
        filters: { ...state.filters, max_price: maxPrice, min_price: minPrice },
      };

    case "UPDATE_FILTERS":
      const { name, value } = action.payload;

      return { ...state, filters: { ...state.filters, [name]: value } };
    case "UPDATE_SORT":
      return { ...state, sort: action.payload };
    case "SORT_PRODUCTS":
      const { sort, filtered_products } = state;
      let tempProducts = [...filtered_products];
      if (sort === "low-to-high") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "high-to-low") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "name a-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === "name z-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }

      return { ...state, filtered_products: [...tempProducts] };

    case "FILTERS_PRODUCTS": {
      const { all_products } = state;
      const { text, category, price } = state.filters;
      let tempProducts = [...all_products];
      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().startsWith(text.toLowerCase())
        );
      }
      if (category !== "tất cả") {
        tempProducts = tempProducts.filter((product) => {
          return product.category.includes(category);
        });
      }
      if (price) {
        tempProducts = tempProducts.filter((product) => {
          return product.price <= price;
        });
      }
      return { ...state, filtered_products: [...tempProducts] };
    }
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "tất cả",
        },
      };

    default:
      return state;
  }
};

export default filters_reducer;
