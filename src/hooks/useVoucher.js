import {useState, useEffect} from "react";
import useCollection from "hooks/useCollection";
import {db} from "../firebase/config";
import {doc, setDoc} from "firebase/firestore";

export default function useVoucher(total) {
  const {products: discountedTotal} = useCollection("voucher");
  const [obj] = discountedTotal || [];
  const {newTotal} = obj || {};
  const [isMatch, setIsMatch] = useState("");

  useEffect(() => {
    async function handleTotal() {
      // if vouched code has been applied , store it in firebase
      if (obj?.applied) {
        await setDoc(doc(db, "voucher", "code"), {newTotal: total * 0.9, applied: true});
        return;
      }
    }
    handleTotal();
  }, [total, obj]);

  return {isMatch, setIsMatch, newTotal, discountedTotal};
}
