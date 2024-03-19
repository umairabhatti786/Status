import {
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
import React from "react";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import MessagesList, { windowWidth } from "./MessagesList";
import { useNavigation, useRoute } from "@react-navigation/native";
import ImagePicker from "react-native-image-crop-picker";
import { messages, messagesList } from "../../../utils/Data";
import MessagesComponent from "../../../components/MessageComponent";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import MessageSender from "../../../components/MessageSender";
import InboxComponent from "../../../components/InboxComponent";

const Chat = () => {
  const route: any = useRoute();
  const item = route.params.item;
  const navigation: any = useNavigation();
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
        name={item?.name}
        image={item?.img}
        message={item?.message}
        time={item?.time}
        chatDate={item?.chatDate}
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

              <Image
                style={{
                  width: scale(37),
                  height: scale(37),
                  borderRadius: 999,
                }}
                source={item.img}
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
                  text={item.name}
                />
                <CustomText
                  // fontWeight="700"
                  color={colors.white}
                  size={13}
                  style={{ marginTop: verticalScale(-4) }}
                  text={"1.2M Followers"}
                />
              </View>
            </View>
            <View style={{ ...appStyles.row, }}>

            <View style={appStyles.row}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    // onPress={() => setIsWatchList(!isWatchList)}
                  >
                    <Image
                      style={{
                        width: scale(21),
                        height: scale(21),
                        tintColor: colors.white,
                      }}
                      source={images.download}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Spacer width={scale(20)} />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.goBack()}
                  >
                    <Image
                      style={{
                        width: scale(17),
                        height: scale(17),
                        tintColor: colors.white,
                      }}
                      source={images.block}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Spacer width={scale(20)} />
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => navigation.goBack()}
                  >
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
                         </View>

            {/* <CustomText color={"transparent"} size={18} text={"sss"} /> */}
          </View>
     
      
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={messages}
          // style={{paddingTop:verticalScale(20)}}
          contentContainerStyle={{
            gap: 7,
          }}
          renderItem={renderChatList}
        />
        <View>
        <MessageSender
        placeholder="write a message"
        />

        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black300,
    alignItems: "center",
    paddingTop: Platform.OS=="ios"?"18%":"2%",
    paddingBottom:"1%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
  },
});
