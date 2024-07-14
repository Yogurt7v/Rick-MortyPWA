import { useNavigate } from "react-router-dom";
import { useSingleData } from "../hooks/useSingleData";
import { Button } from "@mantine/core";

export function SingleHero() {
  const navigate = useNavigate();

  const { result } = useSingleData("https://rickandmortyapi.com/api/character");

  return (
    <div className="card__wrapper">
      <h1>{result.name}</h1>
      <div className="card">
          <img src={result.image} alt={result.name} />
        <div className="card__info">
          <p>Status: {result.status}</p>
          <p>Species: {result.species}</p>
          <p>Gender: {result.gender}</p>
          {result.type && <p>Type: {result.type}</p>}
        </div>
      </div>
      <p>Created: {result.created}</p>
      <div className="button__wrapper">
        <Button color="lime" size="md" onClick={() => navigate("/categories/heroes")}>Back</Button>
      </div>
    </div>
  );
}
