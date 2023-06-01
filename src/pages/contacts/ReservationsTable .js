import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './reservation.css';

function ReservationsTable() {
  const [reservations, setReservations] = useState([]);
  const [reservationCount, setReservationCount] = useState(0);

  useEffect(() => {
    fetchReservations();
  }, []);

 const fetchReservations = () => {
  axios
    .get('/api/reservations')
    .then(response => {
      const sortedReservations = response.data.sort((a, b) => b.timestamp - a.timestamp);
      setReservations(sortedReservations);
      setReservationCount(sortedReservations.length); // Set the reservation count
    })
    .catch(error => {
      console.error(error);
    });
};


  const handleAcceptReservation = (reservation) => {
    // Show the message only for the accepted reservation
    reservation.showAcceptedMessage = true;
    setReservations([...reservations]);
  };

  const handleDeleteReservation = (reservationId) => {
    // Make an API request to delete the reservation
    axios
      .delete(`/api/reservations/${reservationId}`)
      .then(response => {
        // If the deletion was successful, fetch updated reservations
        fetchReservations();
      })
      .catch(error => {
        // Handle the error here, if needed
        console.error(error);
      });
  };

  return (
    <div>
     <h4>Number of Reservations : {reservationCount}</h4> {/* Display the reservation count */}
      <table className="reservations-table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Material</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>Type</th>
            
          </tr>
        </thead>
        <tbody>
          {reservations.map(reservation => (
            <tr key={reservation._id}>
              <td>
                {reservation.showAcceptedMessage ? (
                  <p style={{fontSize:"13px",color:"orange"}}>
                  Please send an email to the reservation requester, Informing them that their reservation has been accepted and kindly requesting them to provide all the necessary details about their work.
                  </p>
                ) : ( <div>
                  <button className="button button-primary" onClick={() => handleAcceptReservation(reservation)} style={{marginBottom:"10px"}}>
                    Accept
                  </button>
                  <button className="button button-danger" onClick={() => handleDeleteReservation(reservation._id)}>
                  Archive 
                </button>
                </div>
                  
                )}
              </td>
              
              <td style={{fontSize:"13px"}}>{`${reservation.firstName} ${reservation.lastName}`}</td>
              <td style={{fontSize:"13px"}}>{reservation.email}</td>
              <td style={{fontSize:"13px"}}>{reservation.phone}</td>
              <td style={{fontSize:"13px"}}>{reservation.material}</td>
              <td style={{fontSize:"13px"}}>{reservation.comments}</td>

              <td style={{fontSize:"13px"}}>{reservation.dateJ}</td>
              <td style={{fontSize:"13px"}}>From {reservation.time1} to {reservation.time2} </td>
              <td style={{fontSize:"13px"}}>
        {reservation.email.endsWith("@fsb.u-carthage.tn")
          ? "FSB student"
          : reservation.type}
      </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsTable;
