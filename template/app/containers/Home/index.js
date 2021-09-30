import React from "react";
import { Text, View } from "react-native";
import { Style } from "./style";
import { translation } from "./messages";
import I18n from "../../components/I18n";

export const Home = () => {
  return (
    <>
      <View style={Style.config}>
        <Text testId="configDone">Configuration Done</Text>
        <Text testId="textI18n">
          <I18n {...translation.default} />
        </Text>
      </View>
    </>
  );
};

export default Home;
