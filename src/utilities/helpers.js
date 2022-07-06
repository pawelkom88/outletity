export function calcDiscount(product) {
  const discount = 10;
  const productPrice = Math.round(product.price);
  const discountedPrice = Math.round(productPrice - (productPrice * discount) / 100);

  return {discount, productPrice, discountedPrice};
}

export function displayErrorMsg(touched, errors) {
  return touched && errors && <span className="contact-form-error-msg">{errors}</span>;
}

export const voucherCode = "HX10TZ6";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const years = [
  new Date().getFullYear(),
  new Date().getFullYear() + 1,
  new Date().getFullYear() + 2,
  new Date().getFullYear() + 3,
  new Date().getFullYear() + 4,
];

export const deliveryOptions = [
  {value: false, desc: "options"},
  {
    value: 3.95,
    desc: "Standard : £3.95",
  },
  {
    value: 6.95,
    desc: "Next day : £6.95",
  },

  {
    value: 0,
    desc: "Collection : Free",
  },
];
