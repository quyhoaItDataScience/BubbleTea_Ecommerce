import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/filters_reducer";
import { useProductsContext } from "./products_context";

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: "low-to-high",
  filters: {
    text: "",
    category: "tất cả",
    min_price: 0,
    max_price: 0,
    price: 0,
  },
};
const FiltersContext = React.createContext();

export const FiltersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products } = useProductsContext();

  // Load proudcts
  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTERS_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort, state.filters]);
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (e.target.classList.contains("filters__category__list__item")) {
      name = "category";
      value = e.target.value;
      switch (value) {
        case 0:
          value = "tất cả";
          break;
        case 1:
          value = "latte";
          break;
        case 2:
          value = "trái cây";
          break;
        case 3:
          value = "trà sữa";
          break;
        case 4:
          value = "macchiato";
          break;
        case 5:
          value = "chè";
          break;
        case 6:
          value = "đặc biệt";
          break;
        default:
          break;
      }
    }
    console.log(name, value);
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FiltersContext.Provider
      value={{ ...state, updateSort, updateFilters, clearFilters }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FiltersContext);
};
