import {createContext, useContext} from "react";
import useCollection from "hooks/useCollection";
import {handleNewTotalChange} from "utilities/helpers";

const ShoppingCartContext = createContext({});

export function CartContext() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children}) {
  const {products} = useCollection("PRODUCTS");
  let total;
  if (products) {
    total = products.reduce((acc, curr) => acc + +curr.discountedPrice, 0);
    handleNewTotalChange({total});
  }

  let basketQuantity;

  if (products && products.length === 0) {
    basketQuantity = "basket is empty";
  } else if (products && products.length === 1) {
    basketQuantity = `${products.length} item`;
  } else if (products) {
    basketQuantity = `${products.length} items`;
  }

  return (
    <ShoppingCartContext.Provider value={{products, total, basketQuantity}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
