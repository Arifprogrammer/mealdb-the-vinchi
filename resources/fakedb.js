const addToLocalStorage = (id) => {
  const cart = {};
  const getCartValue = JSON.parse(localStorage.getItem("cart"));
  if (getCartValue) {
    if (getCartValue[id]) {
      getCartValue[id] = parseInt(getCartValue[id]) + 1;
    } else {
      getCartValue[id] = 1;
    }
    localStorage.setItem("cart", JSON.stringify(getCartValue));
  } else {
    cart[id] = 1;
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};
export default addToLocalStorage;
