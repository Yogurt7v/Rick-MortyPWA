import { useNavigate } from "react-router-dom";
import { useSingleData } from "../hooks/useSingleData";
import { Button } from "@mui/material";
export function SingleLocation() {
  const navigate = useNavigate();

  const { result } = useSingleData("https://rickandmortyapi.com/api/location");

  return (
    <div className="card__wrapper">
      <h1>{result.name}</h1>
      <p>Type: {result.type}</p>
      <p>Dimension: {result.dimension}</p>
      <p>Created: {result.created}</p>

      <div className="button__wrapper">
        <Button onClick={() => navigate("/categories/locations")} variant="text" color="success">Back</Button>
      </div>
    </div>
  );
}
