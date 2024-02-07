import React, { useState, useEffect } from "react";
import {
  StatusBar
 
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme,
  useNavigation,
} from "@react-navigation/native";

import AppStack from "./AppStack/AppStack";

const RootNavigator = () => {
  const Stack = createStackNavigator()
  return  (
    <NavigationContainer>
      <StatusBar backgroundColor="#yourStatusBarColor" barStyle="light-content" />

      <Stack.Navigator
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AppStack" component={AppStack} />
        {/* Add your Login screen here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
