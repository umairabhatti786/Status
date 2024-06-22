import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import { appStyles } from "../../../utils/AppStyles";
import moment from "moment";
import NewText from "../../../components/NewText";
import { capitalizeFirstLetter, dateFormat, formatTimeDifference } from "../../../utils/CommonFun";
import FastImage from "react-native-fast-image";
export const windowWidth = Dimensions.get("window").width;
import { Pusher, PusherEvent } from "@pusher/pusher-websocket-react-native";

const FriendList = ({ item, onPress, disabled,channelId,setCounter,counter }: any) => {
  const [newPost, setNewPost] = useState(item?.channel?.last_post)
  const pusher = Pusher.getInstance();

  useEffect(() => {
    pusher.init({
      apiKey: "e8f7ca7b8515f9bfcbb0",
      cluster: "mt1",
      // onConnectionStateChange,
    });

     pusher.connect();

       pusher.subscribe({
        channelName: "channelUpdates_" + channelId,
        onEvent: (event: PusherEvent) => {
          // console.log("channelUpdates_", JSON.parse(event.data).post);
          let post = JSON.parse(event.data).post;
          setNewPost(post)
          setCounter(counter+1)
          // let data = [post, ...posts];
          // setPosts(data);
          // if(post.id){
          //   setNewPost(post)
          // }
          // setNewPost(JSON.parse(event.data).post);
        },
      });
     

    // Cleanup on unmount
    return () => {
      pusher.unsubscribe({channelName:"channelUpdates_" + channelId});
      pusher.disconnect();
    };
  }, []);


  return (
    <>
      <TouchableOpacity
        disabled={disabled ? true : false}
        onPress={onPress}
        style={{
          width: "100%",
          // height: verticalScale(85),
          borderRadius: scale(10),
          backgroundColor: "#1D2029",
          padding: scale(6),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: verticalScale(70),
              height: verticalScale(75),
              // marginLeft: scale(3),
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                borderRadius: scale(8),
                overflow: "hidden",
              }}
              source={{ uri: item?.imageUrl }}
            />
            {/* {item.update && (
            <View
              style={{
                width: verticalScale(10),
                height: verticalScale(10),
                backgroundColor: "#3AD079",
                position: "absolute",
                bottom: 7,
                right: 7,
                borderRadius: 999,
              }}
            ></View>
          )} */}
          </View>

          <View
            style={{
              paddingLeft: scale(15),
              width: newPost?.imageUrl ||newPost?.gif
                ? scale(190)
                : scale(250),
            }}
          >
            {/* size={15}
                fontFam="Poppins-Bold"
                fontWeight="800 */}

<View style={{...appStyles.row,gap:8,width:scale(170)}}>
              <CustomText
                text={capitalizeFirstLetter(item?.name)}
                color={colors.white}
                size={16}
                fontFam="Poppins-SemiBold"
                fontWeight="700"
              />

           
              {newPost ? (
                <NewText
                  text={formatTimeDifference(newPost?.created_at)}
                  color={"#999999"}
                  size={12}
                  style={{ marginTop: 7 }}
                  // fontFam="Poppins-Medium"
                  fontWeight="400"
                />
              ) : (
                <></>
              )}
            </View>

            {newPost != "null" ? (
              <CustomText
                text={newPost?.description}
                color={colors.gray500}
                size={15}
                lineHeight={21}
                fontFam="Inter-Medium"
                numberOfLines={2}
                style={{ marginBottom: verticalScale(5) }}
                // fontFam="Poppins-Medium"
                fontWeight="600"
              />
            ) : (
              <></>
            )}
          </View>
        </View>
        {newPost?.imageUrl && (
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingRight: 5,
              // paddingTop: 14,
              paddingBottom: verticalScale(5),
              position: "absolute",
              alignSelf: "center",
              right: scale(5),
              top:22,

              

              // backgroundColor:"red"
            }}
          >
            <View
              style={{ width: verticalScale(52), height: verticalScale(52) }}
            >
              {newPost != "null" ? (

                
                <FastImage
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: scale(5),
                    overflow: "hidden",
                  }}
                  source={{
                    uri: newPost?.imageUrl ,
                    headers: { Authorization: "someAuthToken" },
                    priority: FastImage.priority.high,
                  }}
                  // source={{ uri: item?.channel?.last_post?.imageUrl }}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        )}
        {newPost?.gif && (
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "space-between",
              paddingRight: 5,
              // paddingTop: 14,
              paddingBottom: verticalScale(5),
              position: "absolute",
              alignSelf: "center",
              right: scale(5),
              top:22,

              // backgroundColor:"red"
            }}
          >
            <View
              style={{
                width: verticalScale(52),
                height: verticalScale(52),
                borderRadius: scale(5),
                overflow: "hidden",

              }}
            >
              {newPost?.gif ? (
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: scale(5),
                  }}
                  source={{ uri: newPost.gif }}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        )}
      </TouchableOpacity>
    </>
  );
};

export default FriendList;
