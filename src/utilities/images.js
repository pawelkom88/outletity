import {v4 as uuidv4} from "uuid";
import logo from "../assets/webp/logo.webp";
import mens from "../assets/webp/mens.webp";
import womens from "../assets/webp/womens.webp";
import jewelery from "../assets/webp/jewelery.webp";
import electronics from "../assets/webp/electronics.webp";
import shoppingspree from "../assets/webp/shoppingspree.webp";
import mensPng from "../assets/png/mensPng.png";
import womensPng from "../assets/png/womensPng.png";
import jeweleryPng from "../assets/png/jeweleryPng.png";
import electronicsPng from "../assets/png/electronicsPng.png";
import shoppingspreePng from "../assets/png/shoppingspreePng.png";
import shopping1 from "../assets/png/shopping1.jpg";
import shopping2 from "../assets/png/shopping2.jpg";
import cart from "../assets/svg/cart.svg";
import user from "../assets/svg/user.svg";

export const imagesArray = [
  {id: uuidv4(), src: shopping1},
  {id: uuidv4(), src: shopping2},
];

export {
  logo,
  cart,
  user,
  mens,
  womens,
  jewelery,
  electronics,
  shoppingspree,
  mensPng,
  womensPng,
  jeweleryPng,
  electronicsPng,
  shoppingspreePng,
};
