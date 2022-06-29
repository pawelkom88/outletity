import {useState, useEffect} from "react";
import {db} from "firebase/config";
import {collection, onSnapshot} from "firebase/firestore";

export default function useCollection() {
  const [products, setProducts] = useState(null);

  useEffect(() => {}, []);
}
