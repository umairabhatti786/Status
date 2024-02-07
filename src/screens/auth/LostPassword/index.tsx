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

const LostPassword = () => {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <Spacer height={30} />
        <Image
          style={{ width: 130, height: 130, alignSelf: "center" }}
          source={images.logo}
          resizeMode="contain"
        />
        <Spacer height={30}/>
        <CustomText
          text={"Lost your password?"}
          color={colors.white}
          size={24}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="500"
        />
        <Spacer height={20} />
        <View style={{marginHorizontal:30}}>
        <CustomText
          text={"Enter your registered email below to receive password reset instructions"}
          color={colors.grey400}
          lineHeight={25}
          size={17}
          style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="500"
        />

        </View>
        <Spacer height={20} />

       

        <CustomTextInput
          label="Email Address"
          placeholder="Enter your login email address"
        />
      

        <Spacer height={25} />

        <CustomButton
          text="Send"
          width={"100%"}
          fontWeight={"500"}
          onPress={()=>navigation.navigate("ResetPassword")}
          size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
                <Spacer height={25} />

            
                <View style={{...appStyles.row,justifyContent:"center"}}>

                <CustomText
              text={"Remember Password? "}
              color={colors.white}
              size={14}
              style={{textAlign:"center",marginRight:3}}
              fontFam="Poppins-SemiBold"
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
              fontFam="Poppins-SemiBold"
              fontWeight="500"
            />
                        </TouchableOpacity>


                </View>


      </View>
    </SafeAreaView>
  );
};

export default LostPassword;
