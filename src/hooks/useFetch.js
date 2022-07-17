import {useState, useEffect} from "react";
import {notifyUser} from "utilities/helpers";
import toast from "react-hot-toast";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      setLoading(true);

      try {
        if (!didCancel) {
          const response = await fetch(url);

          if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            notifyUser(toast.error, message);

            setLoading(false);
          }
          const data = await response.json();
          setData(data);
          setLoading(false);
        }
      } catch {
        notifyUser(toast.error, "Cannot fetch data");
        setLoading(false);
      }
    }
    fetchData();

    return () => (didCancel = true);
  }, [url]);

  return {data, loading};
}
