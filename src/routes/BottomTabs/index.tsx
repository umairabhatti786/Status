import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform, Pressable, StyleSheet, View } from "react-native";

import { images } from "../../assets/images";
import HomeScreen from "../../screens/main/HomeScreen";
import SearchScreen from "../../screens/main/SearchScreen";
import AddScreen from "../../screens/main/AddScreen";
import MessageScreen from "../../screens/main/MessageScreen";
import ProfileScreen from "../../screens/main/ProfileScreen";
import { colors } from "../../utils/colors";

const BottomTab = ({ navigation }: any) => {
  const Bottom = createBottomTabNavigator();

  return (
    <Bottom.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarHideOnKeyboard: true,

        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth:-1,
          paddingTop:8,
          height:55,
        },
      }}
    >
      <Bottom.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
                }}
              >
                <Image
                  source={images.home}
                  style={{ height: 20, width: 20,}}
                />
             
              </View>
            );
          },
        }}
      />

      <Bottom.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
             
                  paddingTop: 22,
                }}
              >
            
                <Image
                  source={focused ? images.searchfill : images.search}
                  style={{ height: 22, width: 22,}}

                />
               
              </View>
            );
          },
        }}
      />
       <Bottom.Screen
        name="AddScreen"
        component={AddScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
             
                  paddingTop: 22,
                }}
              >
            
                <Image
                  source={focused ? images.add : images.add}
                  style={{ height: 20, width: 20,  }}

                />
              
              </View>
            );
          },
        }}
      />
    

<Bottom.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
             
                  paddingTop: 22,
                }}
              >
            
                <Image
                  source={focused ? images.message : images.message}
                  style={{ height: 20, width: 20,}}

                />
              
              </View>
            );
          },
        }}
      />
       <Bottom.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  ...style?.itemStyle,
             
                  paddingTop: 22,
                }}
              >
            
                <Image
                  source={focused ? images.man1 : images.man1}
                  style={{ height: 30, width: 30}}

                />
              </View>
            );
          },
        }}
      />
    </Bottom.Navigator>
  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    width: "100%",
    height: Platform.OS === "ios" ? 65 : 75,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 7,
  },
  text: {
    color: colors.white,
  },
});
