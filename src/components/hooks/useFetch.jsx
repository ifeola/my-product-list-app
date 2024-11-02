import { useState, useEffect } from "react";

function useFetch(url) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const result = await response.json();

      setProducts(result);
    }
    fetchData();
  }, [url]);

  return { products };
}

export default useFetch;
