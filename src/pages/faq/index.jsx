import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Sidebar from "../../pages/global/Sidebar";
import Topbar from "../../pages/global/Topbar";
import { useState } from "react";
import PostSide from "../../components/PostSide/PostSide";
import './cam.css'
const Cam = () => {
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
    <Header title="FabLab FSB Cameras" subtitle="" />
    <div className="Main">
	<div class="camera" role="img" aria-label="White camera rotating left and right">
		<div class="camera__shadow"></div>
		<div class="camera__front"></div>
		<div class="camera__contents">
			<div class="camera__red-light"></div>
			<div class="camera__lens-shadow"></div>
			<div class="camera__lens-back"></div>
			<div class="camera__lens-ring">
				<div class="camera__lens-ring-glare1"></div>
				<div class="camera__lens-ring-glare2"></div>
				<div class="camera__lens-ring-glare3"></div>
			</div>
			<div class="camera__lens-inner">
				<div class="camera__lens-inner-glare1"></div>
				<div class="camera__lens-inner-glare2"></div>
				<div class="camera__lens-eye-shadow"></div>
				<div class="camera__lens-glare"></div>
				<div class="camera__lens-eye">
					<div class="camera__lens-eye-ring"></div>
					<div class="camera__lens-eye-inner-glare"></div>
					<div class="camera__lens-eye-center">
						<div class="camera__lens-eye-center-glare"></div>
					</div>
					<div class="camera__lens-eye-glass-color"></div>
					<div class="camera__lens-eye-glare"></div>
					<div class="camera__lens-eye-glass"></div>
				</div>
			</div>
		</div>
	</div>
	
</div>


    
      
    </Box>
    </Box>
  );
};


export default Cam;
