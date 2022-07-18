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

// variables //

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

const year = new Date().getFullYear();

export let years = new Array(5).fill(null);

for (var i = 0; i < years.length; i++) {
  years[i] = year + i;
}

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

const categoriesTypes = {
  title: ["Men's", "Women's", "Jewelery", "Electronics"],
  desc: ["Men's clothing", "Women's clothing", "Jewelery", "Electronics"],
  path: ["/men's clothing", "/women's clothing", "/jewelery", "/electronics"],
};

export const categories = [
  {
    id: uuidv4(),
    srcMobile: mens,
    src: mensPng,
    title: categoriesTypes.title[0],
    desc: categoriesTypes.desc[0],
    path: categoriesTypes.path[0],
  },
  {
    id: uuidv4(),
    srcMobile: womens,
    src: womensPng,
    title: categoriesTypes.title[1],
    desc: categoriesTypes.desc[1],
    path: categoriesTypes.path[1],
  },
  {
    id: uuidv4(),
    srcMobile: jewelery,
    src: jeweleryPng,
    title: categoriesTypes.title[2],
    desc: categoriesTypes.desc[2],
    path: categoriesTypes.path[2],
  },
  {
    id: uuidv4(),
    srcMobile: electronics,
    src: electronicsPng,
    title: categoriesTypes.title[3],
    desc: categoriesTypes.desc[3],
    path: categoriesTypes.path[3],
  },
];

// functions //

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

export async function calcNewTotal(obj) {
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
