import { GlobalStyle2 } from "./Style";
import { Link, useLocation } from "react-router-dom";
import {resume} from "./resume.txt"
// import {} from 'react'

import styles from "./Navbar.module.css"

function Navbar() {
  // const us
  const path = useLocation().pathname;
  let color="";
  let [about, work, contact] = ["", "", ""];
  if (path === "/MyPortfolio") {
    about = "active";
    color="one";
  } else if (path === "/MyPortfolio/work") {
    work = "active";
    color="two";
  } else if (path === "/MyPortfolio/contact") {
    contact = "active";
    color="three";
  }

  return (
    <div className="Parent">
        <GlobalStyle2 />
        <div className={`${color} header`} ></div>
      <div className="Navbar">
        <Link to="/MyPortfolio" className={`${about} link`}>
          About
        </Link>
        <Link to="/MyPortfolio/work" className={work}>
          Work
        </Link>
        <Link to="/MyPortfolio/contact" className={contact}>
          Contact
        </Link>
      </div>
      <div className={`${color} footer`}></div>
    </div>
  );
}

export default Navbar;
