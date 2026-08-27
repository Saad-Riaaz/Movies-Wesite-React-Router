import { useLoaderData } from "react-router-dom";
import { Cards } from "./Cards";

export const Genres = () => {
  const MovieData = useLoaderData();

 console.log(MovieData);
 

  return (
    <>
      <ul className="grid grid-four-cols">
        {MovieData.results.map((curMovie) => {
          return (
            <Cards
              key={curMovie.id}
              curMovie={curMovie}
            />
          );
        })}
      </ul>
    </>
  );
};