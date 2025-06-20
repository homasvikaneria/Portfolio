
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // start off screen
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      // Detect when hovering over interactive elements
      document.querySelectorAll("a, button, .cursor-pointer").forEach(el => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.querySelectorAll("a, button, .cursor-pointer").forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };

    const onMouseMove = e => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Cursor styles depend on hovered and clicked states
  const baseSize = 15;
  const hoverSize = 40;
  const clickSize = 25;

  let size = baseSize;
  if (clicked) size = clickSize;
  else if (hovered) size = hoverSize;

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: size,
    height: size,
    marginLeft: -size / 2,
    marginTop: -size / 2,
    borderRadius: "50%",
    backgroundColor: "#ec4899", // Tailwind's pink-500 hex (#ec4899)
    pointerEvents: "none",
    mixBlendMode: "difference",
    transition: "width 150ms ease-out, height 150ms ease-out, margin 150ms ease-out",
    zIndex: 9999,
  };

  return <div style={cursorStyle} />;
};

export default CustomCursor;
