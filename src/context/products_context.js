import React, { useContext, useState } from "react";

const products_data = [
  {
    id: 1,
    name: "Dâu tằm kem phô mai ",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/5-800x800.jpg",
    price: 48000,
    category: "Latte",
  },
  {
    id: 2,
    name: "Hồng trà kem phô mai",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/6-400x400.png",
    price: 46000,
    category: "Latte",
  },
  {
    id: 3,
    name: "Sữa tươi trân châu",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/7-400x400.png",
    price: 47000,
    category: "Latte",
  },
  {
    id: 4,
    name: "toco socola",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/8-400x400.png",
    price: 45000,
    category: "Latte",
  },
  {
    id: 5,
    name: "trà dâu tằm pha lê tuyết",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/9-400x400.png",
    price: 40000,
    category: "Latte",
  },
  {
    id: 6,
    name: "trà sữa panda",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/10-400x400.png",
    price: 49000,
    category: "Latte",
  },
  {
    id: 7,
    name: "hồng trà latte",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/11-400x400.png",
    price: 50000,
    category: "Latte",
  },
  {
    id: 8,
    name: "trà nhật đậu đỏ",
    img: "http://hb855.giaodienwebsite.top/wp-content/uploads/2019/09/12-400x400.png",
    price: 42000,
    category: "Latte",
  },
];

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(products_data);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
