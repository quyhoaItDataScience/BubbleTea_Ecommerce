import React, { useContext, useState } from "react";

const products_data = [
  {
    id: 1,
    name: "Dâu tằm kem phô mai ",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/5-800x800.jpg",
    price: 48000,
    category: "latte",
    amount: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "Hồng trà kem phô mai",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/6-400x400.png",
    price: 46000,
    category: ["latte", "trái cây"],
    amount: 1,
    stock: 10,
  },
  {
    id: 3,
    name: "Sữa tươi trân châu",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/7-400x400.png",
    price: 47000,
    category: ["trà sữa", "macchiato"],
    amount: 1,
    stock: 10,
  },
  {
    id: 4,
    name: "toco socola",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/8-400x400.png",
    price: 45000,
    category: ["macchiato", "chè"],
    amount: 1,
    stock: 10,
  },
  {
    id: 5,
    name: "trà dâu tằm pha lê tuyết",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/9-400x400.png",
    price: 40000,
    category: ["chè", "trái cây"],
    amount: 1,
    stock: 10,
  },
  {
    id: 6,
    name: "trà sữa panda",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/10-400x400.png",
    price: 49000,
    category: ["đặc biệt", "latte"],
    amount: 1,
    stock: 10,
  },
  {
    id: 7,
    name: "hồng trà latte",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/11-400x400.png",
    price: 50000,
    category: ["trái cây", "macchiato"],
    amount: 1,
    stock: 10,
  },
  {
    id: 8,
    name: "trà nhật đậu đỏ",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/12-400x400.png",
    price: 42000,
    category: ["latte", "chè"],
    amount: 1,
    stock: 10,
  },
];

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(products_data);

  const toggleAmount = (id, value) => {
    if (value === "inc") {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            product.amount = product.amount + 1;
            if (product.amount > product.stock) {
              product.amount = product.stock;
            }
          }
          return product;
        })
      );
    }
    if (value === "dec") {
      setProducts(
        products.map((product) => {
          if (product.id === id) {
            product.amount = product.amount - 1;
            if (product.amount < 2) {
              product.amount = 1;
            }
          }
          return product;
        })
      );
    }
  };

  return (
    <ProductsContext.Provider value={{ products, toggleAmount }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
