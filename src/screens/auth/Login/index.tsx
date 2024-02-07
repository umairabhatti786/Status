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

const Login = () => {
  const navigation: any = useNavigation();
  const [isRemember,setIsRemember]=useState(true)
  const [showPassword,setShowPAssword]=useState(true)


  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 15 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <Spacer height={30} />
        <Image
          style={{ width: 135, height: 135, alignSelf: "center" }}
          source={images.logo}
        />
        {/* <Spacer height={10}/> */}
        <CustomText
          text={"Welcome back."}
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
          
          onShowPassword={()=>setShowPAssword(!showPassword)}
          source={ showPassword? images.eyeclose:images.eye}
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
              text={"Remember Me"}
              color={colors.white}
              size={15}
              style={{textAlign:"center"}}
              fontFam="Poppins-SemiBold"
              fontWeight="500"
            />
          </View>
          <CustomText
              text={"Forgot password?"}
              color={colors.white}
              size={16}
              style={{textAlign:"center"}}
              fontFam="Poppins-SemiBold"
              fontWeight="500"
            />
        </View>
        <Spacer height={25} />

        <CustomButton
          text="SIGN IN"
          width={"100%"}
          onPress={()=>navigation.navigate("Tabs")}
          fontWeight={"500"}
          size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
                <Spacer height={25} />

                <View style={{height:1,backgroundColor:colors.white}}/>
                <Spacer height={20} />
                <View style={{...appStyles.row,justifyContent:"center"}}>

                <CustomText
              text={"Don’t have an account ? "}
              color={colors.white}
              size={14}
              style={{textAlign:"center"}}
              fontFam="Poppins-SemiBold"
              fontWeight="500"
            />
            <TouchableOpacity
            onPress={()=>navigation.navigate("Signup")}
            activeOpacity={0.6}
            >

              <CustomText
              text={"Sign up"}
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

export default Login;

const styles=StyleSheet.create({
  checkBox:{
    
      width: 21,
      height: 21,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: colors.white,
      alignItems: "center",
      justifyContent: "center",
    

  }

})
