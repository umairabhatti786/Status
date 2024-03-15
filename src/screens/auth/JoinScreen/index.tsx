import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import { windowHeight } from "../../../utils/Dimensions";
import { windowWidth } from "../../main/HomeScreen/FriendList";
import { scale, verticalScale } from "react-native-size-matters";

const JoinScreen = () => {
  const navigation: any = useNavigation();

  return (
    <ImageBackground 
    source={images.carback}
    style={appStyles.main}>
      <View style={{ flex: 1, alignItems: "center", padding: scale(15) }}>
        <Spacer height={windowHeight/8} />
        <Image style={{ width: windowWidth/2.5, height: windowHeight/3.5 }}
        resizeMode="contain"
         source={images.logo} />
        <Spacer height={windowHeight/4} />

        <CustomButton
          text="JOIN STATUS"
          width={"100%"}
          onPress={() => navigation.navigate("Signup")}

          // fontWeight={"500"}
          size={16}
          textColor={colors.black}
          bgColor={colors.white}
        />
        <Spacer height={verticalScale(15)} />
        <CustomButton
          text="SIGN IN"
          width={"100%"}
          onPress={() => navigation.navigate("Login")}
          // fontWeight={"500"}
          fontFam={"Poppins-Regular"}
          size={16}
          borderColor={colors.white}
          borderWidth={1}
          // borderRadius={7}
          textColor={colors.white}
          bgColor={"transparent"}
        />
      </View>
    </ImageBackground>
  );
};

export default JoinScreen;
