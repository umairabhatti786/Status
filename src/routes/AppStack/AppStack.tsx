import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Tabs from "../BottomTabs/Tabs";
import HomeScreen from "../../screens/main/HomeScreen";
import MessageScreen from "../../screens/main/MessageScreen";
import ProfileScreen from "../../screens/main/ProfileScreen";
import SearchScreen from "../../screens/main/SearchScreen";
import BottomTab from "../BottomTabs";
import Chat from "../../screens/main/MessageScreen/Chat";
import Settings from "../../screens/main/SettingsScreen";
import JoinScreen from "../../screens/auth/JoinScreen";
import Login from "../../screens/auth/Login";
import Signup from "../../screens/auth/Signup";
import ProfileSetup from "../../screens/auth/ProfileSetup";
import LostPassword from "../../screens/auth/LostPassword";
import ResetPassword from "../../screens/auth/ResetPassword";
import Notifications from "../../screens/main/NotificationScreen";
import SentRequest from "../../screens/main/NotificationScreen/SentRequest";
import Post from "../../screens/main/PostScreen";
import OthersProfile from "../../screens/main/SearchScreen/OthersProfile";
import EditProfile from "../../screens/main/ProfileScreen/EditProfile";
import AddStatus from "../../screens/main/AddStatus";
import EditGifs from "../../screens/main/EditGifs";

const AppStack = () => {
  const Stack = createStackNavigator();
  const [splashState, setSplashState] = useState(true);



  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen name={"Join"} component={JoinScreen} />
            <Stack.Screen name={"Login"} component={Login} />
            <Stack.Screen name={"Signup"} component={Signup} />
            <Stack.Screen name={"ProfileSetup"} component={ProfileSetup} />
            <Stack.Screen name={"LostPassword"} component={LostPassword} />
            <Stack.Screen name={"ResetPassword"} component={ResetPassword} />




      <Stack.Screen name={"Tabs"} component={BottomTab} />
      <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
      <Stack.Screen name={"MessageScreen"} component={MessageScreen} />
      <Stack.Screen name={"ProfileScreen"} component={ProfileScreen} />
      <Stack.Screen name={"SearchScreen"} component={SearchScreen} />
      <Stack.Screen name={"OthersProfile"} component={OthersProfile} />
      <Stack.Screen name={"AddStatus"} component={AddStatus} />
      <Stack.Screen name={"ChatScreen"} component={Chat} />
      <Stack.Screen name={"Settings"} component={Settings} />
      <Stack.Screen name={"Notifications"} component={Notifications} />
      <Stack.Screen name={"EditGifs"} component={EditGifs} />
      <Stack.Screen name={"Sent Request"} component={SentRequest} />
      <Stack.Screen name={"Post"} component={Post} />
      <Stack.Screen name={"EditProfile"} component={EditProfile} />
    </Stack.Navigator>
  );
};
export default AppStack;
