import {
    Image,
    Platform,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    PixelRatio
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
import CustomButton from "../../../components/CustomButton";
import { windowWidth } from "../HomeScreen/FriendList";
  console.log("PixelRatio",PixelRatio)
  const UserCard = ({item}:any) => {
    const navigation = useNavigation();
    const [isFollow,setIsFollow]=useState(false)
 
  
   
    return (
      <View style={appStyles.rowjustify}>
        <View style={appStyles.row}>
        <TouchableOpacity
           onPress={() => navigation.goBack()}>
            <Image
              style={{ width: scale(52), height: scale(52),borderRadius:scale(8), }}
              resizeMode="contain"
              source={images.defimage100}
            />
          </TouchableOpacity>
          <CustomText
            fontWeight="600"
            color={colors.white}
            fontFam="Poppins-Medium"
            numberOfLines={2}
            style={{marginHorizontal:scale(5),width:scale(100),textAlign:"center"}}
            size={16}
            text={item?.name}
          />
          
        </View>
       

          <CustomButton
          text={isFollow?"Follow":"Blocked"}
          width={windowWidth/3.5}
          size={16}
          height={verticalScale(36)}
          borderRadius={scale(20)}
          onPress={()=>setIsFollow(!isFollow)}
          fontWeight={"600"}
          fontFam={"Poppins-SemiBold"}
          bgColor={isFollow?colors.white:colors.red}
          textColor={isFollow?colors.black:colors.white}
          />
  
      
      </View>
    );
  };
  
  export default UserCard;
  
  const styles = StyleSheet.create({
    rowConttainer:{
      height: verticalScale(50),
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
    }
  
  });
  