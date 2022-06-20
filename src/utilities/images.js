import {v4 as uuidv4} from "uuid";
import logo from "../assets/webp/logo.webp";
import mens from "../assets/webp/mens.webp";
import womens from "../assets/webp/womens.webp";
import jewelery from "../assets/webp/jewelery.webp";
import electronics from "../assets/webp/electronics.webp";
import mensPng from "../assets/png/mensPng.png";
import womensPng from "../assets/png/womensPng.png";
import jeweleryPng from "../assets/png/jeweleryPng.png";
import electronicsPng from "../assets/png/electronicsPng.png";
import shopping1 from "../assets/png/shopping1.jpg";
import shopping2 from "../assets/png/shopping2.jpg";
import shopping3 from "../assets/png/shopping3.jpg";
import shopping1webp from "../assets/webp/shopping1.webp";
import shopping2webp from "../assets/webp/shopping2.webp";
import shopping3webp from "../assets/webp/shopping3.webp";
import cart from "../assets/svg/cart.svg";
import sort from "../assets/svg/sort.svg";
import user from "../assets/svg/user.svg";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import house from "../assets/svg/house.svg";
import delivery from "../assets/svg/delivery.svg";
import up from "../assets/svg/up.svg";
import creditcard from "../assets/svg/creditcard.svg";
import chevronup from "../assets/svg/chevronup.svg";
import chevrondown from "../assets/svg/chevrondown.svg";

export const carouselImages = [
  {id: uuidv4(), srcMobile: shopping1webp, src: shopping1},
  {id: uuidv4(), srcMobile: shopping2webp, src: shopping2},
  {id: uuidv4(), srcMobile: shopping3webp, src: shopping3},
];

export const categories = [
  {
    id: uuidv4(),
    srcMobile: mens,
    src: mensPng,
    title: "Men's",
    desc: "Men's clothes",
    path: "/men's clothing",
  },
  {
    id: uuidv4(),
    srcMobile: womens,
    src: womensPng,
    title: "Women's",
    desc: "Women's clothes",
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

export {
  logo,
  cart,
  user,
  mens,
  womens,
  jewelery,
  electronics,
  mensPng,
  womensPng,
  jeweleryPng,
  electronicsPng,
  shopping1,
  shopping2,
  shopping3,
  shopping1webp,
  shopping2webp,
  shopping3webp,
  facebook,
  twitter,
  instagram,
  house,
  delivery,
  up,
  creditcard,
  chevronup,
  chevrondown,
  sort,
};
