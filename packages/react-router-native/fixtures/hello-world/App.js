import React from "react";
import { StyleSheet, View } from "react-native";

import ReactRouterNative from "./react-router-native.production";

export default function App() {
  return (
    <View style={styles.container}>
      <ReactRouterNative message="Hello native" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
