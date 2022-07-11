import {createContext, useContext} from "react";
import useCollection from "hooks/useCollection";
import {handleNewTotalChange} from "utilities/helpers";

const ShoppingCartContext = createContext({});

export function CartContext() {
  return useContext(ShoppingCartContext);
}

// try to avoid contex and pass props
export function ShoppingCartProvider({children}) {
  const {products} = useCollection("PRODUCTS");

  let total = products && products.reduce((acc, {discountedPrice}) => acc + +discountedPrice, 0);

  handleNewTotalChange({total});

  let numberOfItems = products && products.reduce((acc, {quantity}) => acc + quantity, 0);

  return (
    <ShoppingCartContext.Provider value={{products, total, numberOfItems}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
