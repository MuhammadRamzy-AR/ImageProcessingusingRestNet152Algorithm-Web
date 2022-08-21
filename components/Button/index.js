// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import style from "./Button.module.css";

const Button = ({ variant, children, onClick }) => {
  const className = [];

  if (variant === "auth") {
    className.push(style.auth);
  }

  return (
    <button onClick={onClick} className={className.join(" ")}>
      {children}
    </button>
  );
};

export default Button;
