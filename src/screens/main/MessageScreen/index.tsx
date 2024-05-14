import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
  Alert,
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
import {
  AUTH,
  StorageServices,
  TOKEN,
} from "../../../utils/hooks/StorageServices";
import {
  CreateFavoriteConversation,
  GetChatList,
  GetUserArchives,
  GetUserFavoriteConversation,
  GetUserTrashConversation,
  SearchMessages,
} from "../../../api/ApiServices";
import { useIsFocused } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const MessageScreen = ({ navigation }: any) => {
  const [isArchived, setIsArchived] = useState(false);
  const [activeChat, setActiveChat] = useState("Inbox");
  const [search, setSearch] = useState("");
  const [messagesList, setMessagesList] = useState<any>([]);
  const [chatList, setChatList] = useState<any>([]);
  const isFocused = useIsFocused();

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const renderChatList = ({ item }: any) => {
    return <MessagesList item={item} handleFavorite={()=>handleFavorite(item.id)}/>;
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

  const getUserFavoriteConversation = async () => {
    let token = await StorageServices.getItem(TOKEN);

    let user = await StorageServices.getItem(AUTH);
    // console.log(user.id)
    GetUserFavoriteConversation(
      user.id,
      token,
      async ({ isSuccess, response }: any) => {
        console.log("data favCon", isSuccess);

        let result = JSON.parse(response);
        if (result.status) {
          console.log(result?.data[0]);
          let arcF=result?.data?.map((a:any)=>(a?.conversations?.[0]))
          setChatList(arcF);
          // setAuthPosts(result?.posts?.data);
        } else {
          console.log(result);
          // Alert.alert("Alert!", "Something went wrong",);
          console.log("Something went wrong");
        }
      }
    );
  };
  const getUserArchives = async () => {
    let token = await StorageServices.getItem(TOKEN);

    let user = await StorageServices.getItem(AUTH);
    // console.log(user.id)
    GetUserArchives(
      user.id,
      token,
      async ({ isSuccess, response }: any) => {
        console.log("data archive", isSuccess);

        let result = JSON.parse(response);
        if (result.status) {
          console.log(result?.data[0]);
          let arcF=result?.data?.map((a:any)=>(a?.conversations?.[0]))
          // setMessagesList(result?.searchResult);
          // console.log(arcF)
          setChatList(arcF);
          // setAuthPosts(result?.posts?.data);
        } else {
          console.log(result);
          // Alert.alert("Alert!", "Something went wrong",);
          console.log("Something went wrong");
        }
      }
    );
  };
  const getUserTrashConversation = async () => {
    let token = await StorageServices.getItem(TOKEN);

    let user = await StorageServices.getItem(AUTH);
    // console.log(user.id)
    GetUserTrashConversation(
      user.id,
      token,
      async ({ isSuccess, response }: any) => {
        console.log("data trash", isSuccess);

        let result = JSON.parse(response);
        if (result.status) {
          console.log(result?.data[0]);
          let arcF=result?.data?.map((a:any)=>(a?.conversations?.[0]))
          // setMessagesList(result?.searchResult);
          // console.log(arcF)
          setChatList(arcF);
          // setAuthPosts(result?.posts?.data);
        } else {
          console.log(result);
          // Alert.alert("Alert!", "Something went wrong",);
          console.log("Something went wrong");
        }
      }
    );
  };
  

  useEffect(() => {
    if (isFocused) {
      console.log(activeChat)
      if (activeChat === "Inbox") {
        getChatList();
      } else if (activeChat === "Starred") {
        getUserFavoriteConversation()
      } else if (activeChat === "Archive") {
        getUserArchives()
      } else if (activeChat === "Trash") {
        getUserTrashConversation();
      } 
    }
  }, [isFocused,activeChat]);

  const handleSearch = async (text: any) => {
    setSearch(text);
    if (search.length == 0) {
      setMessagesList([]);
    } else {
      let user = await StorageServices.getItem(AUTH);
      let token = await StorageServices.getItem(TOKEN);
      // console.log(user.id)
      SearchMessages(
        user.id,
        text,
        token,
        async ({ isSuccess, response }: any) => {
          console.log("data p", isSuccess);

          let result = JSON.parse(response);
          if (result.status) {
            console.log(result);
            setMessagesList(result?.searchResult);
            // setChatList(result?.chatList);
            // setAuthPosts(result?.posts?.data);
          } else {
            console.log(result);
            // Alert.alert("Alert!", "Something went wrong",);
            console.log("Something went wrong");
          }
        }
      );
    }
  };

  const handleFavorite = async (conId:any) => {
    let user = await StorageServices.getItem(AUTH);
    let conversationId = conId;
    let token = await StorageServices.getItem(TOKEN);
    let data = { userId: user.id, conversationId: conversationId };

    CreateFavoriteConversation(data, token, async ({ isSuccess, response }: any) => {
      console.log("data c", isSuccess);
      // console.log(msg)
      let result = JSON.parse(response);
      if (result.status) {
        console.log(result)
      } else {
        Alert.alert("Alert!", "Something went wrong");
        console.log(result);
        console.log("Something went wrong");
      }
    });
  };

  const handleDeleteConvo=()=>{
    console.log('first')
  }

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
              onChangeText={handleSearch}
              value={search}
            />
          </View>
        </View>

        <View style={{ maxHeight: 200 }}>
          <ScrollView>
            {messagesList.map((m: any) => (
              <TouchableOpacity
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
                  text={m.message}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
            <TouchableOpacity activeOpacity={0.6} onPress={handleDeleteConvo}>

              <CustomText
                // fontWeight="600"
                color={colors.white}
                // fontFam="Poppins-Medium"
                // textDecorationLine={"underline"}
                size={15}
                text={"Empty Trash"}
              />
            </TouchableOpacity>
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
