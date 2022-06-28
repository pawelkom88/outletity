export function calcDiscount(product) {
  const discount = ((product.rating.rate * 10) / 2).toFixed();
  const productPrice = Math.round(product.price.toFixed(2));
  const discountedPrice = productPrice - (productPrice * discount) / 100;

  return {discount, productPrice, discountedPrice};
}

export function displayErrorMsg(touched, errors) {
  return touched && errors && <span className="contact-form-error-msg">{errors}</span>;
}
