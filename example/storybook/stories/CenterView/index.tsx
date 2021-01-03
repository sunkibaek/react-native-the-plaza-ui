import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface IProps {
  children: ReactNode;
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default function CenterView({ children }: IProps) {
  return <View style={style.main}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};
