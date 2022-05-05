import React from "react";
import clsx from "clsx";
import "../styles/index.scss";

export default function Button(props) {
  const { className, children, ...rest } = props;
  const classes = clsx("ui-button", className);

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
