import React from 'react';
import placeholder from '../../images/placeholder.jpg';
import './listPilots.scss';

const ListPilots = ({ data }) => {

    let baseUrlImages = "https://starwars-visualguide.com/assets/img/characters";

    const replaceIMG = (event) => {
        event.target.onerror = null;
        event.target.src = placeholder;
    }

    let pilots = data.map((pilot, index) => {
        let id = pilot.url.replace(/[^0-9]/g, '');
        return (
            <div key={index} className='pilot-detail'>
                <img
                    src={`${baseUrlImages}/${id}.jpg`}
                    alt={pilot.name}
                    onError={replaceIMG}
                />
                <div>
                    <p><b>Pilot Name:</b> {pilot.name}</p>
                    <p><b>Gender:</b> {pilot.gender}</p>
                    <p><b>Year of Born:</b> {pilot.birth_year}</p>
                    <p><b>Height:</b> {pilot.height}</p>
                </div>
                <div>
                    <p><b>Mass:</b> {pilot.mass}</p>
                    <p><b>Hair Color:</b> {pilot.hair_color}</p>
                    <p><b>Skin Color:</b> {pilot.skin_color}</p>
                    <p><b>Eyes Color:</b> {pilot.eye_color}</p>
                </div>
            </div>
        );
    });

    if (pilots.length === 0) {
        return (
            <>
            </>
        );
    } else {
        return (
            <div className='itemDetail'>
                <h2>Pilots</h2>
                {pilots}
            </div>
        );
    }

}
export default ListPilots;