import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { appStyles } from "../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../assets/images";
import { windowWidth } from "../../utils/Dimensions";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  message?: string;
  chatDate?: string;
  comments?: boolean;
  profile?: boolean;
  edit?: boolean;
  onEdit?: () => void;
  placeholder?:string
  bottom?:any
};

const MessageSender = ({placeholder,bottom}:Props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between",
        borderTopWidth: 1,
        borderBottomWidth:1,
        borderColor: "#8A8A8A",
        //   paddingVertical: 10,
        //   paddingHorizontal: 12,
        width: windowWidth,
        position: "absolute",
        bottom:bottom || 0,
        //   paddingBottom: 30,
        backgroundColor: colors.primary,
        paddingVertical:verticalScale(10),
        paddingHorizontal:scale(10)
        // height: verticalScale(100),
        //   paddingHorizontal:scale(20)
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius:scale(20),
          backgroundColor: colors.black,
          paddingHorizontal:scale(5),
          paddingVertical:verticalScale(3),
          
          // padding:scale(10),
        //   height: verticalScale(60),
          width: "82%",
          alignSelf: "center",
          // marginBottom:verticalScale(30)
        }}
      >
        <TextInput
          style={{
            marginLeft: 12,
            color: colors.white,
            width: "70%",
            fontSize: verticalScale(16),
            // backgroundColor:"red"
          }}
          placeholderTextColor={colors.gray200}
          placeholder={placeholder ||"Write a status update"}
        />
        <TouchableOpacity
        activeOpacity={0.6}
        >
          <Image
            source={images.attach}
            style={{ width: scale(20), height: scale(20) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Spacer width={scale(20)}/>

        <TouchableOpacity
        activeOpacity={0.6}
        >
          <Image
            source={images.camera}
            style={{ width: scale(20), height: scale(20) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
      activeOpacity={0.6}
      style={{width:scale(45),height:scale(45),borderRadius:scale(45),backgroundColor:colors.sky,alignItems:"center",justifyContent:"center"}}
      >

<Image
            source={images.sendmessage}
            style={{ width: scale(25), height: scale(25) }}
            // resizeMode="contain"
          />



      </TouchableOpacity>
    </View>
  );
};

export default MessageSender;

const styles = StyleSheet.create({});
