import React, { useEffect, useState } from 'react';
import '../css/ShowList.css'; // Update the import path
import { Link } from 'react-router-dom';


const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="show-list">
      <h1>TV Shows</h1>
      {shows.map((show) => (
        <div className="show-card" key={show.show.id}>
          <h2>{show.show.name}</h2>
          <p>{show.show.language}</p>
          <p>{show.show.genres.join(', ')}</p>
          <Link to={`/summary/${show.show.id}`}>
            <button>View Summary</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowList;
