import React from "react";
import PropTypes from "prop-types";

export default function ReactRouter({
  component: Component = "p",
  message,
  ...props
}) {
  return <Component {...props}>{message}</Component>;
}

if (__DEV__) {
  ReactRouter.propTypes = {
    message: PropTypes.string.isRequired
  };
}
