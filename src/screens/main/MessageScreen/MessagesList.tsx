import React, { useEffect, useState } from "react";
import { View, Image, Dimensions, TouchableOpacity, Text } from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import moment from "moment";
import { useSelector } from "react-redux";
import { getNewMessageR, getTyper, getUserData, setNewMessageR, setNotificationAlert, setTyper, setTypingR } from "../../../redux/reducers/authReducer";
import { Pusher, PusherEvent } from "@pusher/pusher-websocket-react-native";
import NewText from "../../../components/NewText";
import { useDispatch } from 'react-redux';
import { formatMessageTime } from "../../../utils/CommonFun";

export const windowWidth = Dimensions.get("window").width;

const MessagesList = ({ item,handleFavorite }: any, List: boolean) => {
  const navigation: any = useNavigation();
  const user = useSelector(getUserData);
  const dispatch = useDispatch()
  const [lastMessage, setLastMessage] = useState()
  const receiver=item?.user1 || item?.user2
  const [isStar,setIsStar]=useState(false)

  const [favorite, setFavorite] = useState(false);
  const [typing, setTyping] = useState(false);
  const [event, setEvent] = useState<any>({});
  const [typingChat, setTypingChat] = useState(false);

  const pusher = Pusher.getInstance();
console.log("lastMessage",lastMessage)

  useEffect(()=>{
    setLastMessage(item?.last_message); 
  },[item?.last_message])

  // useEffect(() => {
  //   if(event){
  //     setTyping(true)
  //     setTimeout(() => {
  //       setTyping(false)
  //     }, 2000); 

  //   }
  // }, [event])
  
  
  

  useEffect(() => {
    pusher.init({
      apiKey: "e8f7ca7b8515f9bfcbb0",
      cluster: "mt1",
      // onConnectionStateChange,
    });

     pusher.connect();
      let channelNumber =item?.userId1+item?.userId2;
      // console.log("channelNumber", channelNumber);
      console.log("chatChannel_" + channelNumber);
      console.log("TypingChannel_" + channelNumber);
      let chatChannel =  pusher.subscribe({
        channelName: "chatChannel_" + channelNumber,
        onEvent: (event: PusherEvent) => {
          console.log("chatChannel", JSON.parse(event.data));
          setLastMessage(JSON.parse(event.data).message);
          if (!(JSON.parse(event.data).message?.senderId == user.id)) {
            dispatch(setNewMessageR(JSON.parse(event.data).message))
            // setConversation([...conversation,JSON.parse(event.data).message])
            // setNewMessage(JSON.parse(event.data).message);
            // flatListRefChat.current.scrollToEnd({ animated: true });
          }
          // setConversation([...conversation, JSON.parse(event.data).message]);
          // setComments([...comments,JSON.parse(event.data).comment])
        },
      });
      let TypingChannel =  pusher.subscribe({
        channelName: "TypingChannel_" + channelNumber,
        onEvent: (event: PusherEvent) => {
          if(JSON.parse(event.data).users.user1Id==receiver?.id){
            setEvent(JSON.parse(event.data).users)
            dispatch(setTyper(JSON.parse(event.data).users.user1Id))
            dispatch(setTypingR(true))
            setTyping(true);
            //
            setTimeout(() => {
              dispatch(setTypingR(false))
              setTyping(false);
            }, 2000);
          }
          console.log("TypingChannel m", JSON.parse(event.data).users);
        },
      });

    // Cleanup on unmount
    return () => {
      // channel.unbind('my-event');
       
      pusher.unsubscribe({channelName:"chatChannel_" + item?.userId1+item?.userId2});
      pusher.unsubscribe({channelName:"TypingChannel_" + item?.userId1+item?.userId2});
      pusher.disconnect();
    };
  }, []);


  return (
    <>
      <TouchableOpacity
        onPress={() =>
          {
            dispatch(setNotificationAlert(false))
            navigation.navigate("ChatScreen", {
              item: item,
            })

          }
          
        }
        activeOpacity={0.7}
        style={{
          width: "100%",
          // height: 74,
          borderRadius: 12,
          backgroundColor: "#1D2029",
          paddingHorizontal: scale(10),
          paddingVertical: verticalScale(8),
          flexDirection: "row",
          // alignItems: "center",
        }}
      >
        {/* <Text>{typingChat?'typingChat':''}</Text> */}
        {lastMessage?.receiverId==user?.id?
        <View
          style={{
            width: scale(7.5),
            height: scale(7.5),
            borderRadius: 999,
            backgroundColor: !lastMessage?.read_at ? colors.sky : "transparent",
            marginRight: verticalScale(15),
            alignSelf: "center",
          }}
        />:<View
        style={{
          width: scale(7.5),
          height: scale(7.5),
          borderRadius: 999,
          backgroundColor: "transparent",
          marginRight: verticalScale(15),
          alignSelf: "center",
        }}
      />
        }
        <View style={{ width: scale(65), height: scale(65) }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: scale(8) }}
            source={{ uri: item?.user1?.imageUrl || item?.user2?.imageUrl }}
          />
        </View>

        <View style={{ paddingHorizontal: 10, width: scale(180) }}>
          <View style={{ flexDirection: "row" }}>
            <CustomText
              text={item?.user1?.name || item?.user2?.name}
              color={colors.gray500}
              size={15}
              fontFam="Poppins-Bold"
              fontWeight="800"
            />
          </View>
          {/* <CustomText
                text={(item?.user1?.followers_count||item?.user2?.followers_count)+' Followers'}
                color={colors.white}
                size={10}
                fontFam="Poppins-Bold"
                fontWeight="800"
              /> */}
          {/* <Spacer height={5} /> */}
          {
            !typing?

            <CustomText
              text={lastMessage?.message}
              color={lastMessage?.receiverId==user?.id?!lastMessage?.read_at?  colors.white:colors.gray500:colors.gray500}
              size={15}
              style={{ width: windowWidth / 1.8 }}
              numberOfLines={2}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />:<></>
          }
          {typing?
          
          <NewText
          color={colors.lightgreen}
          size={15}
          text={'Typing...'}
          // label={'Typing...'}
          />:<></>
          }
        </View>
        <View
          style={{
            width: scale(70),
            height: verticalScale(60),
            paddingTop: 3,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginRight: scale(5),
            position: "absolute",
            // backgroundColor:"red",
            right: scale(10),
            top: verticalScale(5),
            // backgroundColor:"red"
            // paddingBottom: 5,
            // backgroundColor:"red"
          }}
        >

{/* {lastMessage?.receiverId==user?.id?
        <View
          style={{
            width: scale(7.5),
            height: scale(7.5),
            borderRadius: 999,
            backgroundColor: !lastMessage?.read_at ? colors.sky : "transparent",
            marginRight: verticalScale(15),
            alignSelf: "center",
          }} */}
          <CustomText
          text={formatMessageTime(lastMessage?.created_at)}
            // text={moment(lastMessage?.created_at).format("h:mm a")}
            color={colors.gray500}
            size={14}
            fontFam="Poppins-Regular"
          />
          <TouchableOpacity onPress={handleFavorite}>
            <Image
              source={
                item?.favorite_con?.length 
                  ? images.star1
                  : images.star
              }
              style={{
                marginRight: scale(5),
                width: scale(18),
                height: scale(18),
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default MessagesList;
