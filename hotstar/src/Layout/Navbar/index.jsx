import React, { Fragment } from "react";
import "./index.css";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccountCircleIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "react-router-dom";
import Kids from "../../pages/Kids";

const data = [
  {
    path:"/HotstarSpecial",
    heading:"Hotstar Special",
  },
  {
    path:"/StarBharat",
    heading:"Star Bharat",
  },{
    path:"/StarMaa",
    heading:"Star Maa",
  },{
    path:"/StarVijay",
    heading:"Star Vijay",
  },{
    path:"/StarPlus",
    heading:"Star Plus",
  },{
    path:"/V_Day_Special",
    heading:"V_Day_Special",
  },
]

const data1 = [
  {
    path:"/English",
    heading:"English",
  },
  {
    path:"/Hindi",
    heading:"Hindi",
  },{
    path:"/Bengali",
    heading:"Bengali",
  },{
    path:"/Japanese",
    heading:"Japanese",
  },{
    path:"/Korean",
    heading:"Korean",
  },{
    path:"/Marathi",
    heading:"Marathi",
  },
  {
    path:"/Tamil",
    heading:"Tamil",
  },
  {
    path:"/Telugu",
    heading:"Telugu",
  },
]

const data2 = [
  {
    path:"/Cricket",
    heading:"Cricket",
  },
  {
    path:"/FootBall",
    heading:"FootBall",
  },{
    path:"/AmericianFootBall",
    heading:"AmericianFootBall",
  },{
    path:"/Formula",
    heading:"Formula",
  },{
    path:"/Hockey",
    heading:"Hockey",
  },
  {
    path:"/Kabaddi",
    heading:"Kabaddi",
  },
  {
    path:"/Tennis",
    heading:"Tennis",
  },
]

const Navbar = () => {
  
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ background: "black" }}>
          <div style={{ border: "1px solid transparent" }}>
            <ul>
              <li>
                <button className="logo">
                  <AccountCircleIcon />
                </button>
              </li> 
              <li>
              <Link to="/"><img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"></img></Link>
              </li>
              <div class="dropdown">
                <li class="dropbtn">Tv</li>
                <div class="dropdown-content">
                  {
                    data.map((value)=>{
                      const {path,heading} = value;
                      return(
                        <Fragment>
                          <Link to={path}>{heading}</Link>
                        </Fragment>
                      );
                    })
                  }
                </div>
              </div>
              <div class="dropdown">
                <li class="dropbtn">Movies</li>
                <div class="dropdown-content">
                {
                    data1.map((value)=>{
                      const {path,heading} = value;
                      return(
                        <Fragment>
                          <Link to={path}>{heading}</Link>
                        </Fragment>
                      );
                    })
                  }
                </div>
              </div>
              <div class="dropdown">
                <li class="dropbtn">Sports</li>
                <div class="dropdown-content">
                {
                    data2.map((value)=>{
                      const {path,heading} = value;
                      return(
                        <Fragment>
                          <Link to={path}>{heading}</Link>
                        </Fragment>
                      );
                    })
                  }   
                </div>
              </div>
              <li><Link style={{ color: "white",textDecoration:"none"}}  to="/Disney">Disney+</Link></li>
              <li><Link style={{ color: "yellow", fontSize: "24px",textDecoration:"none"}} to="/Kids">Kids</Link></li>
              <div className="Search_Content">
                <input placeholder="Search Here"></input>
                <Button variant="contained">SUBSCRIBE</Button>
                <button className="logo">
                  <AccountBoxIcon />
                </button>
              </div>
            </ul>
          </div>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
