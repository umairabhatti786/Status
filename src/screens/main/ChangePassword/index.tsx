import {
    FlatList,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { appStyles } from "../../../utils/AppStyles";
  import { images } from "../../../assets/images";
  import CustomText from "../../../components/CustomText";
  import { colors } from "../../../utils/colors";
  import { useNavigation } from "@react-navigation/native";

  import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
  } from "react-native-responsive-screen";
  import AbsoluteHeader from "../../../components/AbsoluteHeader";
  import { scale, verticalScale } from "react-native-size-matters";
  import sizeHelper from "../../../utils/helpers/sizeHelper";
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../../../utils/Dimensions";
import ChangePasswordForm from "./ChangePasswordForm";
import ErrorToast from "../../../components/ErrorToast";
import { Spacer } from "../../../components/Spacer";
import { useDispatch } from "react-redux";
import { setIsVerify, setVerifyData } from "../../../redux/reducers/authReducer";

  
  const ChangePassword = () => {
    const navigation = useNavigation();

    const dispatch=useDispatch()
 
 
  
   
    return (
        <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={appStyles.main}
        // extraScrollHeight={-100}
      >
         <View style={appStyles.main}>
        <AbsoluteHeader>
          <TouchableOpacity 
                              style={{width:"10%"}}

          onPress={() => navigation.goBack()}>
            <Image
              style={{ width: wp(4.6), height: hp(2.6) }}
              resizeMode="contain"
              source={images.crossicon}
            />
          </TouchableOpacity>
          <CustomText
            fontWeight="600"
            color={colors.white}
            fontFam="Poppins-Medium"
            size={18}
            text={"Change Password"}
          />
          <CustomText color={"transparent"} size={18} text={"sss"} />
        </AbsoluteHeader>
        <View
        style={{padding:scale(15)}}
        >
            <ChangePasswordForm/>


          

<CustomButton
          text="Update Password"
          // width={windowWidth/2.5}
          // size={17}
          paddingHorizontal={scale(15)}
          height={verticalScale(36)}
          borderRadius={scale(20)}
          size={14}
          
          style={{alignSelf:"center",marginTop:verticalScale(30)}}
          onPress={()=>{
            dispatch(setIsVerify(true))
            dispatch(setVerifyData({
                label:"Success!",
                text:"Your password has been changed"

            }))
            navigation.goBack()
          }}
          fontWeight={"600"}
          fontFam={"Poppins-SemiBold"}
          bgColor={colors.white}
          textColor={colors.black}
          />
            <TouchableOpacity>
        <CustomText
            text={"Forgot password?"}
            color={colors.white}
            size={13}
            style={{textAlign:"center",marginTop:verticalScale(15)}}
            textDecorationLine={"underline"}

            fontFam="Poppins-Medium"
            fontWeight="500"
          />

        </TouchableOpacity>
             



        </View>

        <View style={{paddingHorizontal:scale(10),marginTop:"20%"}}>
        <ErrorToast
          text="Invalid password"
          />
          <Spacer  height={verticalScale(15)}/>
             <ErrorToast
          text="mismatched passwords"
          />
           <Spacer  height={verticalScale(15)}/>
          


        </View>
        
  
      
      </View>
        </KeyboardAwareScrollView>
     
    );
  };
  
  export default ChangePassword;
  
  const styles = StyleSheet.create({
    rowConttainer:{
      height: verticalScale(50),
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
    }
  
  });
  