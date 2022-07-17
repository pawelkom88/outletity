import {useState, useEffect} from "react";
import {db} from "../firebase/config";
import {collection, onSnapshot, query, where} from "firebase/firestore";

export default function useCollection(col, user) {
  const [data, setData] = useState(null);

  // set up uid only if user is not null
  let uid;
  if (user) {
    uid = user.uid;
  }

  useEffect(() => {
    // invoke function with database we want connect to and its collection
    let ref = collection(db, col);

    // set up query with data associated with logged in user
    if (uid) {
      ref = query(ref, where("uid", "==", uid));
    }

    // realtime listener that takes as arguments reference and function that is invoked every time data is changed
    const unsubscribe = onSnapshot(ref, snapshot => {
      let results = [];
      snapshot.docs.forEach(doc => {
        // create new object and add it to results array
        results.push({...doc.data(), id: doc.id});
      });

      //update state with newly created array
      setData(results);
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [col, uid]);

  return {data};
}
