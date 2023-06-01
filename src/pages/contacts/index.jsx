import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Sidebar from "../../pages/global/Sidebar";
import Topbar from "../../pages/global/Topbar";
import PostSide from "../../components/PostSide/PostSide";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReservationsTable from "./ReservationsTable ";

const Contacts = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const [isSidebar, setIsSidebar] = useState(true);

  

  return (

   <Box display="flex" >

   <Box ml="0px" sx={{ width: 1/5 }}  >
    <Sidebar isSidebar={isSidebar} />
    </Box>

    <Box m="20px"  sx={{ width: 1 }}>
    <Topbar setIsSidebar={setIsSidebar} />
    <Header title="FabLab FSB Reservation" subtitle="" />

    <ReservationsTable />
    
      
    </Box>
    </Box>
  );
};


export default Contacts;