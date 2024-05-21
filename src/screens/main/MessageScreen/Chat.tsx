import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import MessagesList, { windowWidth } from "./MessagesList";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import ImagePicker from "react-native-image-crop-picker";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import MessageSender from "../../../components/MessageSender";
import InboxComponent from "../../../components/InboxComponent";
import { useSelector } from "react-redux";
import { getUserData } from "../../../redux/reducers/authReducer";
import {
  AUTH,
  StorageServices,
  TOKEN,
} from "../../../utils/hooks/StorageServices";
import {
  CREATE_TRASH_CONVERSATION,
  CreateArchive,
  CreateBlockConversation,
  DELETE_CONVERSATION,
  GetConversation,
} from "../../../api/ApiServices";
import {
  GiphyContentType,
  GiphyDialog,
  GiphyDialogEvent,
  GiphyDialogMediaSelectEventHandler,
  GiphyMedia,
  GiphySDK,
  GiphyTheme,
  GiphyThemePreset,
} from "@giphy/react-native-sdk";
import moment from "moment";
import {
  Pusher,
  PusherMember,
  PusherChannel,
  PusherEvent,
} from "@pusher/pusher-websocket-react-native";
GiphySDK.configure({ apiKey: "C9JfKgGLTfcnLfvQ8O189iehEyTOq0tm" });
GiphyDialog.configure({
  mediaTypeConfig: [
    GiphyContentType.Emoji,
    GiphyContentType.Gif,
    GiphyContentType.Sticker,
    GiphyContentType.Text,
  ],
  showConfirmationScreen: true,
});
const theme: GiphyTheme = {
  preset: GiphyThemePreset.Light,
  backgroundColor: colors.black300,
  cellCornerRadius: 12,
  defaultTextColor: colors.white,
};
GiphyDialog.configure({ theme });

