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
import { scale, verticalScale } from "react-native-size-matters";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";

const Signup = () => {
  const navigation: any = useNavigation();
  const [showPassword,setShowPAssword]=useState(true)

  console.log("showPassword",showPassword)

  return (
    <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    style={{ flex: 1 }}
    // extraScrollHeight={-100}
  >
      <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: scale(20) }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <Spacer height={verticalScale(10)} />
        <Image
          style={{ width: windowWidth/3.5, height: windowHeight/5.7,alignSelf: "center"}}
          source={images.logo}
          resizeMode="contain"
        />
        {/* <Spacer height={10}/> */}
        <CustomText
          text={"Create Account"}
          color={colors.white}
          size={21}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="500"
        />
        <Spacer height={10} />

        <CustomTextInput
          label="Email"
          placeholder="Enter your email address"
        />
        <Spacer height={7} />
        <CustomTextInput
          label="Confirm Email"
          placeholder="Retype your email address"
        />
        <Spacer height={7} />
        <CustomTextInput
          label="Password"
          isPassword={showPassword}
          
          onShowPassword={()=>setShowPAssword(!showPassword)}
          placeholder="● ● ● ● ● ● ● ●"
          source={ showPassword? images.eyeclose:images.eye}
        />
        <Spacer height={15} />

        <View>
          <View style={appStyles.row}>
            <CustomText
              text={"By tapping Continue, you agree to Status’s"}
              color={colors.white}
              size={11}
              style={{ textAlign: "center" }}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
            <Spacer width={3} />
            <TouchableOpacity>
              <CustomText
                text={"Terms of"}
                textDecorationLine={"underline"}
                color={colors.white}
                size={11}
                style={{ textAlign: "center", marginRight: 10 }}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
            </TouchableOpacity>
          </View>
          <View style={appStyles.row}>
            <TouchableOpacity>
              <CustomText
                text={"Use"}
                textDecorationLine={"underline"}
                color={colors.white}
                size={11}
                //   style={{textAlign:"center",marginRight:10}}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
            </TouchableOpacity>
            <Spacer width={3} />
            <CustomText
              text={"and"}
              color={colors.white}
              size={11}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
            <Spacer width={3} />

            <TouchableOpacity>
              <CustomText
                text={"Privacy Policy."}
                textDecorationLine={"underline"}
                color={colors.white}
                size={11}
                style={{marginLeft:3}}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Spacer height={25} />

        <CustomButton
          text="CONTINUE"
          width={"100%"}
          onPress={() => navigation.navigate("ConfirmationCode")}
          fontWeight={"500"}
          // size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
        <Spacer height={25} />

        <View style={{ height: 1, backgroundColor: colors.white }} />
        <Spacer height={20} />
        <View style={{ ...appStyles.row, justifyContent: "center" }}>
          <CustomText
            text={"Already a member?"}
            color={colors.white}
            size={11}
            style={{ textAlign: "center" }}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
          <Spacer width={5} />
          <TouchableOpacity
          activeOpacity={0.6}
                    onPress={() => navigation.navigate("Login")}

          >
            <CustomText
            text={"Log In here"}
            color={colors.white}
            size={11}
            textDecorationLine={"underline"}
            style={{ textAlign: "center" }}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />

          </TouchableOpacity>
          
        </View>
      </View>
    </SafeAreaView>
    </KeyboardAwareScrollView>
  
  );
};

export default Signup;
