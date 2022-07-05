import {useState, useEffect} from "react";
import useCollection from "hooks/useCollection";
import {db} from "../firebase/config";
import {doc, setDoc} from "firebase/firestore";

export default function useVoucher(total) {
  const {products: discountedTotal} = useCollection("voucher");
  const [obj] = discountedTotal || [];
  const {newTotal} = obj || {};

  const [isMatch, setIsMatch] = useState("");
  // if total changes, update it in firebase
  useEffect(() => {
    async function handleTotal() {
      if (obj?.applied) {
        await setDoc(doc(db, "voucher", "code"), {newTotal: total * 0.9, applied: true});
        return;
      } else {
        await setDoc(doc(db, "voucher", "code"), {newTotal: total});
      }
    }
    handleTotal();
  }, [total]);

  return {isMatch, setIsMatch, newTotal, discountedTotal};
}
