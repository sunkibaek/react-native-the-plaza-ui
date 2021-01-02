import React, { ReactNode } from "react";
import { Text, TouchableOpacity } from "react-native";

interface IProps {
  children: ReactNode;
  onPress: () => void;
}

export const Button = ({ children, onPress }: IProps) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
