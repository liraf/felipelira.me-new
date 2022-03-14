import * as React from "react";
import { Link, To } from "react-router-dom";
import "./Button.scss";

export interface ButtonProps {
  className?: string,
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  to?: To,
}

const Button = (props: ButtonProps) => {
  const {
    className = '',
    children,
    onClick,
    to,
  } = props;

  if (to) {
    return (
      <Link
        className={`button ${className}`}
        to={to}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
