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
import {
  AUTH,
  StorageServices,
  TOKEN,
} from "../../utils/hooks/StorageServices";
import { CreatePost, SendMessage } from "../../api/ApiServices";
import { usePermissions } from "../../utils/Permissions";
import ImagePicker from "react-native-image-crop-picker";
import { openSettings } from "react-native-permissions";
import { useNavigation } from "@react-navigation/native";
import ImageUploaderModal from "../ImageUploaderModal";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  message?: string;
  chatDate?: string;
  comments?: boolean;
  profile?: boolean;
  edit?: boolean;
  newChat?: boolean;
  onEdit?: () => void;
  placeholder?: string;
  bottom?: any;
  sendImage?: any;
  channelId?: any;
  token?: any;
  setAuthPosts?: any;
  authPosts?: any;
  setConversation?: any;
  conversation?: any;
  receiverId?: any;
  receiver?: any;
  authId?: any;
  giphy?: any;
  setGiphy?: any;
  notShow?: boolean;
  onGiphyPress?: () => void;
};

const MessageSender = ({
  placeholder,
  bottom,
  sendImage,
  channelId,
  token,
  setAuthPosts,
  authPosts,
  message,
  setConversation,
  conversation,
  receiverId,
  receiver,
  authId,
  notShow,
  newChat,
  onGiphyPress,
  giphy,
  setGiphy,
}: Props) => {
  const navigation: any = useNavigation();
  const [isImageUplaod, setIsImageUplaod] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState({});

  const [state, setState] = useState({
    description: "",
    imageUrl: "",
    channelId: channelId,
  });
  const [msg, setMsg] = useState({
    message: "",
    senderId: authId,
    receiverId: receiverId,
    attachment: "",
  });
  const { requestGalleryPermission } = usePermissions();
  const onOpenGallery = async (isPicture: any) => {
    // console.log("ISpucvibdv", isPicture);
    setIsImageUplaod(true);
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
          message
            ? setMsg({ ...msg, attachment: data })
            : setState({ ...state, imageUrl: data });
          setImageData(data);

          // setTimeout(() => {
          //   setIsImageUplaod(true);
          // }, 500);
          // console.log(data);
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
    let form = new FormData();
    form.append("description", state.description);
    form.append("channelId", state.channelId);
    if (state.imageUrl) {
      form.append("imageUrl", state.imageUrl);
    }
    // form.append("gif", 'giphy');
    // if (giphy) {
    // form.append("gif", giphy);
    // }
    setState({ description: "", imageUrl: "", channelId: channelId });
    setLoading(true);

    // setGiphy("")
    console.log(form);
    CreatePost(form, token, async ({ isSuccess, response }: any) => {
      console.log("data", isSuccess);
      console.log("response", response);

      let result = JSON.parse(response);
      if (result.status) {
        console.log(result);
        setIsImageUplaod(false);
        setImageData({});
        setAuthPosts([...authPosts, result?.post]);
        setLoading(false);
        // setComments([...comments, result.comment]);
        // setLoading2(false);
      } else {
        setLoading(false);
        // Alert.alert("Alert!", "Something went wrong");
        console.log("Something went wrong", result);
      }
    });
  };

  // console.log(state,token);

  const sendMessage = async () => {
    let token = await StorageServices.getItem(TOKEN);
    let form = new FormData();
    form.append("senderId", msg.senderId);
    form.append("receiverId", msg.receiverId);
    if (msg.message) {
      form.append("message", msg.message);
    }
    if (msg.attachment) {
      form.append("attachment", msg.attachment);
    }
    if (giphy) {
      form.append("gif", giphy);
    }
    setMsg({ ...msg, message: "", attachment: "" });
    setLoading(true);
    setGiphy("");
    SendMessage(form, token, async ({ isSuccess, response }: any) => {
      console.log("data p", isSuccess);
      console.log(response);
      let result = JSON.parse(response);
      if (result.status) {
        console.log(result);
        setIsImageUplaod(false);
        setImageData({});
        setLoading(false);

        // if(result?.message?.senderId===msg.senderId){
        //   setConversation([...conversation,result?.message])
        // }
        // console.log('result?.posts',result?.posts?.data)
        if (newChat) {
          // navigation.navigate('MessageScreen');
          navigation.navigate("MessageScreen", {
            item: receiver,
          });
        }

        // setConversation([...conversation,result?.message]);
      } else {
        setMsg({ ...msg, message: "", attachment: "" });
        setLoading(false);
        console.log(result);
        // Alert.alert("Alert!", "Something went wrong",);
        console.log("Something went wrong");
      }
    });
    // SendMessage()
  };
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#8A8A8A",

          width: windowWidth,
          position: "absolute",
          bottom: bottom || 0,
          backgroundColor: colors.primary,
          paddingVertical: verticalScale(10),
          paddingHorizontal: scale(10),
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
            width: "82%",
            alignSelf: "center",
          }}
        >
          <TextInput
            value={message ? msg.message : state.description}
            onChangeText={(text) =>
              message
                ? setMsg({ ...msg, message: text })
                : setState({ ...state, description: text })
            }
            style={{
              marginLeft: 12,
              color: colors.white,
              paddingRight: 5,
              width: notShow ? "90%" : "75%",
              fontSize: verticalScale(16),
            }}
            placeholderTextColor={colors.gray200}
            placeholder={placeholder || "Write a status update"}
          />
          {notShow ? (
            <></>
          ) : (
            <>
              <TouchableOpacity activeOpacity={0.6} onPress={onGiphyPress}>
                <Image
                  source={images.uploadGiphy}
                  style={{ width: scale(20), height: scale(20) }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              <Spacer width={scale(10)} />
            </>
          )}

          {notShow ? (
            <></>
          ) : (
            <>
              <TouchableOpacity activeOpacity={0.6} onPress={onOpenGallery}>
                <Image
                  source={images.attach}
                  style={{ width: scale(20), height: scale(20) }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </>
          )}
        </View>

        <TouchableOpacity
          onPress={message ? sendMessage : createPost}
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
      <ImageUploaderModal
        isModalVisible={isImageUplaod}
        imageData={imageData}
        sendMessage={sendMessage}
        createPost={createPost}
        setState={setState}
        state={state}
        msg={msg}
        setMsg={setMsg}
        message={message}
        setLoading={setLoading}
        loading={loading}
        // setActiveChat={setActiveChat}
        setModalVisible={setIsImageUplaod}
      />
    </>
  );
};

export default MessageSender;

const styles = StyleSheet.create({});
