import React from "react";
import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import "./app/config/i18n";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { store } from "./app/config/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./app/utils/navigation";

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  </Provider>
));
