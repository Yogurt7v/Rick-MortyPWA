import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { sort } from "../utils/sort";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@mui/material";

export function Locations() {
  const [, setSortParams] = useSearchParams();
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);

  const { loading, fetchResult, hasMore, error } = useFetch(
    "https://rickandmortyapi.com/api/location",
    page
  );  

  const observer = useRef();
  const lastNode = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setLocations(fetchResult);
  }, [fetchResult]);

  function handleSort(key) {
    setSortParams({ key: key });
    const sortedLocations = sort(locations, key);
    setLocations(sortedLocations);
  }

  if (error){
    return (
      <div className="card__wrapper">
        <h2>{error.message}</h2>
      </div>
    )
  }

  return (
    <>
      <div className="button__wrapper">
        <Button onClick={() => handleSort("ASC")} variant="contained" color="success">по возрастанию</Button>
        <Button onClick={() => handleSort("DESC")} variant="contained" color="success">по убыванию</Button>
      </div>
      <div className="container__content">
        {locations.map((item, index) => {
          if (locations.length === index + 1) {
            return (
              <div key={index} className="small_card">
                <div className="items">
                  <NavLink
                    state={locations}
                    to={`/categories/locations/${item.id}`}
                  >
                    <h2 ref={lastNode}>{item?.name}</h2>
                  </NavLink>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="small_card">
                <div className="items">
                  <NavLink
                    state={locations}
                    to={`/categories/locations/${item.id}`}
                  >
                   <h2>{item?.name}</h2>
                  </NavLink>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
