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
import EmailFormInput from "./EmailFormInput";
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../../../utils/Dimensions";
import ErrorToast from "../../../components/ErrorToast";
import { Spacer } from "../../../components/Spacer";
import { useDispatch } from "react-redux";
import { setIsVerify, setVerifyData } from "../../../redux/reducers/authReducer";

  
  const ChangeEmail = () => {
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
            text={"Change Email"}
          />
          {/* <CustomText
            fontWeight="600"
            color={colors.white}
            fontFam="Poppins-Medium"
            size={sizeHelper.calHp(30)}
            text={"Change Email"}
          /> */}
          <CustomText color={"transparent"} size={18} text={"sss"} />
        </AbsoluteHeader>
        <View
        style={{padding:scale(15)}}
        >

            <EmailFormInput/>

            <TouchableOpacity>
        <CustomText
            text={"Forgot password?"}
            color={colors.white}
            size={13}
            style={{ marginTop:verticalScale(7),marginBottom:verticalScale(15)}}
            textDecorationLine={"underline"}

            fontFam="Poppins-Medium"
            fontWeight="500"
          />
                  </TouchableOpacity>


<CustomButton
          text="Update Email"
          
          borderRadius={scale(20)}

          width={windowWidth/2.7}
          // size={17}
          height={verticalScale(36)}
          size={14}
          
          style={{alignSelf:"center"}}
          onPress={()=>{
            dispatch(setIsVerify(true))
            dispatch(setVerifyData({
                label:"Verify your email",
                text:"Verification sent to your new email"

            }))
            navigation.goBack()
          }}
        //   onPress={()=>setIsFollow(!isFollow)}
          fontWeight={"600"}
          fontFam={"Poppins-SemiBold"}
          bgColor={colors.white}
          textColor={colors.black}
          />

         

             



        </View>
        <View style={{paddingHorizontal:scale(10),marginTop:verticalScale(20)}}>
        <ErrorToast
          text="Invalid email address"
          />
          <Spacer  height={verticalScale(15)}/>
             <ErrorToast
          text="Invalid password"
          />
           <Spacer  height={verticalScale(15)}/>
             <ErrorToast
          text="Mismatched emails"
          />
                     <Spacer  height={verticalScale(15)}/>



        </View>
        
        
  
      
      </View>
        </KeyboardAwareScrollView>
     
    );
  };
  
  export default ChangeEmail;
  
  const styles = StyleSheet.create({
    rowConttainer:{
      height: verticalScale(50),
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
    }
  
  });
  