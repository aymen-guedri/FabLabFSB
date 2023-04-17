import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EmailIcon from '@mui/icons-material/Email';
import PostAddIcon from '@mui/icons-material/PostAdd';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import EngineeringIcon from '@mui/icons-material/Engineering';


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "colors.redAccent[400]",
        
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        width: 1 ,
        "& .pro-sidebar-inner": {
          background: `${colors.blueAccent[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",backgroundColor:"#868dfb",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebarProvider collapsed={isCollapsed} >
        <Menu iconShape="square" style={{marginTop:"20px"}}>
          {/* LOGO AND MENU ICON */}
          

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
              <Link to="/">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`/logo.png`}
                  style={{ cursor: "pointer", borderRadius: "10%" }}
                />
                </Link>
              </Box>
              
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} >
          <Link to="/" style={{ color: "#FE6000"}}>
            <Item
              title="Dashboard"
             
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              
              setSelected={setSelected}
            />
            </Link>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Link to="/team" style={{ color: "#FE6000"}}>
            <Item
              title="Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            
            <Item
              title="Users"
              to="/users"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Orders"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Forum"
              to="/"
              icon={<EmailIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Link to="/post" style={{ color: "#FE6000"}}>
            <Item
              title="Post"
              to="/post"
              icon={<PostAddIcon />}
              selected={selected}
              setSelected={setSelected}
            /></Link>
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Control Panel
            </Typography>
            <Link to="/camera" style={{ color: "#FE6000"}}>
            <Item
              title="Camera"
              to="/camera"
              icon={<CameraAltIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            
             <Link to="/printer" style={{ color: "#FE6000"}}>
            <Item
              title="3D Printer"
              to="/printer"
              icon={<ThreeDRotationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </Link>
            <Item
              title="Materials"
              to="/geography"
              icon={<EngineeringIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
         
        </Menu>

        
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;
