import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    fetchUserCount();
  }, []);

  const fetchUserCount = async () => {
    try {
      const response = await axios.get('/user/count');
      setUserCount(response.data.count);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Number of Users: {userCount}</h2>
    </div>
  );
};

export default UserCount;
