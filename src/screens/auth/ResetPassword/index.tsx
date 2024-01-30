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

const ResetPassword = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <Spacer height={30} />
     
        {/* <Spacer height={10}/> */}
        <CustomText
          text={"Reset your password"}
          color={colors.white}
          size={23}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="500"
        />
        <Spacer height={10} />

        <CustomTextInput
          label="New passwords"
          placeholder="ADSS@#siya"
          source={images.eye}
        />
        <Spacer height={7} />
        <CustomTextInput
          label="Confirm password"
          placeholder="Confirm your new password"
        />
        <Spacer height={25} />

        <View style={appStyles.rowjustify}>
          <View style={appStyles.row}>
            <TouchableOpacity
              style={{
                width: 21,
                height: 21,
                borderRadius: 5,
                borderWidth: 2,
                borderColor: colors.white,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Image
                style={{ width: 10, height: 10, alignSelf: "center" }}
                source={images.tick}
                resizeMode="contain"
              />
             
            </TouchableOpacity>
            <Spacer width={10}/>
              <CustomText
              text={"Sign out of all devices"}
              color={colors.white}
              size={15}
              style={{textAlign:"center"}}
              fontFam="Poppins-SemiBold"
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
          size={16}
          textColor={colors.black}
          bgColor={colors.white}
        />
               


      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
