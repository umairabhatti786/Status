import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../../utils/AppStyles";
export const windowWidth = Dimensions.get("window").width;

const FriendList = ({ item, onPress, disabled }: any) => {
  return (
    <>
      <TouchableOpacity
        disabled={disabled ? true : false}
        onPress={onPress}
        style={{
          width: "100%",
          // height: verticalScale(85),
          borderRadius: scale(10),
          backgroundColor: "#1D2029",
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between"
        }}
      >
        <View style={appStyles.row}>
        <View style={{ width: 63, height:65,marginLeft:scale(3)}}>
          <Image
            style={{ width: "100%", height: "100%",borderRadius:scale(5),overflow:'hidden' }}
            source={item?.img}
          />
          {/* {item.update && (
            <View
              style={{
                width: verticalScale(10),
                height: verticalScale(10),
                backgroundColor: "#3AD079",
                position: "absolute",
                bottom: 7,
                right: 7,
                borderRadius: 999,
              }}
            ></View>
          )} */}
        </View>

       <View style={{ paddingLeft: 15, width:item.count ?windowWidth/1.6:windowWidth/1.3,}}>

       {/* size={15}
                fontFam="Poppins-Bold"
                fontWeight="800 */}
          <CustomText
            text={item.name}
            color={colors.white}
            size={15}
            fontFam="Roboto-Medium"
            fontWeight="800"
          />
          <Spacer height={verticalScale(6)} />
          <CustomText
            text={item.message}
            color={colors.gray500}
            size={15}
            numberOfLines={2}
            fontFam="Poppins-Medium"
            fontWeight="600"
          />
        </View>
        </View>
        
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingRight:scale(7),
            paddingTop:verticalScale(5),
            paddingBottom: verticalScale(5),
            position:"absolute",
            right:scale(10),
            top:verticalScale(0),
            
            // backgroundColor:"red"
          }}
        >
          <CustomText
            text={item.time}
            color={colors.gray500}
            size={verticalScale(12)}
            fontFam="Poppins-Regular"
            //   fontWeight="500"
          />
          {item.count && (
            <>
            <Spacer  height={verticalScale(10)}/>
             <View
              style={{
                width: scale(25),
                height:scale(25),
                alignItems: "center",
                justifyContent: "center",
                borderRadius:scale(25),
                padding:scale(2),
                backgroundColor: colors.black,
              }}
            >
              <CustomText
                text={item.count}
                color={colors.white}
                // size={verticalScale(10)}
                fontFam="Poppins-Regular"
                //   fontWeight="500"
              />
            </View>
            </>

            
           
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default FriendList;
