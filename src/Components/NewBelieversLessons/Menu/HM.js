import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import { useOnClickOutside } from "../../../hooks";
import HamburgerMenu from "./HamburgerMenu.js";
import Menu from "./Menu.js";
import Arrow from "./Arrow.js";

function HM() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className="NavBar" ref={node}>
        <FocusLock disabled={!open}>
          {/* <Arrow
            className="menu"
            open={open}
            setOpen={setOpen}
            aria-controls={menuId}
          /> */}
          <HamburgerMenu
            className="menu"
            open={open}
            setOpen={setOpen}
            aria-controls={menuId}
          />
          <Menu open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
    </>
  );
}

export default HM;
