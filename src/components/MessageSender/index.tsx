import {
  Image,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomText from "../CustomText";
import { appStyles } from "../../utils/AppStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../assets/images";
import { windowWidth } from "../../utils/Dimensions";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { AUTH, StorageServices } from "../../utils/hooks/StorageServices";
import { CreatePost } from "../../api/ApiServices";
import { usePermissions } from "../../utils/Permissions";
import ImagePicker from "react-native-image-crop-picker";
import { openSettings } from "react-native-permissions";

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
  placeholder?: string;
  bottom?: any;
  sendImage?: any;
  channelId?: any;
  token?: any;
  setAuthPosts?: any;
  authPosts?: any;
};

const MessageSender = ({
  placeholder,
  bottom,
  sendImage,
  channelId,
  token,
  setAuthPosts,
  authPosts,
}: Props) => {
  const [state, setState] = useState({
    description: "",
    // imageUrl: "",
    channelId: channelId,
  });
  const { requestGalleryPermission } = usePermissions();
  const onOpenGallery = async (isPicture: any) => {
    console.log("ISpucvibdv", isPicture);
    let gallerypermission = await requestGalleryPermission();
    if (gallerypermission == "granted" || gallerypermission == "limited") {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: "photo",
        forceJpg: true,
      }).then(async (result) => {
        if (result) {
          const fileName = result?.path?.split("/").pop();
          let data = {
            ...result,
            fileName: fileName,
            name: fileName,
            size: result?.size,
            height: result?.height,
            type: result?.mime,
            uri: result?.path,
            width: result?.width,
          };
          setState({ ...state, imageUrl: data });
          console.log(data);
        }
      });
    } else {
      if (gallerypermission == "blocked") {
        if (Platform.OS == "ios") {
          openSettings();
        } else {
          Linking.openSettings();
        }
      }
    }
  };

  const createPost = async () => {
    const form = new FormData();
    form.append("description", state.description);
    form.append("channelId", state.channelId);
    if(state?.imageUrl){
      form.append("imageUrl", state?.imageUrl);
    }
    console.log(form);
    CreatePost(form, token, async ({ isSuccess, response }: any) => {
      console.log("data", isSuccess);

      let result = JSON.parse(response);
      if (result.status) {
        console.log(result);
        setAuthPosts([...authPosts, result?.post]);
        // setComments([...comments, result.comment]);
        // setLoading2(false);
      } else {
        // Alert.alert("Alert!", "Something went wrong");
        console.log("Something went wrong", result);
      }
    });
  };
  // console.log(state,token);

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#8A8A8A",
        //   paddingVertical: 10,
        //   paddingHorizontal: 12,
        width: windowWidth,
        position: "absolute",
        bottom: bottom || 0,
        //   paddingBottom: 30,
        backgroundColor: colors.primary,
        paddingVertical: verticalScale(10),
        paddingHorizontal: scale(10),
        // height: verticalScale(100),
        //   paddingHorizontal:scale(20)
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: scale(20),
          backgroundColor: colors.black,
          paddingHorizontal: scale(5),
          paddingVertical: verticalScale(3),

          // padding:scale(10),
          //   height: verticalScale(60),
          width: "82%",
          alignSelf: "center",
          // marginBottom:verticalScale(30)
        }}
      >
        <TextInput
          value={state.description}
          onChangeText={(text) => setState({ ...state, description: text })}
          style={{
            marginLeft: 12,
            color: colors.white,
            width: "70%",
            fontSize: verticalScale(16),
            // backgroundColor:"red"
          }}
          placeholderTextColor={colors.gray200}
          placeholder={placeholder || "Write a status update"}
        />
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={images.attach}
            style={{ width: scale(20), height: scale(20) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Spacer width={scale(20)} />

        <TouchableOpacity activeOpacity={0.6} onPress={onOpenGallery}>
          <Image
            source={images.camera}
            style={{ width: scale(20), height: scale(20) }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={createPost}
        activeOpacity={0.6}
        style={{
          width: scale(45),
          height: scale(45),
          borderRadius: scale(45),
          backgroundColor: colors.sky,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={sendImage || images.sendmessage}
          style={{ width: scale(25), height: scale(25) }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default MessageSender;

const styles = StyleSheet.create({});
