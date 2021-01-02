import React from "react";
import { Alert, StyleSheet, View } from "react-native";

import { Button } from "react-native-the-plaza-ui";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function App() {
  const handleButtonPress = () => {
    Alert.alert("Button pressed");
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleButtonPress}>Button</Button>
    </View>
  );
}
