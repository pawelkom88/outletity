import {v4 as uuidv4} from "uuid";
import {db} from "../firebase/config";
import {doc, setDoc} from "firebase/firestore";

export const voucherCode = "HX10TZ6";
export const discount = 10;

export async function handleNewTotalChange(obj) {
  await setDoc(doc(db, "voucher", "code"), obj);
}

export function calcDiscount(product) {
  const productPrice = Math.round(product.price);
  const discountedPrice = Math.round(productPrice - (productPrice * discount) / 100);

  return {discount, productPrice, discountedPrice};
}

export function displayErrorMsg(touched, errors) {
  return touched && errors && <span className="contact-form-error-msg">{errors}</span>;
}

export function notifyUser(func, msg) {
  func(msg);
}

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
  {
    id: uuidv4(),
    value: 3.95,
    desc: "Standard : £3.95",
  },
  {
    id: uuidv4(),
    value: 6.95,
    desc: "Next day : £6.95",
  },

  {
    id: uuidv4(),
    value: 0,
    desc: "Collection : Free",
  },
];
