import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../../../hooks";
import HamburgerMenu from "./HamburgerMenu.js";
import Menu from "./Menu.js";

function HM() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="NavBar" ref={node}>
      <FocusLock disabled={!open}>
          <HamburgerMenu className='menu' open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu style={{position: "fixed"}} open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
    </>
  );
}

export default HM;
