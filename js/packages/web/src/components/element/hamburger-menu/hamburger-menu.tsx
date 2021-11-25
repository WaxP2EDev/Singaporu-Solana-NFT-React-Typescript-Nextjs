import React, { useState } from "react";
import Navigation from "../navigation/navigation";
import { MenuLabel, NavBackground, Icon } from "./hamburger-menu.styles";
function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel className="navi-toggle" htmlFor="navi-toggle" onClick={handleClick} >
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click} handleClick={() => handleClick()} />
    </>
  );
}
export default HamburgerMenu;
