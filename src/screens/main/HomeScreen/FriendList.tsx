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
export const windowWidth = Dimensions.get("window").width;

const FriendList = ({ item, onPress, disabled }: any) => {
  return (
    <>
      <TouchableOpacity
        disabled={disabled ? true : false}
        onPress={onPress}
        style={{
          width: "100%",
          height: 74,
          borderRadius: 12,
          backgroundColor: "#1D2029",
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: 65, height: 65 }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={item?.img}
          />
          {item.update && (
            <View
              style={{
                width: 11,
                height: 11,
                backgroundColor: "#3AD079",
                position: "absolute",
                bottom: 7,
                right: 7,
                borderRadius: 999,
              }}
            ></View>
          )}
        </View>

        <View style={{ paddingHorizontal: 10, width: "65%", marginTop:2 }}>
          <CustomText
            text={item.name}
            color={colors.white}
            size={15}
            fontFam="Poppins-Bold"
            fontWeight="800"
          />
          <Spacer height={3} />
          <CustomText
            text={item.message}
            color={colors.white}
            size={15}
            numberOfLines={2}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
        </View>
        <View
          style={{
            width: 60,
            height: 60,
            paddingTop: 3,
            alignItems: "flex-end",
            justifyContent: "space-between",
            paddingBottom: 5,
          }}
        >
          <CustomText
            text={item.time}
            color={colors.white}
            size={11}
            fontFam="Poppins-Regular"
            //   fontWeight="500"
          />
          {item.count && (
            
            <View
              style={{
                width: 32,
                height: 20,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                backgroundColor: colors.black,
              }}
            >
              <CustomText
                text={item.count}
                color={colors.white}
                size={15}
                fontFam="Poppins-Regular"
                //   fontWeight="500"
              />
            </View>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default FriendList;
