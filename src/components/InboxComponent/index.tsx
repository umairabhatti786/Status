import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { appStyles } from "../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import FastImage from "react-native-fast-image";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  message?: string;
  attachments?: any;
  chatDate?: string;
  gif?: string;
  comments?: boolean;
  profile?: boolean;
  edit?: boolean;
  onEdit?: () => void;
};

const InboxComponent = ({
  name,
  image,
  time,
  message,
  attachments,
  chatDate,
  comments,
  profile,
  gif,
  edit,
  onEdit,
}: Props) => {
  return (
    <View>
      {chatDate && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginBottom: verticalScale(10),
          }}
        >
          <View
            style={{
              width: "35%",
              backgroundColor: "#2F3541",
              height: 1,
            }}
          />
          <CustomText
            style={{ marginHorizontal: scale(10) }}
            text={chatDate}
            color={colors.lightgray}
            size={13}
            fontFam="Poppins-Bold"
            fontWeight="700"
          />
          <View
            style={{
              width: "35%",
              height: 1,
              backgroundColor: "#2F3541",
            }}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          // paddingVertical: verticalScale(8),
          paddingHorizontal: 10,
          marginTop: verticalScale(20),
          backgroundColor: comments ? colors.black300 : colors.black,
          borderRadius: 12,
        }}
      >
        <View style={{ width: 62, height: 62 }}>
          <FastImage
            style={{ width: "100%", height: "100%", borderRadius: scale(5) }}
            source={{   uri: image,
              headers: { Authorization: "someAuthToken" },
              priority: FastImage.priority.high,}}
            // source={image}
          />
        </View>
        <View style={{ marginLeft: scale(12) }}>
          <View
            style={{
              flexDirection: "row",
              // alignItems: "center",
              justifyContent: "space-between",
              width: windowWidth / 1.4,
              // backgroundColor:"red"
            }}
          >
            <View style={{ ...appStyles.row, marginTop: verticalScale(-5),width:"65%" }}>
              <CustomText
                text={name}
                color={colors.white}
                size={15}
                numberOfLines={1}
                fontFam="Poppins-SemiBold"
                fontWeight="700"
              />
              <View
                style={{
                  width: scale(3.5),
                  height: scale(3.5),
                  backgroundColor: colors.white,
                  borderRadius: 999,
                  marginHorizontal: scale(8),
                  marginTop: verticalScale(2),
                }}
              />

              <CustomText
                text={time}
                color={colors.lightgray}
                size={13}
                style={{ marginTop: verticalScale(4) }}
                fontFam="Poppins-Regular"
              />
            </View>
          </View>
          <CustomText
            text={message}
            color={profile ? colors.gray500 : colors.white}
            size={15}
            lineHeight={20}
            style={{ width: windowWidth / 1.5 }}
            fontFam="Poppins-Medium"
            fontWeight={profile ? "600" : "500"}
          />
          {/* attachments */}
          {attachments?.[0]?.path && (
            // <View style={{ width: "70%", height: 100 }}>
            <FastImage
              style={{
                width: 130,
                height: 150,
                borderRadius: scale(5),
              }}
              resizeMode={"cover"}
              source={{   uri: attachments?.[0]?.path ,
                headers: { Authorization: "someAuthToken" },
                priority: FastImage.priority.high,}}
              // source={{ uri: attachments?.[0]?.path }}
            />
            // </View>
          )}
          {gif && (
            <FastImage
              style={{
                width: 130,
                height: 150,
                alignSelf: "left",
                borderRadius: scale(5),
              }}
              source={{   uri: gif,
                headers: { Authorization: "someAuthToken" },
                priority: FastImage.priority.high,}}      
                       resizeMode="cover"
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default InboxComponent;

const styles = StyleSheet.create({});
