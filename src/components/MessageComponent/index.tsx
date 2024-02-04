import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  message?: string;
  chatDate?: string;
  comments?: boolean;
  profile?: boolean;
};

const MessagesComponent = ({
  name,
  image,
  time,
  message,
  chatDate,
  comments,
  profile,
}: Props) => {
  return (
    <View>
      {chatDate && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginVertical: 8,
          }}
        >
          <View
            style={{
              borderTopWidth: 0.4,
              width: windowWidth / 3,
              borderColor: colors.lightgray,
            }}
          />
          <CustomText
            style={{ marginHorizontal: 12 }}
            text={chatDate}
            color={colors.lightgray}
            size={13}
            fontFam="Poppins-Bold"
            fontWeight="700"
          />
          <View
            style={{
              borderTopWidth: 0.4,
              width: windowWidth / 3,
              borderColor: colors.lightgray,
            }}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: comments ? colors.black300 : colors.black,
          borderRadius: 12,
        }}
      >
        <View style={{ width: 65, height: 65 }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={image}
          />
        </View>
        <View style={{ marginLeft: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: windowWidth / 1.4,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CustomText
                text={name}
                color={colors.white}
                size={15}
                fontFam="Poppins-Bold"
                fontWeight="800"
              />
              <CustomText
                text={"."}
                color={colors.white}
                size={24}
                fontFam="Poppins-Regular"
                style={{
                  marginTop: -12,
                  marginHorizontal: 8,
                }}
              />
              <CustomText
                text={time}
                color={colors.lightgray}
                size={13}
                fontFam="Poppins-Regular"
              />
            </View>
            <TouchableOpacity>
              <CustomText color={colors.lightgray} text={"Reply"} />
            </TouchableOpacity>
          </View>
          <CustomText
            text={message}
            color={profile ? colors.gray500 : colors.white}
            size={15}
            style={{ width: windowWidth / 1.5, marginTop: 6 }}
            fontFam="Poppins-Medium"
            fontWeight={profile ? "600" : "500"}
          />
        </View>
      </View>
    </View>
  );
};

export default MessagesComponent;

const styles = StyleSheet.create({});
