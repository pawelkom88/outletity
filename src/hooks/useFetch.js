import {useState, useEffect} from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      setLoading(true);
      if (!didCancel) {
        const response = await fetch(url);

        if (!response.ok) {
          const message = `An error has occured: ${response.status}`;
          setError(message);
          setLoading(false);
        }
        const data = await response.json();
        setData(data);
      }
      setLoading(false);
      setError(false);
    }

    fetchData();

    return () => (didCancel = true);
  }, [url]);

  return {data, loading, error};
}
