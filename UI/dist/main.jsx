// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';


// const App = () => {
//     return (
//         <h1>Hello, React!</h1>
//     );
// };

// createRoot(document.getElementById('root')).render(<App />);
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import FilmEntry from './components/FilmEntry';

async function main() {
  const filmsResponse = await fetch("/api/v1/films");
  const films = await filmsResponse.json();

  ReactDOM.render(
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
    </ul>,
    document.getElementById("app")
  );
}

main();
