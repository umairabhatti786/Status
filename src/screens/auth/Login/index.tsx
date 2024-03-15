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
  TouchableOpacity,
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";
import CheckBox from "../../../components/CheckBox";
import { scale, verticalScale } from "react-native-size-matters";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const Login = () => {
  const navigation: any = useNavigation();
  const [isRemember, setIsRemember] = useState(true);
  const [showPassword, setShowPAssword] = useState(true);

  return (
    <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    style={{ flex: 1,backgroundColor:colors.black }}
    // extraScrollHeight={-100}
  >
      <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: scale(20) }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <Spacer height={verticalScale(10)} />
        <Image
          style={{
            width: windowWidth / 3.5,
            height: windowHeight / 5.7,
            alignSelf: "center",
          }}
          source={images.logo}
          resizeMode="contain"
        />
        {/* <Spacer height={10}/> */}
        <CustomText
          text={"Welcome back!"}
          color={colors.white}
          size={21}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="500"
        />
        <Spacer height={10} />

        <CustomTextInput
          label="Email Address"
          placeholder="Enter your login email address"
        />
        <Spacer height={7} />
        <CustomTextInput
          label="Password"
          placeholder="● ● ● ● ● ● ● ●"
          isPassword={showPassword}
          onShowPassword={() => setShowPAssword(!showPassword)}
          source={showPassword ? images.eyeclose : images.eye}
        />
        <Spacer height={verticalScale(20)} />

        <View style={appStyles.rowjustify}>
          <View style={appStyles.row}>
            <CheckBox isRemember={isRemember} setIsRemember={setIsRemember} />

            <Spacer width={scale(7)} />
            <CustomText
              text={"Remember Me"}
              color={colors.white}
              size={13}
              style={{ textAlign: "center" }}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
          </View>
        </View>
        <Spacer height={verticalScale(20)} />

        <CustomButton
          text="SIGN IN"
          width={"100%"}
          onPress={() => navigation.navigate("Tabs")}
          fontWeight={"500"}
          size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
        <Spacer height={verticalScale(25)} />

        <View style={{ height: 1, backgroundColor: colors.white }} />
        <Spacer height={20} />
        <View style={{ ...appStyles.row, justifyContent: "center" }}>
          <CustomText
            text={"Don’t have an account ? "}
            color={colors.white}
            size={11}
            style={{ textAlign: "center" }}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            activeOpacity={0.6}
          >
            <CustomText
              text={"Sign up"}
              color={colors.white}
              size={11}
              textDecorationLine={"underline"}
              style={{ textAlign: "center" }}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
          </TouchableOpacity>
        </View>

        <Spacer height={verticalScale(8)}/>
        <TouchableOpacity>
        <CustomText
            text={"Forgot password?"}
            color={colors.white}
            size={13}
            style={{ textAlign: "center" }}
            textDecorationLine={"underline"}

            fontFam="Poppins-Medium"
            fontWeight="500"
          />

        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  
  );
};

export default Login;

const styles = StyleSheet.create({
  checkBox: {
    width: 21,
    height: 21,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
