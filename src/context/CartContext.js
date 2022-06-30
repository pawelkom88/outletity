import useCollection from "hooks/useCollection";
import {createContext, useContext} from "react";

const ShoppingCartContext = createContext({});

export function CartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}) {
  const {products} = useCollection("products");

  let total;
  if (products) {
    total = products.reduce((acc, curr) => acc + +curr.discountedPrice, 0);
  }
  return (
    <ShoppingCartContext.Provider value={{products, total}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
