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
import { windowHeight, windowWidth } from "../../../utils/Dimensions";

const LostPassword = () => {
  const navigation: any = useNavigation();

  return (
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
        <Spacer height={verticalScale(20)}/>
        <CustomText
          text={"Lost your password?"}
          color={colors.white}
          size={21}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="500"
        />
        <Spacer height={verticalScale(15)} />
        <View style={{marginHorizontal:30}}>
        <CustomText
          text={"Enter your registered email below to receive password reset instructions"}
          color={colors.white}
          lineHeight={25}
          size={14}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Regular"
          fontWeight="500"
        />

        </View>
        <Spacer height={20} />

       

        <CustomTextInput
          label="Email Address"
          placeholder="Enter your login email address"
        />
      

        <Spacer height={verticalScale(25)} />

        <CustomButton
          text="Send"
          width={"100%"}
          fontWeight={"500"}
          onPress={()=>navigation.navigate("ResetPassword")}
          // size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
                <Spacer height={verticalScale(20)} />

            
                <View style={{...appStyles.row,justifyContent:"center"}}>

                <CustomText
              text={"Remember Password? "}
              color={colors.white}
              size={14}
              style={{textAlign:"center",marginRight:2}}
              fontFam="Roboto-Medium"
              fontWeight="500"
            />

            <TouchableOpacity
            onPress={()=>navigation.navigate("Login")}
            activeOpacity={0.6}
            >

              <CustomText
              text={"Login"}
              color={colors.white}
              size={14}
              textDecorationLine={"underline"}
              
              style={{textAlign:"center"}}
              fontFam="Roboto-Medium"
              fontWeight="500"
            />
                        </TouchableOpacity>


                </View>


      </View>
    </SafeAreaView>
  );
};

export default LostPassword;
