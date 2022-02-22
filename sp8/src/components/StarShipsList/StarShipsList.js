import React, { useEffect, useState } from 'react';
import './starShipsList.scss';

function StarShipsList() {

  const SWAPI_BASE_URL = `https://swapi.dev/api/vehicles`

  const [shipList, setShipList] = useState([]);

  useEffect(() => {

    fetch(SWAPI_BASE_URL)
      .then((response) => response.json())
      .then((data) => { setShipList(data.results) });
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shipToShow = shipList.map((ship, index) => {
    return (
      <div className="list-item" key={index}>
        <h3>{ship.name}</h3>
        <h5>{ship.model}</h5>
      </div>
    )
  });
  
    return (
      <>
        {shipToShow}
      </>
    );
  }

export default StarShipsList;