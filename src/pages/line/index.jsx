import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Sidebar from "../../pages/global/Sidebar";
import Topbar from "../../pages/global/Topbar";
import { useState } from "react";
import PostSide from "../../components/PostSide/PostSide";
import './3d.css'
import { Link } from "react-router-dom";

const Printer = () => {
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
    <Header title="3D Printer" subtitle="" />

    <div className="button3D">
    <a href="https://fablabfsb.octoeverywhere.com" target="_blank" ><div className="box">Print Now</div></a>

    </div>
   

<div id="anime">
        <div className="stars" />
        <div id="tridiv">
          <div className="scene" style={{WebkitTransform: 'rotateX(-35deg) rotateY(-22deg)', MozTransform: 'rotateX(-35deg) rotateY(-22deg)', msTransform: 'rotateX(-35deg) rotateY(-22deg)', transform: 'rotateX(-35deg) rotateY(-22deg)'}}>
            <div className="shape cuboid-1 cub-1">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape prism-1 pri-1">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.12549)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-2 cub-2">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape prism-2 pri-2">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0901961)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
            </div>
            <div className="shape prism-3 pri-3">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.160784)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
            </div>
            <div className="shape prism-4 pri-4">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.396078)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
            </div>
            <div className="shape prism-5 pri-5">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.156863)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-3 cub-3">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-4 cub-4">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.32549)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.27451)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
            </div>
            <div className="shape prism-6 pri-6">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0588235)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
            </div>
            <div className="shape prism-7 pri-7">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.290196)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
            </div>
            <div className="shape prism-8 pri-8">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.541176)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape prism-9 pri-9">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.305882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cylinder-1 cyl-1">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.619608)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.505882)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.376471)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.247059)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.117647)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0862745)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0941176)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0196078)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0941176)'}} />
              </div>
              <div className="face side s10">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.219608)'}} />
              </div>
              <div className="face side s11">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.352941)'}} />
              </div>
              <div className="face side s12">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.482353)'}} />
              </div>
              <div className="face side s13">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face side s14">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.690196)'}} />
              </div>
              <div className="face side s15">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.698039)'}} />
              </div>
            </div>
            <div className="shape cylinder-2 cyl-2">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.588235)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.392157)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00784314)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00784314)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.207843)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.611765)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape prism-10 pri-10">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.27451)'}} />
              </div>
            </div>
            <div className="shape cylinder-3 cyl-3">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.584314)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.384314)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.176471)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0156863)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0156863)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.215686)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.423529)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.615686)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cuboid-5 cub-5">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-6 cub-6">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.509804)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0901961)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
            </div>
            <div className="shape cylinder-4 cyl-4">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.619608)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.505882)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.376471)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.247059)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.117647)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0862745)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0941176)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0196078)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0941176)'}} />
              </div>
              <div className="face side s10">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.219608)'}} />
              </div>
              <div className="face side s11">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.352941)'}} />
              </div>
              <div className="face side s12">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.482353)'}} />
              </div>
              <div className="face side s13">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face side s14">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.690196)'}} />
              </div>
              <div className="face side s15">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.698039)'}} />
              </div>
            </div>
            <div className="shape cylinder-5 cyl-5">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.588235)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.392157)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00784314)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00784314)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.207843)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.611765)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cylinder-6 cyl-6">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.592157)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.396078)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.188235)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00392157)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.105882)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00392157)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.203922)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.411765)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.607843)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cuboid-7 cub-7">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape prism-11 pri-11">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.443137)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.509804)'}} />
              </div>
            </div>
            <div className="shape cuboid-8 cub-8">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.509804)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0901961)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
              </div>
            </div>
            <div className="shape cuboid-9 cub-9">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.32549)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.27451)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cylinder-7 cyl-7">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.619608)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.505882)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.376471)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.247059)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.117647)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0862745)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0941176)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0196078)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0941176)'}} />
              </div>
              <div className="face side s10">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.219608)'}} />
              </div>
              <div className="face side s11">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.352941)'}} />
              </div>
              <div className="face side s12">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.482353)'}} />
              </div>
              <div className="face side s13">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face side s14">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.690196)'}} />
              </div>
              <div className="face side s15">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.698039)'}} />
              </div>
            </div>
            <div className="shape cylinder-8 cyl-8">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.588235)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.392157)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00784314)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00784314)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.207843)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.611765)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cylinder-9 cyl-9">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.588235)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.392157)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00784314)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00784314)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.207843)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.611765)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cylinder-10 cyl-10">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.619608)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.505882)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.376471)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.247059)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.117647)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0862745)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0941176)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0196078)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0941176)'}} />
              </div>
              <div className="face side s10">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.219608)'}} />
              </div>
              <div className="face side s11">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.352941)'}} />
              </div>
              <div className="face side s12">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.482353)'}} />
              </div>
              <div className="face side s13">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face side s14">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.690196)'}} />
              </div>
              <div className="face side s15">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.698039)'}} />
              </div>
            </div>
            <div className="shape prism-12 pri-12">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.584314)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-10 cub-10">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cylinder-11 cyl-11">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.592157)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.396078)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.188235)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00392157)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.105882)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00392157)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.203922)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.411765)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.607843)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cylinder-12 cyl-12">
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face side s0">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.592157)'}} />
              </div>
              <div className="face side s1">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.396078)'}} />
              </div>
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.188235)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.00392157)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.105882)'}} />
              </div>
              <div className="face side s5">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.00392157)'}} />
              </div>
              <div className="face side s6">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.203922)'}} />
              </div>
              <div className="face side s7">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.411765)'}} />
              </div>
              <div className="face side s8">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.607843)'}} />
              </div>
              <div className="face side s9">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
            </div>
            <div className="shape cuboid-11 cub-11">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-12 cub-12">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape prism-13 pri-13">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.482353)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.32549)'}} />
              </div>
            </div>
            <div className="shape prism-14 pri-14">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.541176)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0901961)'}} />
              </div>
            </div>
            <div className="shape prism-15 pri-15">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.403922)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
            </div>
            <div className="shape prism-16 pri-16">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.168627)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
            </div>
            <div className="shape prism-17 pri-17">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.643137)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face-wrapper rt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
                </div>
              </div>
              <div className="face-wrapper lt">
                <div className="face">
                  <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
                </div>
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-13 cub-13">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.509804)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0901961)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
              </div>
            </div>
            <div className="shape cuboid-14 cub-14">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.32549)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.27451)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
            </div>
            <div className="shape cuboid-15 cub-15">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.509804)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0901961)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
              </div>
            </div>
            <div className="shape cuboid-16 cub-16">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.32549)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.27451)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
            </div>
            <div className="shape cuboid-17 cub-17">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.32549)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.27451)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.705882)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.101961)'}} />
              </div>
            </div>
            <div className="shape cuboid-18 cub-18">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.509804)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.0901961)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0)'}} />
              </div>
            </div>
            <div className="shape cylinder-13 cyl-13">
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.584314)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.113725)'}} />
              </div>
            </div>
            <div className="shape cuboid-19 cub-19">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-20 cub-20">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-21 cub-21">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cuboid-22 cub-22">
              <div className="face ft">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.105882)'}} />
              </div>
              <div className="face bk">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face rt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.415686)'}} />
              </div>
              <div className="face lt">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.180392)'}} />
              </div>
              <div className="face bm">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.666667)'}} />
              </div>
              <div className="face tp">
                <div className="photon-shader" style={{backgroundColor: 'rgba(255, 255, 255, 0.0666667)'}} />
              </div>
            </div>
            <div className="shape cylinder-14 cyl-14">
              <div className="face tp">
              </div>
              <div className="face side s0">
              </div>
              <div className="face side s1">
              </div>
              <div className="face side s2">
              </div>
              <div className="face side s3">
              </div>
              <div className="face side s4">
              </div>
              <div className="face side s5">
              </div>
            </div>
            <div className="shape cylinder-15 cyl-15">
              <div className="face tp">
              </div>
              <div className="face side s0">
              </div>
              <div className="face side s1">
              </div>
              <div className="face side s2">
              </div>
              <div className="face side s3">
              </div>
              <div className="face side s4">
              </div>
              <div className="face side s5">
              </div>
            </div>
            <div className="shape cylinder-16 cyl-16">
              <div className="face tp">
              </div>
              <div className="face side s0">
              </div>
              <div className="face side s1">
              </div>
              <div className="face side s2">
              </div>
              <div className="face side s3">
              </div>
              <div className="face side s4">
              </div>
              <div className="face side s5">
              </div>
            </div>
            <div className="shape cylinder-17 cyl-17">
              <div className="face tp">
              </div>
              <div className="face side s0">
              </div>
              <div className="face side s1">
              </div>
              <div className="face side s2">
              </div>
              <div className="face side s3">
              </div>
              <div className="face side s4">
              </div>
              <div className="face side s5">
              </div>
            </div>
            <div className="shape cylinder-18 cyl-18">
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.584314)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.113725)'}} />
              </div>
            </div>
            <div className="shape cylinder-19 cyl-19">
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.584314)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.113725)'}} />
              </div>
            </div>
            <div className="shape cylinder-20 cyl-20">
              <div className="face side s2">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.584314)'}} />
              </div>
              <div className="face side s3">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.494118)'}} />
              </div>
              <div className="face side s4">
                <div className="photon-shader" style={{backgroundColor: 'rgba(0, 0, 0, 0.113725)'}} />
              </div>
            </div>
          </div>
        </div>
        <div className="build-with">
          <p>Make 3D easier With FabLab FSB</p>
          <a href="https://fablab-fsb.vercel.app/">
            <img src="/logo.png" alt="fablabfsb" />
          </a>
          <p>www.fablab-fsb.tn</p>
        </div>
      </div>

      
    
      
    </Box>
    </Box>
  );
};


export default Printer;
