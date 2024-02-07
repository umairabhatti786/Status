import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { Spacer } from "../../../components/Spacer";
import TopHeader from "../../../components/TopHeader";
import TopBar from "../../../components/TopBar";
import FriendList from "./FriendList";
import { images } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const [activeBar, setActiveBar] = useState("Friends");

  const topBarData=[
    "Friends",
    "My Updates"
  ]


  const chatList = [
    {
      img: images.man9,
      imgbg: images.postBg,
      postimg: images.postCity,
      address: "Boston, MA United States 245 Friends",
      name: "Lauren Connors",
      message:
        "Hey everyone! Statuss is great. Here’s a photo of my view right now.",
      time: "8:34 AM",
      count: "2",
      
      update: true,
    },
    {
      img: images.man2,
      imgbg: images.postBg,
      name: "Joe Rogan",
      message: "I’m doing stand-up tonight at the Comedy Club. Come on...",
      address: "Boston, MA United States 245 Friends",
      time: "7:01 AM",
      count: "10",
    },
    {
      img: images.man3,
      imgbg: images.backimage10,
      status:false,
      commentLength:2,
      name: "Lexi Reegan",
      message: "Any good movies on Netflix or Amazon Prime?",
      address: "Boston, MA United States 245 Friends",
      time: "JAN 12",
      count: "14",
    },
    {
      img: images.man4,
      imgbg: images.postBg,
      name: "Jenny",
      message:
        "I think that people should be more kind to one another. Just saying...",
      time: "JAN 12",
      address: "Boston, MA United States 245 Friends",
      //   count: "2",
    },
    {
      img: images.man5,
      imgbg: images.postBg,
      name: "Todd Mason",
      message: "Who wants to meet up and grab a drink? On me!",
      address: "Boston, MA United States 245 Friends",
      time: "JAN 11",
      count: "7",
    },
    {
      img: images.man6,
      imgbg: images.postBg,
      name: "Lucas",
      message:
        "Finished my latest track. I’ll post it here when it’s up. Peace!",
        address: "Boston, MA United States 245 Friends",
      time: "JAN 11",
      count: "453",
    },
    {
      img: images.man7,
      imgbg: images.postBg,
      name: "Holly",
      address: "Boston, MA United States 245 Friends",
      message:
        "I’m learning to speak Spanish at home on my spare time. So far so...",
      time: "JAN 10",
      count: "10",
    },
    {
      img: images.man8,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    },
    {
      img: images.man8,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    },
  ];

  const renderChatList = ({ item, index }) => {
    return (
      <FriendList
        disabled={false}
        onPress={() =>
          navigation.navigate("Post", {
            item: item,
          })
        }
        item={item}
      />
    );
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <Spacer height={7} />
      <View style={{ paddingHorizontal: 20 }}>
        <TopHeader
          onPressNotification={() => navigation.navigate("Notifications")}
          onPressSetting={() => navigation.navigate("Settings")}
        />
        <Spacer height={20} />

        <TopBar 
        topBarData={topBarData}
        activeBar={activeBar} setActiveBar={setActiveBar} />
      </View>
      <Spacer height={10} />
      <View>
        <FlatList
          data={
            activeBar == "My Updates"
              ? chatList.filter((item) => item.update)
              : chatList
          }
          contentContainerStyle={{
            gap: 5,
          }}
          renderItem={renderChatList}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
