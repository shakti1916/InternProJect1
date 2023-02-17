// ShowSummaryPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import TicketBookingForm from './TicketBookingForm';

function ShowSummaryPage() {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setSummary(data.summary));
  }, [id]);

  return (
    <div className="show-summary-page">
      <h1>Show Summary</h1>
      <p className="summary-text">{summary}</p>
      {/* <TicketBookingForm/> */}
    </div>
  );
}

export default ShowSummaryPage;
