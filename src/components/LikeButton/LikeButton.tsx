import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";

const LikeButton = ({ likes_count, onPress,isLiked }: any) => {
  const [likes, setLikes] = useState(likes_count);
  const [liked, setLiked] = useState(isLiked);
  return (
    <TouchableOpacity
      onPress={() => {
        if (liked) {
          setLiked(false);
          setLikes(likes - 1);
        } else {
          setLiked(true);
          setLikes(likes + 1);
        }
        onPress();
      }}
      style={{
        paddingHorizontal: scale(10),
        // paddingVertical: verticalScale(2),
        position: "absolute",
        bottom: verticalScale(10),
        left: scale(25),
        backgroundColor: colors.black300,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scale(20),
        borderWidth: 1,
        borderColor: colors.black,
      }}
    >
      <CustomText
        color={colors.grey300}
        size={15}
        // fontFam="Inter-Medium"
        style={{ letterSpacing: 3 }}
        text={"❤️" + "  " + likes}
      />
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({});
