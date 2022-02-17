import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FiltersProvider } from "./context/filters_context";
import { CartProvider } from "./context/cart_context";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <FiltersProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FiltersProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
