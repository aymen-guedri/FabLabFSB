import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import UserCount from '../dashboard/UserCount ';


const TableUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/user');
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
      <TableContainer component={Paper} >
        <Table style={{backgroundColor: "none"}}>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>E-Mail</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.firstname}</TableCell>
                <TableCell>{user.lastname}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.username.endsWith('@fsb.u-carthage.tn') ? 'Student' : 'User Member'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUsers;
