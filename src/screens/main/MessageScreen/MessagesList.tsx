import React, { useState } from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
export const windowWidth = Dimensions.get("window").width;

const MessagesList = ({ item }: any, List: boolean) => {
  const navigation: any = useNavigation();
  const [favorite, setFavorite] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ChatScreen", {
            item: item,
          })
        }
        activeOpacity={0.7}
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
        </View>

        <View style={{ paddingHorizontal: 10, width: "65%", marginTop: -3 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              text={item.name}
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
              text={item.time}
              color={colors.lightgray}
              size={11}
              fontFam="Poppins-Regular"
            />
          </View>
          <Spacer height={5} />
          <CustomText
            text={item.message}
            color={
              item?.message === "Typing..." ? colors.lightgreen : colors.white
            }
            size={15}
            style={{ width: windowWidth / 1.5 }}
            numberOfLines={0}
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
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            <Image
              source={favorite ? images.star1 : images.star}
              style={{ marginRight: 8 }}
            />
          </TouchableOpacity>
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

export default MessagesList;
