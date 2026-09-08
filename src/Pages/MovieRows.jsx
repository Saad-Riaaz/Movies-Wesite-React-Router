import { useEffect, useState } from "react";
import { Cards } from "./Cards";
import "./MovieRow.css";

export const MovieRow = ({ title, fetchFunction, mediaType = "movie" }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchFunction()
      .then((data) => {
        setItems(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="movieRow">
        <h2 className="rowTitle">{title}</h2>
        <p className="rowLoading">Loading...</p>
      </div>
    );
  }

  if (items.length === 0) return null;

  return (
    <div className="movieRow">
      <h2 className="rowTitle">{title}</h2>
      <ul className="rowScroll">
        {items.map((item) => (
          <Cards key={item.id} curMovie={item} mediaType={mediaType} />
        ))}
      </ul>
    </div>
  );
};