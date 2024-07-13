import { NavLink, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { sort } from "../utils/sort";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@mantine/core";

export function Heroes() {
  const [, setSortParams] = useSearchParams();
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);

  const { loading, fetchResult, hasMore, error } = useFetch(
    "https://rickandmortyapi.com/api/character",
    page, 
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
    setHeroes(fetchResult);
  }, [fetchResult]);

  function handleSort(key) {
    setSortParams({ key: key });
    const sortedHeroes = sort(fetchResult, key);
    setHeroes(sortedHeroes);
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
        <Button color="lime" size="lg" onClick={() => handleSort("ASC")}>по возрастанию</Button>
        <Button  color="lime" size="lg" onClick={() => handleSort("DESC")}>по убыванию</Button>
      </div>
      <div className="container__content">
        {heroes?.map((item, index) => {
          if (heroes.length - 3 === index + 1) {
            return (
              <div key={index} className="small_card">
                <div className="items">
                  <NavLink state={heroes} to={`/categories/heroes/${item.id}`}>
                    <h2 ref={lastNode}>{item?.name}</h2>
                  </NavLink>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className="small_card">
                <div className="items">
                  <NavLink state={heroes} to={`/categories/heroes/${item.id}`}>
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
