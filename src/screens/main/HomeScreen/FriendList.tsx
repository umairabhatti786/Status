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
import {
  capitalizeFirstLetter,
  dateFormat,
  formatTimeDifference,
} from "../../../utils/CommonFun";
import FastImage from "react-native-fast-image";
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
          height: 79,
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
              width: 65,
              height: 68,
              // marginLeft: scale(3),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 8,
                overflow: "hidden",
              }}
              source={{ uri: item?.imageUrl }}
              resizeMode="cover"
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
              paddingLeft: 12,
              width:
                item?.channel?.last_post?.imageUrl ||
                item?.channel?.last_post?.gif
                  ? scale(190)
                  : scale(250),
              // backgroundColor:"red",
            }}
          >
            {/* size={15}
                fontFam="Poppins-Bold"
                fontWeight="800 */}

            <View
              style={{
                flexDirection: "row",
                gap: 8,
                width: scale(170),
                paddingTop: -7,
              }}
            >
              <NewText
                text={capitalizeFirstLetter(item?.name)}
                color={colors.white}
                size={16}
                fontFam="Poppins-SemiBold"
                fontWeight="700"
              />

              {item?.channel?.last_post ? (
                <NewText
                  text={formatTimeDifference(
                    item?.channel?.last_post?.created_at
                  )}
                  color={"#999999"}
                  size={12}
                  style={{ marginTop: 3 }}
                  fontFam="Poppins-Medium"
                  fontWeight="500"
                />
              ) : (
                <></>
              )}
            </View>

            {item?.channel?.last_post != "null" ? (
              <NewText
                text={item?.channel?.last_post?.description}
                color={colors.gray500}
                size={15}
                lineHeight={17}
                fontFam="Inter-Medium"
                numberOfLines={2}
                style={{ marginTop: 3}}
                // fontFam="Poppins-Medium"
                fontWeight="600"
              />
            ) : (
              <></>
            )}
          </View>
        </View>
        {item?.channel?.last_post?.imageUrl && (
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingRight: 5,
              // paddingTop: 14,
              paddingBottom: verticalScale(5),
              position: "absolute",
              alignSelf: "center",
              right: scale(5),
              top: 22,

              // backgroundColor:"red"
            }}
          >
            <View
              style={{ width: 50, height: 50 }}
            >
              {item?.channel?.last_post != "null" ? (
                <FastImage
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: scale(5),
                    overflow: "hidden",
                  }}
                  source={{
                    uri: item?.channel?.last_post?.imageUrl,
                    headers: { Authorization: "someAuthToken" },
                    priority: FastImage.priority.high,
                  }}
                  // source={{ uri: item?.channel?.last_post?.imageUrl }}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        )}
        {item?.channel?.last_post?.gif && (
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingRight: 5,
              // paddingTop: 14,
              paddingBottom: verticalScale(5),
              position: "absolute",
              alignSelf: "center",
              right: scale(5),
              top: 22,

              // backgroundColor:"red"
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: scale(5),
                overflow: "hidden",
              }}
            >
              {item?.channel?.last_post?.gif ? (
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: scale(5),
                  }}
                  source={{ uri: item?.channel?.last_post?.gif }}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default FriendList;
