import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  size?: string;
  color: string;
  icon?: string;
  caption?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonCustom: React.FC<ButtonProps> = ({
  type,
  size,
  color,
  icon,
  caption,
  onClick,
  children,
}) => (
  <button type={type} className={`btn btn-${color} ${size}`} onClick={onClick}>
    {icon && <i className={`fa ${icon} mr-1`} />}
    {caption}
    {children}
  </button>
);

export default ButtonCustom;
