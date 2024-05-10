import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { windowWidth } from "../../../utils/Dimensions";
import MessagesList from "./MessagesList";
import { messagesList } from "../../../utils/Data";
import CustomSearch from "../../../components/CustomSearch";
import { Spacer } from "../../../components/Spacer";
import AbsoluteHeader from "../../../components/AbsoluteHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { scale, verticalScale } from "react-native-size-matters";
import CustomDrawer from "../../../components/CustomDrawer";
import { StorageServices, TOKEN } from "../../../utils/hooks/StorageServices";
import { GetChatList } from "../../../api/ApiServices";
import { useIsFocused } from "@react-navigation/native";

const MessageScreen = ({ navigation }: any) => {
  const [isArchived, setIsArchived] = useState(false);
  const [activeChat, setActiveChat] = useState("Inbox");
  const [chatList, setChatList] = useState<any>([]);
  const isFocused = useIsFocused();

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const renderChatList = ({ item }: any) => {
    return <MessagesList item={item} />;
  };

  const getChatList = async () => {
    let token = await StorageServices.getItem(TOKEN);
    GetChatList(token, async ({ isSuccess, response }: any) => {
      console.log("data p", isSuccess);

      let result = JSON.parse(response);
      if (result.status) {
        console.log(result);
        setChatList(result?.chatList);
        // setAuthPosts(result?.posts?.data);
      } else {
        console.log(result);
        // Alert.alert("Alert!", "Something went wrong",);
        console.log("Something went wrong");
      }
    });
  };

  useEffect(() => {
    if (isFocused) getChatList();
  }, [isFocused]);

  // const filteredList = messagesList.filter((item) =>
  //   item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  // );

  //   const filteredList = messagesList.filter((item) =>
  //   item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  // );
  return (
    <>
      <View style={appStyles.main}>
        <View
          style={{ marginHorizontal: scale(15), marginTop: verticalScale(15) }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: scale(15),
              backgroundColor: colors.black300,
              // paddingVertical:verticalScale(5),
              borderRadius: scale(30),
              marginBottom: verticalScale(10),
              paddingVertical: verticalScale(2),
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setIsOpenDrawer(!isOpenDrawer)}
              // style={{backgroundColor:'red'}}
            >
              <Image
                style={{
                  tintColor: colors.gray500,
                  width: scale(25),
                  height: scale(25),
                }}
                source={images.drawer}
              />
            </TouchableOpacity>

            <TextInput
              style={{
                color: colors.gray500,
                width: "90%",
                fontSize: verticalScale(16),
                paddingLeft: scale(10),
              }}
              placeholderTextColor={colors.gray500}
              placeholder="Search Messages"
            />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: scale(20),
            marginBottom: verticalScale(10),
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomText
            // fontWeight="600"
            color={colors.gray500}
            // fontFam="Poppins-Medium"
            // textDecorationLine={"underline"}
            size={15}
            text={
              activeChat == "Inbox"
                ? "All Messages"
                : activeChat == "Starred"
                ? "Starred Messages"
                : activeChat == "Archive"
                ? "Archived Messages"
                : activeChat == "Trash"
                ? "All Trash"
                : ""
            }
          />

          {activeChat == "Trash" && (
            <CustomText
              // fontWeight="600"
              color={colors.white}
              // fontFam="Poppins-Medium"
              // textDecorationLine={"underline"}
              size={15}
              text={"Empty Trash"}
            />
          )}
        </View>

        <View style={{ flex: 1 }}>
          <FlatList
            data={chatList}
            // data={ isArchived? messagesList.filter(it=>!it.isOnline):messagesList}
            contentContainerStyle={{
              gap: 5,
            }}
            renderItem={renderChatList}
          />
        </View>
      </View>

      <CustomDrawer
        isModalVisible={isOpenDrawer}
        setActiveChat={setActiveChat}
        setModalVisible={setIsOpenDrawer}
      />
    </>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: Platform.OS == "ios" ? "18%" : "5%",
    paddingBottom: "5%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 12,
  },
  input: { color: colors.white, width: windowWidth / 3 },
});