const Chat = () => {
  const pusher = Pusher.getInstance();
  const route: any = useRoute();
  const item = route.params.item;
  const navigation: any = useNavigation();
  const flatListRefChat: any = useRef(null);
  const [loadings, setLoadings] = useState({
    archive: false,
    trash: false,
    block: false,
  });
  const [conversation, setConversation] = useState<any>([]);
  const [NewMessage, setNewMessage] = useState<any>({});
  const isFocused = useIsFocused();
  const userData = useSelector(getUserData);
  const [giphy, setGiphy] = useState("");
  const [state, setState] = useState({
    archive: false,
    block: false,
    trash: false,
  });
  // useEffect(() => {
  //   // setTimeout(() => {
  //     if (conversation.length > 0 && flatListRef.current) {
  //       flatListRef.current.scrollToEnd({ animated: true });
  //     }
  //   // }, 1000);
  // }, [conversation]);

  const getConversation = async () => {
    let token = await StorageServices.getItem(TOKEN);

    // console.log(item.id)
    GetConversation(
      { conversationId: item.id },
      token,
      async ({ isSuccess, response }: any) => {
        console.log("data c", isSuccess);
        // console.log(msg)
        let result = JSON.parse(response);
        if (result.status) {
          console.log(result?.conversation?.data);
          let data = result?.conversation?.data.reverse();
          // console.log('result?.posts',result?.posts?.data)

          setConversation(data);
          // flatListRef.current.scrollToEnd({ animated: true });
          // await StorageServices.setItem("chatlist", result?.conversation?.data);
        } else {
          // setMsg({...msg,message:''})
          console.log(result);
          // Alert.alert("Alert!", "Something went wrong",);
          console.log("Something went wrong");
        }
      }
    );
  };
  // console.log("giph", giphy);
  useEffect(() => {
    const handler: GiphyDialogMediaSelectEventHandler = (e) => {
      setGiphy(e.media.url);

      GiphyDialog.hide();
    };
    const listener = GiphyDialog.addListener(
      GiphyDialogEvent.MediaSelected,
      handler
    );
    return () => {
      listener.remove();
    };
  }, []);

  useEffect(() => {
    setConversation([...conversation, NewMessage]);
  }, [NewMessage]);

  const con = async () => {
    // console.log("am focused");
    // let user = await StorageServices.getItem(AUTH);

    try {
      await pusher.init({
        apiKey: "e8f7ca7b8515f9bfcbb0",
        cluster: "mt1",
        // onConnectionStateChange,
      });
      let channelNumber =
        parseInt(item?.user1?.id || item?.user2?.id) + parseInt(userData.id);
      console.log("channelNumber", channelNumber);
      console.log("chatChannel_" + channelNumber);
      let chatChannel = await pusher.subscribe({
        channelName: "chatChannel_" + channelNumber,
        onEvent: (event: PusherEvent) => {
          console.log("chatChannel", JSON.parse(event.data));
          if (!(JSON.parse(event.data).message?.senderId == userData.id)) {
            // setConversation([...conversation,JSON.parse(event.data).message])
            setNewMessage(JSON.parse(event.data).message);
            flatListRefChat.current.scrollToEnd({ animated: true });
          }
          // setConversation([...conversation, JSON.parse(event.data).message]);
          // setComments([...comments,JSON.parse(event.data).comment])
        },
      });
      // await pusher.subscribe({ channelName:'commentsChannel_'+id });
      await pusher.connect();
    } catch (e) {
      console.log(`ERROR: ${e}`);
    }
  };
  const unCon = async () => {
    await pusher.unsubscribe({
      channelName:
        "chatChannel_" + (item?.user1?.id || item?.user2?.id) + userData.id,
    });
    await pusher.disconnect();
  };
  useEffect(() => {
    if (isFocused) {
      con();
    } else {
      unCon();
    }
  }, [isFocused]);

  // useEffect(() => {
  //   async () => {
  //     let chatList = await StorageServices.getItem("chatList");
  //     if (chatList) {
  //       setConversation(chatList);
  //     }
  //   };
  // }, [isFocused]);

  useEffect(() => {
    if (isFocused) getConversation();
  }, [isFocused]);

  const handleArchive = async () => {
    let user = await StorageServices.getItem(AUTH);
    let conversationId = item.id;
    let token = await StorageServices.getItem(TOKEN);
    let data = { userId: user.id, conversationId: conversationId };
    setLoadings({ ...loadings, archive: true });

    CreateArchive(data, token, async ({ isSuccess, response }: any) => {
      console.log("data c", isSuccess);
      // console.log(msg)
      let result = JSON.parse(response);
      if (result.status) {
        setLoadings({ ...loadings, archive: false });
        //redirect
        navigation.navigate("MessageScreen");
        console.log(result);
      } else {
        setLoadings({ ...loadings, archive: false });
        Alert.alert("Alert!", "Something went wrong");
        console.log(result);
        console.log("Something went wrong");
      }
    });
  };
  const handleBlock = async () => {
    let user = await StorageServices.getItem(AUTH);
    let conversationId = item.id;
    let token = await StorageServices.getItem(TOKEN);
    let data = { userId: user.id, conversationId: conversationId };
    setLoadings({ ...loadings, block: true });

    CreateBlockConversation(
      data,
      token,
      async ({ isSuccess, response }: any) => {
        console.log("data b", isSuccess);
        // console.log(msg)
        let result = JSON.parse(response);
        if (result.status) {
          setLoadings({ ...loadings, block: false });
          //redirect
          console.log(result);
          navigation.navigate("MessageScreen");
        } else {
          setLoadings({ ...loadings, block: false });
          Alert.alert("Alert!", "Something went wrong");
          console.log(result);
          console.log("Something went wrong");
        }
      }
    );
  };
  const handleTrash = async () => {
    // let user = await StorageServices.getItem(AUTH);
    let conversationId = item.id;
    let token = await StorageServices.getItem(TOKEN);
    // let data = { userId: user.id, conversationId: conversationId };
    setLoadings({ ...loadings, trash: true });
    DELETE_CONVERSATION(
      conversationId,
      token,
      async ({ isSuccess, response }: any) => {
        console.log("data t", isSuccess);
        // console.log(msg)
        let result = JSON.parse(response);
        if (result.status) {
          setLoadings({ ...loadings, trash: false });
          //redirect
          navigation.navigate("MessageScreen");
        } else {
          setLoadings({ ...loadings, trash: false });
          Alert.alert("Alert!", "Something went wrong");
          console.log(result);
          console.log("Something went wrong");
        }
      }
    );
  };

  const imagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
    });
  };

  const renderChatList = ({ item }: any) => {
    return (
      <InboxComponent
        name={item?.sender?.name}
        image={{ uri: item?.sender?.imageUrl }}
        message={item?.message}
        time={moment(item?.created_at).format("hh:mm a")}
        chatDate={item?.chatDate}
        attachments={item?.attachments}
        gif={item?.gif}
      />
    );
  };

  return (
    <View style={appStyles.main}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor:"red"
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              width: scale(27),
              height: scale(30),
              alignItems: "flex-start",
              justifyContent: "center",
              // backgroundColor:"red"
              // backgroundColor:"red"
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: scale(18), height: scale(25) }}
              source={images.back200}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={appStyles.row}
            activeOpacity={0.6}
            // onPress={()=>{
            //   console.log("#Knkcndc",item)
            //     navigation.navigate("OthersProfile", {
            //   id: item?.receiverId,
            // })

            // }}
          >
            <Image
              style={{
                width: scale(37),
                height: scale(37),
                borderRadius: 999,
              }}
              source={{ uri: item?.user1?.imageUrl || item?.user2?.imageUrl }}
            />
            <View
              style={{
                marginHorizontal: scale(7),
                // paddingBottom: verticalScale(5),
              }}
            >
              <CustomText
                color={colors.white}
                size={17}
                // style={{ marginTop: verticalScale(5) }}
                text={item?.user1?.name || item?.user2?.name}
              />
              <CustomText
                // fontWeight="700"
                color={colors.white}
                size={13}
                style={{ marginTop: verticalScale(-4) }}
                text={`${
                  item?.user1?.followers_count || item?.user2?.followers_count
                } Followers`}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ ...appStyles.row }}>
          <View style={appStyles.row}>
            {loadings.archive ? (
              <ActivityIndicator size={"small"} color={"#fff"} />
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={handleArchive}>
                <Image
                  style={{
                    width: scale(22),
                    height: scale(22),
                    tintColor: colors.white,
                  }}
                  source={images.download}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            {/* {state.archive && (
            )} */}

            <Spacer width={scale(20)} />
            {loadings.block ? (
              <ActivityIndicator size={"small"} color={"#fff"} />
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={handleBlock}>
                <Image
                  style={{
                    width: scale(18),
                    height: scale(18),
                    tintColor: colors.white,
                  }}
                  source={images.block}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
            <Spacer width={scale(20)} />
            {loadings.trash ? (
              <ActivityIndicator size={"small"} color={"#fff"} />
            ) : (
              <TouchableOpacity activeOpacity={0.6} onPress={handleTrash}>
                <Image
                  style={{
                    width: scale(17),
                    height: scale(17),
                    tintColor: colors.white,
                  }}
                  source={images.trash}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          </View>

          {/* <CustomText color={"transparent"} size={18} text={"sss"} /> */}
        </View>
      </View>

      {/* <View style={{ backgroundColor: "red",flex:0.9 }}>
        <ScrollView >
        
        </ScrollView>
        <View style={{ backgroundColor: "green", height: 100 }}></View>
      </View>
      <View
        style={{
          backgroundColor: "brown",
          height: 100,
          width: "100%",
          position: "absolute",
          zIndex: 100,
          bottom: 0,
        }}
      ></View> */}
      {/* <View></View> */}
      <View style={{flex:0.9 }}>
        <FlatList
          data={conversation}
          ref={flatListRefChat}
          keyExtractor={(item) => item}
          // nestedScrollEnabled={true}
          inverted={true}
          // style={{paddingTop:verticalScale(20)}}
          // contentContainerStyle={{
          //   gap: 7,
          //   // transform: [{ scaleY: -1 }],
          // }}
          // inverted={true}
          renderItem={renderChatList}
          // style={{ transform: [{ scaleY: -1 }] }}
        />
        </View>
        {/* <View> */}
          <MessageSender
            placeholder="write a message"
            message={"chat"}
            onGiphyPress={() => GiphyDialog.show()}
            giphy={giphy}
            setGiphy={setGiphy}
            setConversation={setConversation}
            conversation={conversation}
            receiverId={item?.user1?.id || item?.user2?.id}
            authId={userData.id}
          />
        {/* </View> */}
      {/* </View> */}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black300,
    alignItems: "center",
    paddingTop: Platform.OS == "ios" ? "18%" : "2%",
    paddingBottom: "1%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
  },
});
