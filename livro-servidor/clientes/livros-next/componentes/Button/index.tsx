import React from "react";


interface ButtonProps {
    type?: "submit" | "button" ;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
  
  }
  
  const Button: React.FC<ButtonProps> = ({ type = "submit", onClick, className, children } ) => {
    return (
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    );
  };
  
  export default Button;


