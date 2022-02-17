export const formatPrice = (money) => {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(money);
};

export const getUniqueValues = (products, category) => {
  let categories = products.map((product) => product.category).flat();
  categories = ["tất cả", ...new Set(categories)];
  return categories;
};
