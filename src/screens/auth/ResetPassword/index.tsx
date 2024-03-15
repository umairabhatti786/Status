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

const ResetPassword = () => {
  const navigation: any = useNavigation();
  const [isRemember,setIsRemember]=useState(true)
  const [showPassword,setShowPAssword]=useState(true)



  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: scale(20) }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <Spacer height={verticalScale(20)} />
     
        {/* <Spacer height={10}/> */}
        <CustomText
          text={"Reset your password"}
          color={colors.white}
          size={22}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="600"
        />
        <Spacer height={verticalScale(20)} />

        <CustomTextInput
          label="New passwords"
          placeholder="ADSS@#siya"
          isPassword={showPassword}
          
          onShowPassword={()=>setShowPAssword(!showPassword)}
          source={ showPassword? images.eyeclose:images.eye}
        />
        <Spacer height={7} />
        <CustomTextInput
          label="Confirm password"
          placeholder="Confirm your new password"
        />
        <Spacer height={25} />

        <View style={appStyles.rowjustify}>
          <View style={appStyles.row}>
          <CheckBox
            isRemember={isRemember}
            setIsRemember={setIsRemember}
            />
            
            <Spacer width={10}/>
              <CustomText
              text={"Sign out of all devices"}
              color={colors.white}
              size={13}
              style={{textAlign:"center"}}
              fontFam="Poppins-Regular"
              fontWeight="500"
            />
          </View>
        
        </View>
        <Spacer height={25} />

        <CustomButton
          text="Reset Password"
          onPress={()=>navigation.navigate("Tabs")}
          width={"100%"}
          fontWeight={"500"}
          // size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
               


      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
