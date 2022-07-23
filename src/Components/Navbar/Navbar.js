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
  if (path === "/") {
    about = "active";
    color="one";
  } else if (path === "/work") {
    work = "active";
    color="two";
  } else if (path === "/contact") {
    contact = "active";
    color="three";
  }

  return (
    <div className="Parent">
        <GlobalStyle2 />
        <div className={`${color} header`} ></div>
      <div className="Navbar">
        <Link to="/" className={`${about} link`}>
          About
        </Link>
        <Link to="/work" className={work}>
          Work
        </Link>
        <Link to="/contact" className={contact}>
          Contact
        </Link>
      </div>
      <div className={`${color} footer`}>
        <div className="contact">
          <a href = "mailto: abc@example.com"> <i className="fa fa-envelope" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/potti-chandra-sekhar-sai-716987221/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href="https://github.com/Pcssai7093"><i className="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
