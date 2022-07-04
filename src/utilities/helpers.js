import {db} from "../firebase/config";

import {doc, updateDoc, getDoc} from "firebase/firestore";

export async function handleQuantityChange(product) {
  const {discount, productPrice} = calcDiscount(product);

  const docRef = doc(db, "PRODUCTS", product.title);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const updatedQuantity = docSnap.data().quantity + 1; // must be changeable
    const updatedPrice = Number(docSnap.data().productPrice) + Number(productPrice);
    const updatedDiscountedPrice = updatedPrice * Number((100 - discount) / 100);

    await updateDoc(docRef, {
      quantity: updatedQuantity,
      productPrice: updatedPrice,
      discountedPrice: updatedDiscountedPrice,
    });
  }
}

export function calcDiscount(product) {
  const discount = ((Math.random() * 8) / 2).toFixed();
  const productPrice = Math.ceil(product.price).toFixed(2);
  const discountedPrice = Math.trunc(productPrice - (productPrice * discount) / 100);

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
