import {
    FlatList,
    Image,
    PixelRatio,
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
import UserCard from "./UserCard";
import { windowWidth } from "../HomeScreen/FriendList";

console.log("pixData",windowWidth)
  
  const BlockedAccount = () => {
    const navigation = useNavigation();

    const userList=[
        {name:"Joe Rogan",img:images.defimage100},
        {name:"Bob Smith",img:images.defimage100},
        {name:"Bob Smith",img:images.defimage100},]


    const renderUserList = ({ item, index }:any) => {
        return (
          <UserCard item={item} />
        );
      };
 
  
   
    return (
      <View style={appStyles.main}>
        <AbsoluteHeader>
          <TouchableOpacity 
                    style={{width:"10%"}}

          onPress={() => navigation.goBack()}>
            <Image
              style={{ width: wp(4.5), height: hp(2.3) }}
              resizeMode="contain"
              source={images.back}
            />
          </TouchableOpacity>
          <CustomText
            fontWeight="600"
            color={colors.white}
            fontFam="Poppins-Medium"
            size={18}
            text={"Blocked Accounts"}
          />
          <CustomText color={"transparent"} size={18} text={"sss"} />
        </AbsoluteHeader>
        <View
        style={{paddingHorizontal:scale(15),paddingTop:verticalScale(30)}}
        >
              <FlatList
        // style={{paddingHorizontal:10}}
        // onScroll={onScroll}
        showsVerticalScrollIndicator={false}
          data={userList}
          contentContainerStyle={{
            gap: verticalScale(15),
          }}
          renderItem={renderUserList}
        />



        </View>
        
  
      
      </View>
    );
  };
  
  export default BlockedAccount;
  
  const styles = StyleSheet.create({
    rowConttainer:{
      height: verticalScale(50),
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
    }
  
  });
  