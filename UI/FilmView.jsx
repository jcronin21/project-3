import React, { useEffect, useState } from 'react';

function FilmView() {
    const [film, setFilm] = useState(null);

    useEffect(() => {
        async function fetchFilmData() {
            const filmId = window.location.pathname.split('/').pop();
            const response = await fetch(`/api/v1/films/${filmId}`);
            const data = await response.json();
            setFilm(data);
        }

        fetchFilmData();
    }, []);

    return (
        <div>
            {film ? (
                <div>
                    <h1>{film.title}</h1>
                    <p>{film.description}</p>
                </div>
            ) : (
                <p>Loading film info...</p>
            )}
        </div>
    );
}

export default FilmView;
