export function calcDiscount(product) {
  const discount = ((product.rating.rate * 8) / 2).toFixed();
  const productPrice = Math.round(product.price).toFixed(2);
  const discountedPrice = (productPrice - (productPrice * discount) / 100).toFixed(2);

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

export const deliveryOptions = ["Standard : £3.95", "Next day : £6.95", "Collection : Free"];
