

import React, { useEffect, useState } from 'react';
import '../css/ShowSummary.css'; // Update the import path

import BookingForm from './BookingForm'; // Update the import path
import { useParams } from 'react-router-dom';


const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show:', error);
      }
    };

    fetchShow();
  }, [id]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="show-summary">
      {show ? (
        <React.Fragment>
          <h1>{show.name}</h1>
          <p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
          <button onClick={openForm}>Book Movie Ticket</button>
          {isFormOpen && <BookingForm show={show} />}
        </React.Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowSummary;
