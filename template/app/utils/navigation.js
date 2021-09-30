import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "./screensNames";
import Home from "../containers/Home";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={screensNames.HOME} component={Home} />
    </Stack.Navigator>
  );
}

export default Navigator;
