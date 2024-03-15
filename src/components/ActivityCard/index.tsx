import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import CustomButton from "../CustomButton";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  comment?: string;
  isShowFollow?:boolean
};
const ActivityCard = ({ image, name, time, comment,isShowFollow }: any) => {
  const [isFollow,setIsFollow]=useState(false)

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingRight: 10,
        
      }}
    >
      <View style={{...appStyles.row,            width: windowWidth / 2.3,
}}>
   <Image 
      style={{ 
        width: verticalScale(62), height:verticalScale(62)
        // width: 64, height: 64
         }} source={image} />
      <View style={{ marginLeft: scale(15), }}>
        <View 
 
 >
        <CustomText
            text={name}
            color={colors.white}
            size={16}
            fontFam="Poppins-SemiBold"
            fontWeight="700"
          />
         
        </View>

        {/* <Spacer height={5} /> */}
        <View 
        
        style={{flexDirection:"row"

        }}>
        <CustomText
        lineHeight={21}
          // style={{
          //   paddingVertical: 5,
          // }}
          // style={{backgroundColor:"red"}}

          size={14}
          color={colors.white}
          label={" "+time}
          text={comment}
        />
        {/* <CustomText color={colors.white} size={14} text={time} /> */}


        </View>
       
      </View>
     

      </View>
      {isShowFollow&&(
          <CustomButton
          text={isFollow?"Follow":"Following"}
          // width={windowWidth/3.5}
          size={15}
          height={verticalScale(32)}
          // borderRadius={scale()}
          paddingHorizontal={scale(15)}
          onPress={()=>setIsFollow(!isFollow)}
          // fontWeight={"600"}
          fontFam={"Poppins-SemiBold"}
          bgColor={isFollow?"#48B1FF":colors.primary}
          textColor={colors.white}
          />

      )
        
      }
    
      {/* <TouchableOpacity
      activeOpacity={0.6}
      style={{marginBottom:10}}
      >
        <Image 
        resizeMode="contain"
        style={{ height: 18, width:18 }} source={images.crosscircle} />
      </TouchableOpacity> */}
     
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
