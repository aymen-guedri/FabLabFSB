import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Post from "./pages/Post";
import Contacts from "./pages/contacts";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { useSelector } from "react-redux";
import Auth from "./pages/Auth/Auth";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <ColorModeContext.Provider value={colorMode}>
    
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <div className="app" style={{
        height:
          window.location.href === "http://localhost:3000/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
      }}>
          
          <main className="content">

          <div className="blur" style={{ top: "-18%", right: "0" }}></div>
          <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
            <Routes>
              <Route path="/" element={user ? <Dashboard />: <Navigate to="auth" />} />
              <Route path="/home" element={user ? <Dashboard /> : <Navigate to="../auth" />}/>
              <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />}/> 
              <Route path="/team" element={user ? <Team />:<Navigate to="../auth" />} />
              <Route path="/printer" element={user ? <Line />: <Navigate to="../auth" />} />
              <Route path="/camera" element={user ? <FAQ />: <Navigate to="../auth" />} />
              <Route path="/post" element={user ? <Post />: <Navigate to="../auth" />} />

              <Route path="/bar" element={user ? <Bar />: <Navigate to="../auth" />} />
              <Route path="/pie" element={user ? <Pie />: <Navigate to="../auth" />} />
              <Route path="/contacts" element={user ? <Contacts />: <Navigate to="../auth" />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
