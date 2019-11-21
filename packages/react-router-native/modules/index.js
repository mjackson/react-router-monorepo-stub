import React from "react";
import { Text } from "react-native";
import ReactRouter from "react-router";
import PropTypes from "prop-types";

export default function ReactRouterNative({ message, ...props }) {
  return <ReactRouter {...props} component={Text} message={message} />;
}

if (__DEV__) {
  ReactRouterNative.propTypes = {
    message: PropTypes.string
  };
}
