import React from "react";
import "./button.scss";

export type ButtonProps = {
  onButtonClick: (isOpen: boolean) => void
}

const Button: React.FC<ButtonProps> = ({onButtonClick}) => {
  return (
    <div className="button-wrapper">
      <button className="button" onClick={() => onButtonClick(true)}>
        Налоговый вычет
      </button>
    </div>
  )
}

export default Button;
