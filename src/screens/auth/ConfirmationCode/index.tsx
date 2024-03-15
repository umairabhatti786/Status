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

const ConfirmationCode = () => {
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
          text={"Enter the confirmation code"}
          color={colors.white}
          size={23}
        //   style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="600"
        />
        <Spacer height={verticalScale(10)} />
        <View style={{paddingRight:scale(30),}}>
        <CustomText
          text={"To confirm your account, enter the 6-digit code we sent to youremail@gmail.com"}
          color={colors.white}
          size={15}
        //   style={{ textAlign: "center" }}
          fontFam="Poppins-Medium"
          fontWeight="600"
        />

        </View>
       
        <Spacer height={verticalScale(20)} />

        <View
      style={{
        width: "100%",
        height: verticalScale(52),
        backgroundColor: colors.primary,
        flexDirection:"row",
        justifyContent:"space-between",
     
        paddingHorizontal:scale(15),
        paddingVertical:verticalScale(5),
        borderRadius: scale( 8),
        borderWidth:1 ,
        borderColor: colors.white ,
      }}
    >
        <View>
        <CustomText
          text={"Confirmation code"}
          size={ 14}
        //   style={{marginLeft:scale(10)}}
          color={colors.white}
          fontWeight="500"
        />

        </View>

        <TouchableOpacity
        style={{height:'100%',alignItems:"center",justifyContent:"center"}}
        >
            <Image
            source={images.cross3x}
            style={{tintColor:colors.white,width:scale(15),height:scale(15)}}
            resizeMode="contain"
            />

        </TouchableOpacity>
    
        
     
    </View>
    <Spacer height={verticalScale(17)} />

        

        <CustomButton
          text="Next"
          onPress={()=>navigation.navigate("ProfileSetup")}
          width={"100%"}
          fontWeight={"500"}
          // size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
                <Spacer height={verticalScale(17)} />

               

               <CustomButton
          text="I didn’t get the code"
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
    </SafeAreaView>
  );
};

export default ConfirmationCode;
