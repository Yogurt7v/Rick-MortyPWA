import { useNavigate } from "react-router-dom";
import { useSingleData } from "../hooks/useSingleData";

export function SingleEpisode() {
  const navigate = useNavigate();

  const {result} = useSingleData("https://rickandmortyapi.com/api/episode");

  return (
    <div className="card__wrapper">
      <h1>{result.name}</h1>
      <h3>Air date: {result.air_date}</h3>
      <h2>Episode: {result.episode}</h2>
      <h3>Created: {result.created}</h3>
      <div className="button__wrapper">
        <button onClick={() => navigate("/categories/episodes")}>Back</button>
      </div>
    </div>
  );
}
