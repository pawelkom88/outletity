import {useState, useEffect} from "react";
import {db} from "../firebase/config";
import {collection, onSnapshot} from "firebase/firestore";

export default function useCollection(col) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // invoke function with database we want connect to and its collection
    let ref = collection(db, col);

    // realtime listener that takes as arguments reference and function that is invoked every time data is changed
    const unsubscribe = onSnapshot(ref, snapshot => {
      let results = [];
      snapshot.docs.forEach(doc => {
        // create new object and add it to results array
        results.push({...doc.data(), id: doc.id});
      });

      //update state with newly created array
      setProducts(results);
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [col]);

  return {products};
}
