import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError("Something went wrong!");
          setLoading(false)
        } else {
            return response.json();
        }
       
      })

      .then((data1) => {
          setData(data1)
          setLoading(false)
    });
  }, []);
  return {data, loading, error}
};

export default useFetch;
