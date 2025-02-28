import useData from "@/Hooks/useData";
import useGenres, { Genre } from "../Hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {data?.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
