import { NavLink } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import { sort } from "../utils/sort";
import { useFetch } from "../hooks/useFetch";
import { Button } from "@mui/material";

export function Episodes() {
  const [, setSortParams] = useSearchParams();
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  const { loading, fetchResult, hasMore, error } = useFetch(
    "https://rickandmortyapi.com/api/episode",
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
    setEpisodes(fetchResult);
  }, [fetchResult]);

  function handleSort(key) {
    setSortParams({ key: key });
    const sortedEpisodes = sort(episodes, key);
    setEpisodes(sortedEpisodes);
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
        <Button  onClick={() => handleSort("ASC")} color="success" variant="contained">по возрастанию</Button>
        <Button  onClick={() => handleSort("DESC")} color="success" variant="contained">по убыванию</Button>
      </div>
      <div className="container__content">
        {episodes.map((item, index) => {
          if (episodes.length === index + 1) {
            return (
              <div key={index} className="small_card">
                <div className="items">
                  <NavLink
                    state={episodes}
                    to={`/categories/episodes/${item.id}`}
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
                    state={episodes}
                    to={`/categories/episodes/${item.id}`}
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
