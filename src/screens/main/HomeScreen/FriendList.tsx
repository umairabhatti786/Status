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
import moment from "moment";
import NewText from "../../../components/NewText";
import { capitalizeFirstLetter, dateFormat } from "../../../utils/CommonFun";
export const windowWidth = Dimensions.get("window").width;

const FriendList = ({ item, onPress, disabled }: any) => {

  // console.log("item?.channel?.last_post?.created_at",typeof item?.channel?.last_post)
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
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: verticalScale(70),
              height: verticalScale(75),
              // marginLeft: scale(3),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: scale(8),
                overflow: "hidden",
              }}
              source={{ uri: item?.imageUrl }}
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

          <View
            style={{
              paddingLeft: scale(15),
              width: item.postimg ? scale(187) : scale(250),
            }}
          >
            {/* size={15}
                fontFam="Poppins-Bold"
                fontWeight="800 */}

            <View style={appStyles.row}>
              <CustomText
                text={capitalizeFirstLetter(item?.name)}
                color={colors.white}
                size={16}
                fontFam="Poppins-SemiBold"
                fontWeight="800"
              />

              <View
                style={{
                  width: scale(4),
                  height: scale(4),
                  borderRadius: 999,
                  backgroundColor: colors.white,
                  marginLeft: scale(10),
                  marginRight:scale(5)
                }}
              />
              {item?.channel?.last_post ? (
                <NewText
                  text={dateFormat(item?.channel?.last_post?.created_at)}
                  color={"#FFFFFF"}
                  size={12}
                  style={{marginTop:4}}
                  // fontFam="Poppins-Medium"
                  fontWeight="400"
                />
              ) : (
                <></>
              )}
            </View>

            {/* <Spacer height={verticalScale(6)} /> */}
            {item?.channel?.last_post != "null" ? (
              <CustomText
                text={item?.channel?.last_post?.description}
                color={colors.gray500}
                size={15}
                lineHeight={21}
                fontFam="Inter-Medium"
                numberOfLines={2}
                style={{ marginVertical: verticalScale(5) }}
                // fontFam="Poppins-Medium"
                fontWeight="600"
              />
            ) : (
              <></>
            )}
            {/* <Spacer height={verticalScale(6)} /> */}

           
          </View>
        </View>
        {item?.channel?.last_post?.imageUrl && (
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingRight: scale(7),
              paddingTop: verticalScale(5),
              paddingBottom: verticalScale(5),
              position: "absolute",
              alignSelf: "center",
              right: scale(5),
              top: "20%",

              // backgroundColor:"red"
            }}
          >
            <View
              style={{ width: verticalScale(55), height: verticalScale(55) }}
            >
              {item?.channel?.last_post != "null" ? (
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: scale(5),
                    overflow: "hidden",
                  }}
                  source={{ uri: item?.channel?.last_post?.imageUrl }}
                />
              ) : (
                <></>
              )}
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
        )}
      </TouchableOpacity>
    </>
  );
};

export default FriendList;
