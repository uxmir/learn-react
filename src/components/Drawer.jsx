
"use client";
import React from "react";
import { PropTypes } from "prop-types";
const Drawer = ({
  overlay,
  container,
  children,
  close,
  containerWidth,
  drawerType,
  containerColor,
}) => {
  const positionTransform = {
    right_visible: "translate-x-0",
    right_hidden: "translate-x-full",
    left_visible: "translate-x-0",
    left_hidden: "-translate-x-full",
  };
 const dynamicClasses= `${containerColor} ${containerWidth}`
  return (
    <>
      <div
        onClick={close}
        className={`w-full h-full fixed top-0 left-0 right-0 bg-black/60 z-[9999999] ${
          overlay === true ? "block" : "hidden"
        }`}
      ></div>
      {drawerType === "right" && (
        <div
          className={`${dynamicClasses}  transition-all duration-500 h-full fixed top-0 right-0  z-[9999999] ${
            container === true
              ? `${positionTransform.right_visible}`
              : `${positionTransform.right_hidden}`
          }  `}
        >
          {children}
        </div>
      )}
      {drawerType === "left" && (
        <div
          className={`${dynamicClasses}  transition-all duration-500 h-full fixed top-0 left-0  z-[9999999] ${
            container === true
              ? `${positionTransform.left_visible}`
              : `${positionTransform.left_hidden}`
          }  `}
        >
          {children}
        </div>
      )}
    </>
  );
};
Drawer.propTypes = {
  containerWidth: PropTypes.string,
  containerColor:PropTypes.string,
  zIndex:PropTypes.string
};
Drawer.defaultProps = {
  containerWidth: "w-1/2",
  containerColor:"bg-white",
};
export default Drawer;


//Usages
"use client";
import React, { useState } from "react";
import Drawer from "./Drawer";
const ToggleDrawer = () => {
  const [overlay, setOverlay] = useState(false);
  const [drawerContainer, setDrawerContainer] = useState(false);
  const handleDrawer = (condition) => {
    setDrawerContainer(condition);
    setOverlay(condition);
  };
  return (
    <>
      <div className="flex gap-x-8 my-12">
        <button
          onClick={() => handleDrawer(true)}
          className="px-3 py-3 bg-green-500 text-white"
        >
          OpenDrawer
        </button>
      </div>
      <Drawer
        drawerType={"right"}
        close={() => handleDrawer(false)}
        overlay={overlay}
        container={drawerContainer}
        containerColor={"bg-white"}
        containerWidth={"w-1/2"}
      >
        mirmonir
      </Drawer>
    </>
  );
};

export default ToggleDrawer;

