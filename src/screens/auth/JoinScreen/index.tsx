import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";

const JoinScreen = () => {
  const navigation: any = useNavigation();



  return (
      <SafeAreaView style={appStyles.main}>
          <View style={{flex:1,alignItems:"center",padding:10}}>
            <Spacer height={"27%"}/>
              <Image style={{width:167,height:167,}}
              source={images.logo}
              />
                          <Spacer height={"28%"}/>

                          <CustomButton
                          text="JOIN STATUS"
                          width={"100%"}
                          fontWeight={"500"}
                          size={16}
                          textColor={colors.black}
                          bgColor={colors.white}
                          />
                          <Spacer height={25}/>
                           <CustomButton
                          text="SIGN IN >"
                          width={"100%"}
                          onPress={()=>navigation.navigate("Login")}
                          fontWeight={"500"}
                          size={16}
                          borderColor={colors.white}
                          borderWidth={0.7}
                          textColor={colors.white}
                          bgColor={colors.black}
                          />


          </View>

      </SafeAreaView>
    
  );
};

export default JoinScreen;
