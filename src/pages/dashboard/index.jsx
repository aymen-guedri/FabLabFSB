import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../Data/mockData.js";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Sidebar from "../../pages/global/Sidebar";
import Topbar from "../../pages/global/Topbar";
import { orange } from "@mui/material/colors";
import UserCount from "./UserCount ";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TableUsers from "../UsersList/TableUsers";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);








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

    <Box display="flex" >

    <Box ml="0px" sx={{ width: 1/5 }}  >
    <Sidebar isSidebar={isSidebar} />
    </Box>

    <Box m="20px" sx={{ width: 1 }}>
      {/* HEADER */}
      <Topbar setIsSidebar={setIsSidebar} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        
        <Box>
        
          <Button
            sx={{
              backgroundColor: "orange",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <a href="https://aymenguedri.me/" target="_blank">Developed By Aymen Guedri</a>
            
          </Button>
        </Box>
      </Box>

      

      {/* GRID & CHARTS */}
      <Box
      
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
      
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        
          <StatBox
            title={reservationCount}
             
            subtitle="Total Reservations"
            
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="4"
            subtitle="Number of Students and Users"
            
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="6"
            subtitle="Materials to use"
            
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <h5>3D Printing</h5>
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
          <h5 style={{color:"orange"}}>Users List</h5>
          <TableUsers />
            
          </Box>
          
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Surveillance camera
            </Typography>
          </Box>
         
            <Box
           
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              
              p="15px"
            >
            {/*
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              */}
              {/* <Box color={colors.grey[100]}>{transaction.date}</Box>   */}
         
            {/*
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            */}
            </Box>
            
         
        </Box>
{/*
       
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              TND 48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      */}
      </Box>
    </Box>

    </Box>
 
  );
};

export default Dashboard;
