import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookingForm = ({ show }) => {
  // Use state to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle form input change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the form data, such as booking the ticket
    // You can access the show data via the 'show' prop and the form data via the 'formData' state
    // For this example, we'll simply log the form data to the console
    console.log('Booking Details:', {
      show: show.name,
      formData,
    });
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <h3>Show: {show.name}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

BookingForm.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookingForm;
