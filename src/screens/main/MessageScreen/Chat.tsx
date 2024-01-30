import {
  FlatList,
  Image,
  ScrollView,
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
      <MessagesComponent
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
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.back} />
          </TouchableOpacity>
          <View style={{ marginLeft: "15%" }}>
            <CustomText color={colors.white} size={18} text={item?.name} />
            <CustomText
              style={{ marginTop: 2 }}
              color={colors.lightgreen}
              size={18}
              text={"Online"}
            />
          </View>
        </View>
        <Image source={images.verticaldots} />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={messages}
          contentContainerStyle={{
            gap: 7,
          }}
          renderItem={renderChatList}
        />
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderTopWidth: 1,
              borderColor: colors.gray200,
              justifyContent: "space-between",
              paddingVertical: 10,
              paddingHorizontal: 12,
              width: windowWidth,
              position: "absolute",
              bottom: 0,
              paddingBottom: 30,
              backgroundColor: colors.black,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={imagePicker}>
                <Image source={images.clip} />
              </TouchableOpacity>
              <TextInput
                style={{
                  marginLeft: 12,
                  color: colors.white,
                  width: windowWidth / 1.35,
                  fontSize:17
                }}
                placeholderTextColor={colors.gray200}
                placeholder="Type a message"
              />
            </View>
            <TouchableOpacity>
              <Image source={images.send} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: "18%",
    paddingBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
});
