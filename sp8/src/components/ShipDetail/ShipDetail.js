import React from 'react';
import { useLocation } from 'react-router-dom';
import placeholder from  '../../images/placeholder.jpg';
import './shipDetail.scss';


function ShipsDetail() {

  const location = useLocation();
  const { shipData } = location.state;

  const imgDataUrl = shipData.url.substring(0, shipData.url.length - 1);;
  const imgNum = imgDataUrl.substr(imgDataUrl.lastIndexOf('/') + 1);
  
  const STARSHIPS_URL_IMG = `https://starwars-visualguide.com/assets/img/starships/`;
  const imgUrl = STARSHIPS_URL_IMG + imgNum + '.jpg';

  const replaceIMG = (event) => {
    event.target.onerror = null; 
    event.target.src = placeholder;
  }
  
    return (
      <main>
        <div className='itemDetail'>
          <img className='itemImage' src={imgUrl} onError={replaceIMG} alt='ship' />
          <h2>{ shipData.name }</h2>
          <p>
            Lucas ipsum dolor sit amet leia sidious darth antilles mandalorians aayla ben solo vader hoth. Windu calamari hutt yoda padmé k-3po thrawn. Boba calamari skywalker ben. Mace binks darth solo hoth r2-d2 mon wedge biggs. Mara dagobah moff kamino yoda aayla. Utapau leia mandalore yavin luke darth kenobi. Hutt hutt sith fett skywalker padmé owen. Palpatine kessel hutt obi-wan.
          </p>
          <div className='contentDetail'>
            <div>
              <p><b>Model:</b> { shipData.model } </p>
              <p><b>Starship class:</b> { shipData.starship_class } </p>
              <p><b>Manufacturer:</b> { shipData.manufacturer } </p>
              <p><b>Cost in credits:</b> { shipData.cost_in_credits } </p>
              <p><b>Length:</b> { shipData.length } </p>
              <p><b>Max atmosphering speed:</b> { shipData.max_atmosphering_speed } </p>
            </div>
            <div>
              <p><b>Crew:</b> { shipData.crew } </p>
              <p><b>Passengers:</b> { shipData.passengers } </p>
              <p><b>Cargo capacity:</b> { shipData.cargo_capacity } </p>
              <p><b>Consumables:</b> { shipData.consumables } </p>
              <p><b>Hyperdrive rating:</b> { shipData.hyperdrive_rating } </p>
              <p><b>MGLT:</b> { shipData.MGLT } </p>
            </div>
          </div>
        </div>
      </main>
    );
  }

export default ShipsDetail;