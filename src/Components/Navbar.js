import logo from "./Images/logo.svg";
import hamburger from "./Images/icon-hamburger.svg";
import icon_close from "./Images/icon-close.svg";
import bg_pattern from "./Images/bg-pattern-mobile-nav.svg";
import { useEffect, useState } from "react";

function Navbar() {

  const [width, setWidth] = useState(window.innerWidth);
  const [menu, setMenu] = useState(false);
  
  function getWidth() {
    setWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener("resize", getWidth);
    
  });

  return (
    <nav>
      <img src={logo} alt="logo" />
      {width >= 738 ? <div className="nav-components">
        <div>HOW WE WORK</div>
        <div>BLOG</div>
        <div>ACCOUNT</div>
        <div className="view">VIEW PLANS</div>
      </div> : !menu ? <img src={hamburger} className="hamburger" alt="hamburger" onClick={() => setMenu(true)} /> : <img src={icon_close} className="hamburger" alt="hamburger" onClick={() => setMenu(false)} /> }
      {menu ? <div className="menu-container">
        <div>HOW WE WORK</div>
        <div>BLOG</div>
        <div>ACCOUNT</div>
        <div className="view">VIEW PLANS</div>
        <img src={bg_pattern} />
      </div> : null}
    </nav>
  )
} 

export default Navbar;