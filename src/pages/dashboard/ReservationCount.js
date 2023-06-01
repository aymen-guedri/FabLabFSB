import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReservationCount() {
  const [reservationCount, setReservationCount] = useState(0);

  useEffect(() => {
    fetchReservationCount();
  }, []);

  const fetchReservationCount = () => {
    axios
      .get('/api/reservations/count')
      .then(response => {
        setReservationCount(response.data.count);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Reservations : {reservationCount}</h2>
    </div>
  );
}

export default ReservationCount;
