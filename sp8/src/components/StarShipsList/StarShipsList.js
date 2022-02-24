import React, { useEffect, useState } from 'react';
import './starShipsList.scss';
import { Link } from 'react-router-dom';

function StarShipsList() {

  const SWAPI_STARSHIPS_URL = `https://swapi.dev/api/starships`

  const [shipList, setShipList] = useState([]);

  useEffect(() => {

    fetch(SWAPI_STARSHIPS_URL)
      .then((response) => response.json())
      .then((data) => { setShipList(data.results) });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shipToShow = shipList.map((ship, index) => {
    let url = `/StarShips/Detail`;
    return (
      <Link to={url} state={{ shipData: ship }} className='list-item' key={index}>
        <h3>{ship.name}</h3>
        <h5>{ship.model}</h5>
      </Link>
    )
  });
  
    return (
      <>
        {shipToShow}
      </>
    );
  }

export default StarShipsList;