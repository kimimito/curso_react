import React, { useEffect, useState } from 'react';
import './starShipsList.scss';
import { Link } from 'react-router-dom';

function StarShipsList() {

  let SWAPI_STARSHIPS_URL = `https://swapi.dev/api/starships/`;

  const [shipList, setShipList] = useState([]);
  const [nextCall, setNextCall] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [endScroll, setEndScroll] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await window.fetch(SWAPI_STARSHIPS_URL, {
        method: 'GET',
      }).then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }).then((data) => {
        if (data.next) setNextCall(data.next)
        setShipList(shipList.concat(data.results))
      }).catch((response) => {
        return response = 'Sorry, we are experiencing problems, please try again later.';
      });
    }
    fetchData();
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endScroll]);

  useEffect(() => {
    if (!isFetching) return;
    if (nextCall) {
      setTimeout(() => {

        async function fetchNextData() {
          await window.fetch(nextCall, {
            method: 'GET',
          }).then((response) => {
            if (response.status === 200) {
              return response.json();
            }
          }).then((data) => {
            setNextCall(data.next)
            if (!data.next) {
              setEndScroll(true);
            }
            setShipList(shipList.concat(data.results))
          }).catch((response) => {
            return response = 'Sorry, we are experiencing problems, please try again later.';
          });
        }
        fetchNextData();
        setIsFetching(false);
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching]);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching || endScroll) return;
    setIsFetching(true);
  }

  return (
    <>
      {shipToShow}
      {isFetching && 'Fetching more list items...'}
    </>
  );
}

export default StarShipsList;