// TicketBookingForm.js
import React from 'react';

function TicketBookingForm({ show }) {
  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h1>Book a Ticket for {show.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Number of Tickets:
          <input type="number" name="numTickets" required />
        </label>
        <input type="hidden" name="movieName" value={show.name} />
        <input type="hidden" name="showId" value={show.id} />
        <button type="submit">Book Tickets</button>
      </form>
    </div>
  );
}

export default TicketBookingForm;
