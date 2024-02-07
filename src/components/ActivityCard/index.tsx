import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  comment?: string;
};
const ActivityCard = ({ image, name, time, comment }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10,
      }}
    >
      <Image style={{ width: 64, height: 64 }} source={image} />
      <View style={{ marginLeft: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomText
            color={colors.white}
            fontWeight="800"
            size={15}
            text={name}
          />
          <CustomText
            color={colors.white}
            fontWeight="800"
            size={22}
            text={"."}
            style={{
              marginTop: -12,
              marginHorizontal: 8,
            }}
          />
          <CustomText color={colors.white} size={14} text={time} />
        </View>
        <Spacer height={5} />
        <CustomText
          style={{
            paddingVertical: 5,
            width: windowWidth / 1.5,
          }}
          size={18}
          color={colors.white}
          text={comment}
        />
      </View>
      <TouchableOpacity
      activeOpacity={0.6}
      style={{marginBottom:10}}
      >
        <Image 
        resizeMode="contain"
        style={{ height: 18, width:18 }} source={images.crosscircle} />
      </TouchableOpacity>
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
