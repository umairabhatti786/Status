import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { windowWidth } from "../../utils/Dimensions";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../utils/AppStyles";
import CustomButton from "../CustomButton";
import NewText from "../NewText";
import { useNavigation } from "@react-navigation/native";

type Props = {
  name?: string;
  image?: any;
  senderId?: any;
  time?: string;
  comment?: string;
  isShowFollow?: boolean;
};
const ActivityCard = ({ image, name, time, comment, isShowFollow,senderId }: any) => {
  const [isFollow, setIsFollow] = useState(true);
  const navigation: any = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        // paddingRight: 10,
      }}
    >
      <TouchableOpacity activeOpacity={0.6} onPress={()=>{
        navigation.navigate("OthersProfile",{id:senderId});
      }} style={{ ...appStyles.row, width: windowWidth / 2.3 }}>
        <Image
          style={{
            width: verticalScale(60),
            height: verticalScale(60),
            borderRadius:scale(10)
            // width: 64, height: 64
          }}
          source={image}
        />
        <View style={{ marginLeft: scale(15) }}>
          <View>
            <NewText
              text={name}
              color={colors.white}
              size={17}
              fontFam="Poppins-SemiBold"
              fontWeight="700"
              numberOfLines={1}
            />
          </View>

          {/* <Spacer height={5} /> */}
          <View style={{ flexDirection: "row" }}>
            <NewText
              lineHeight={21}
              // style={{
              //   paddingVertical: 5,
              // }}
              // style={{backgroundColor:"red"}}

              size={15}
              color={colors.white}
              label={" " + time}
              text={comment}
            />
            {/* <CustomText color={colors.white} size={14} text={time} /> */}
          </View>
        </View>
      </TouchableOpacity>
      {/* {isShowFollow&&(
          <CustomButton
          text={isFollow?"Follow":"Following"}
          // width={windowWidth/3.5}
          size={15}
          height={verticalScale(32)}
          // borderRadius={scale()}
          paddingHorizontal={scale(15)}
          onPress={()=>setIsFollow(!isFollow)}
          // fontWeight={"600"}
          fontFam={"Poppins-SemiBold"}
          bgColor={isFollow?"#48B1FF":colors.primary}
          textColor={colors.white}
          />

      )
        
      } */}

      {/* <TouchableOpacity
      activeOpacity={0.6}
      style={{marginBottom:10}}
      >
        <Image 
        resizeMode="contain"
        style={{ height: 18, width:18 }} source={images.crosscircle} />
      </TouchableOpacity> */}
    </View>
  );
};

export default ActivityCard;

const styles = StyleSheet.create({});
