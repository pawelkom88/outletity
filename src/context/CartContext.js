import {createContext, useContext} from "react";
import useAuthContext from "hooks/useAuthContext";
import useCollection from "hooks/useCollection";
import {handleNewTotalChange} from "utilities/helpers";

const ShoppingCartContext = createContext({});

export function CartContext() {
  return useContext(ShoppingCartContext);
}

// try to avoid contex and pass props
export function ShoppingCartProvider({children}) {
  const {user} = useAuthContext();
  const {data: products} = useCollection("PRODUCTS", user);

  let total = products && products.reduce((acc, {discountedPrice}) => acc + +discountedPrice, 0);

  let numberOfItems = products && products.reduce((acc, {quantity}) => acc + quantity, 0);

  handleNewTotalChange({total});

  return (
    <ShoppingCartContext.Provider value={{products, total, numberOfItems}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
