import {
  mens,
  mensPng,
  womens,
  womensPng,
  jewelery,
  jeweleryPng,
  electronics,
  electronicsPng,
} from "utilities/images";
import {v4 as uuidv4} from "uuid";
import {db} from "../firebase/config";
import {doc, setDoc} from "firebase/firestore";

export const voucherCode = "HX10TZ6";
export const discount = 10;
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

export const deliveryOptionTypes = {
  standard: "standard",
  nextDay: "nextDay",
  collection: "collection",
};

export const deliveryOptions = [
  {
    id: uuidv4(),
    value: 3.95,
    desc: "Standard : £3.95",
    name: deliveryOptionTypes.standard,
  },
  {
    id: uuidv4(),
    value: 6.95,
    desc: "Next day : £6.95",
    name: deliveryOptionTypes.nextDay,
  },

  {
    id: uuidv4(),
    value: 0,
    desc: "Collection : Free",
    name: deliveryOptionTypes.collection,
  },
];

export const categories = [
  {
    id: uuidv4(),
    srcMobile: mens,
    src: mensPng,
    title: "Men's",
    desc: "Men's clothing",
    path: "/men's clothing",
  },
  {
    id: uuidv4(),
    srcMobile: womens,
    src: womensPng,
    title: "Women's",
    desc: "Women's clothing",
    path: "/women's clothing",
  },
  {
    id: uuidv4(),
    srcMobile: jewelery,
    src: jeweleryPng,
    title: "Jewelery",
    desc: "Jewelery",
    path: "/jewelery",
  },
  {
    id: uuidv4(),
    srcMobile: electronics,
    src: electronicsPng,
    title: "Electronics",
    desc: "Electronics",
    path: "/electronics",
  },
];

export function sortByPrice(products, order) {
  const productsCopy = [...products];

  if (order === "desc") {
    return productsCopy.sort((productA, productB) => productB.price - productA.price);
  }
  return productsCopy.sort((productA, productB) => productA.price - productB.price);
}

export function sortByTitle(products) {
  const productsCopy = [...products];
  return productsCopy.sort((productA, productB) => productA.title.localeCompare(productB.title));
}

export function sortByCategory(products, category) {
  const productsCopy = [...products];
  return productsCopy.filter(product => product.category === category);
}

export async function handleNewTotalChange(obj) {
  await setDoc(doc(db, "voucher", "code"), obj);
}

export function calcDiscount(product) {
  const productPrice = Math.round(product.price);
  const discountedPrice = Math.round(productPrice - (productPrice * discount) / 100);

  return {productPrice, discountedPrice};
}

export function displayErrorMsg(touched, errors) {
  return touched && errors && <span className="contact-form-error-msg">{errors}</span>;
}

export function notifyUser(func, msg) {
  func(msg);
}
