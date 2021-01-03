import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Button } from "react-native-the-plaza-ui";

import CenterView from "./CenterView";

storiesOf("Button", module)
  .addDecorator((getStory: any) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <Button onPress={action("clicked-text")}>
      {text("Button text", "Hello Button")}
    </Button>
  ));
