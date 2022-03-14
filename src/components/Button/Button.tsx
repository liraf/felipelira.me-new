import * as React from "react";
import "./Button.scss";

export interface ButtonProps {
  className?: string,
  children: React.ReactNode,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = (props: ButtonProps) => {
  const {
    className = '',
    children,
    onClick,
  } = props;

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
