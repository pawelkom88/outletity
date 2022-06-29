import useCollection from "hooks/useCollection";
import {createContext, useContext} from "react";
import {calcTotal} from "utilities/helpers";

const ShoppingCartContext = createContext({});

export function CartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}) {
  const {products} = useCollection("products");
  let total;
  if (products) {
    total = calcTotal(products);
  }

  return (
    <ShoppingCartContext.Provider value={{products, total, calcTotal}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
