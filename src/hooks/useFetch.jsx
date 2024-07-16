import { useEffect, useState } from "react";
import axios from "axios";

export function useFetch(url, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [fetchResult, setFetchResult] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `${url}?page=${pageNumber}`,
    })
      .then((response) => {
        setFetchResult((prevstate) => [...new Set([...prevstate, ...response.data.results])]);
        setHasMore(response.data.info.pages > pageNumber);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url, pageNumber]);

  return {
    loading,
    fetchResult,
    hasMore,
    error
  };
}
