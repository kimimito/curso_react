import React from 'react';
import placeholder from '../../images/placeholder.jpg';
import './listFilms.scss';

const ListFilms = ({ data }) => {

    let baseUrlImages = "https://starwars-visualguide.com/assets/img/films"

    const replaceIMG = (event) => {
        event.target.onerror = null;
        event.target.src = placeholder;
    }

    let films = data.map((film, index) => {
        let id = film.url.replace(/[^0-9]/g, '');
        return (
            <div key={index} className='film-detail'>
                <img
                    src={`${baseUrlImages}/${id}.jpg`}
                    alt={film.title}
                    onError={replaceIMG}
                />
                <div>
                    <p><b>Title:</b> {film.title}</p>
                    <p><b>Episode:</b> {film.episode_id}</p>
                    <p><b>Director:</b> {film.director}</p>
                    <p><b>Producer:</b> {film.producer}</p>
                    <p><b>Release date:</b> {film.release_date}</p>
                </div>
                <div>
                    <p>{film.opening_crawl}</p>
                </div>
            </div>
        );
    });

    if (films.length === 0) {
        return (
            <>
            </>
        );
    } else {
        return (
            <div className='itemDetail'>
                <h2>Films</h2>
                {films}
            </div>
        );
    }

}
export default ListFilms;