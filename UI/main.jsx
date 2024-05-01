import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

function FilmEntry({ id, title, description }) {
  return (
    <p>
      <a href={`/film/${id}`}>{title}</a>: {description}
    </p>
  );
}

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        const filmsResponse = await fetch("/api/v1/films");
        const filmsData = await filmsResponse.json();
        setFilms(filmsData);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    }
    fetchFilms();
  }, []); 

  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <FilmEntry
            id={film.id}
            title={film.title}
            description={film.description}
          />
        </li>
      ))}
    </ul>
  );
}

const root = createRoot(document.getElementById("app"));
root.render(<App />);
