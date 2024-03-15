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
          padding: scale(6),
          flexDirection: "row",
          justifyContent:"space-between"
        }}
      >
        <View style={{flexDirection:"row"}}>
        <View style={{ width: verticalScale(75), height:verticalScale(90),marginLeft:scale(3)}}>
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
        

       <View style={{ paddingLeft: scale(15), width:item.postimg ?scale(187):scale(250),}}>

       {/* size={15}
                fontFam="Poppins-Bold"
                fontWeight="800 */}
          <CustomText
            text={item.name}
            color={colors.white}
            size={16}
            fontFam="Poppins-SemiBold"
            fontWeight="800"
          />
          {/* <Spacer height={verticalScale(6)} /> */}
          <CustomText
            text={item.message}
            color={"#FFFFFF"}
            size={14}
            numberOfLines={2}
            style={{marginVertical:verticalScale(5)}}
            // fontFam="Poppins-Medium"
            fontWeight="500"
          />
                    {/* <Spacer height={verticalScale(6)} /> */}



          <View style={{...appStyles.row}}>
            <View style={{width:scale(7),height:scale(7),borderRadius:999,backgroundColor:colors.green100,marginBottom:verticalScale(3)}}/>
            <CustomText
            text={`${item.unread} unread`}
            color={colors.green100}
            size={10}
            style={{marginHorizontal:scale(5)}}
            // fontFam="Poppins-Medium"
            fontWeight="400"
          />
                      <View style={{width:scale(4.5),height:scale(4.5),borderRadius:999,backgroundColor:colors.white,marginRight:scale(5),marginBottom:verticalScale(3)}}/>

          <CustomText
            text={item.time}
            color={"#FFFFFF"}
            size={10}
            // fontFam="Poppins-Medium"
            fontWeight="400"
          />

          </View>
        </View>
        </View>
        {
          item.postimg&&(
            <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingRight:scale(7),
              paddingTop:verticalScale(5),
              paddingBottom: verticalScale(5),
              position:"absolute",
              alignSelf:"center",
              right:scale(5),
              top:"20%",
              
              // backgroundColor:"red"
            }}
          >
             <View style={{ width: verticalScale(55), height:verticalScale(55),}}>
            <Image
              style={{ width: "100%", height: "100%",borderRadius:scale(5),overflow:'hidden' }}
              source={item?.postimg}
            />
            </View>
            {/* <CustomText
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
  
              
             
            )} */}
          </View>
            
          )
        }
        
       
      </TouchableOpacity>
    </>
  );
};

export default FriendList;
