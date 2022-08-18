import React from "react";
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, color, bgColor, text, borderRadius, size, width, bgHoverColor ,cancel}) => {
  const { setIsClicked } = useStateContext();
  return (<button
    type="Button"
    onClick={() => setIsClicked(cancel)}
    style={{ backgroundColor: bgColor, color, borderRadius }}
    className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
  >
    {icon} {text}
  </button>);
};

export default Button;
