"use client";
import React, { useEffect, useRef, useState } from "react";
z
const Closedropdown = () => {
  const [showContainer, setShowContainer] = useState(false);
  const containerRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowContainer(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div ref={containerRef} className="mt-12 w-[400px] relative">
      <div
        onClick={() => setShowContainer(true)}
        className="py-4 rounded-2xl border border-gray-300 cursor-pointer"
      ></div>
      {showContainer === true && (
        <div className="bg-gray-50 shadow-lg w-full absolute top-10 h-40"></div>
      )}
    </div>
  );
};

export default Closedropdown;
