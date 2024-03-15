import React, { useState } from "react";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
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
          // height: 74,
          borderRadius: 12,
          backgroundColor: "#1D2029",
          paddingHorizontal: scale(10),
          paddingVertical:verticalScale(8),
          flexDirection: "row",
          // alignItems: "center",
        }}
      >
          <View
            style={{
              width: scale(7.5),
              height: scale(7.5),
              borderRadius: 999,
              backgroundColor: item?.isOnline?  colors.sky:"transparent",
              marginRight: verticalScale(15),
              alignSelf:"center"




            }}
          />
        <View style={{ width: scale(65), height: scale(65) }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: scale(8) }}
            source={item?.img}
          />
        </View>

        <View style={{ paddingHorizontal: 10, width: scale(180), }}>
          <View style={{ flexDirection: "row",  }}>
            <CustomText
              text={item.name}
              color={colors.white}
              size={15}
              fontFam="Poppins-Bold"
              fontWeight="800"
            />
           
          
          </View>
          {/* <Spacer height={5} /> */}
          <CustomText
            text={item.message}
            color={
              item?.message === "Typing..." ? colors.lightgreen : colors.gray500
            }
            size={15}
            style={{ width: windowWidth / 1.8, }}
            numberOfLines={2}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
        </View>
        <View
          style={{
            width: scale(70),
            height: verticalScale(60),
            paddingTop: 3,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginRight:scale(5),
            position:"absolute",
            // backgroundColor:"red",
            right:scale(10),
            top:verticalScale(5)
            // backgroundColor:"red"
            // paddingBottom: 5,
            // backgroundColor:"red"
          }}
        >
            <CustomText
              text={item.time}
              color={colors.gray500}
              size={14}
              fontFam="Poppins-Regular"
            />
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            <Image
              source={item.favorite ? images.star1 : images.star}
              style={{ marginRight:scale(5),width:scale(18),height:scale(18)}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MessagesList;
