import React, { Fragment } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";


const KidsNavbar = () => {
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "#002159",border:"none",boxShadow:"none"}}>
          <div style={{ border:"none"}}>
            <ul>
              <li>
                <button className="logo">
                  <AccountCircleIcon />
                </button>
              </li> 
              <li>
              <Link to="/"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-kids.svg"></img></Link>
              </li>
              <div className="Search_Content">
                <input placeholder="Search Here" className="input_box"></input>
                <Button variant="contained" style={{background:"gold"}} className="button_hover">Exit Kids</Button>
              </div>
            </ul>
          </div>
        </AppBar>
      </Box>
    </div>
  );
};

export default KidsNavbar;
