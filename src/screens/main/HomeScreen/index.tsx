import React, { useEffect, useState, version } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import { Spacer } from "../../../components/Spacer";
import TopHeader from "../../../components/TopHeader";
import TopBar from "../../../components/TopBar";
import FriendList from "./FriendList";
import { images } from "../../../assets/images";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { setIsScroll } from "../../../redux/reducers/authReducer";
import { scale, verticalScale } from "react-native-size-matters";

const HomeScreen = () => {
  const navigation: any = useNavigation();
  const [activeBar, setActiveBar] = useState("Friends");
     const dispatch=useDispatch()
     const isSroll=useSelector(state=>state.auth)?.isScroll


  const topBarData=[
    "Friends",
    "My Updates"
  ]

 
  const chatList = [
    {
      img: images.defimg2,
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
      img: images.defimg1,
      imgbg: images.postBg,
      name: "Joe Rogan",
      message: "I’m doing stand-up tonight at the Comedy Club. Come on...",
      address: "Boston, MA United States 245 Friends",
      time: "7:01 AM",
      count: "10",
    },
    {
      img: images.defimg,
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
      img: images.defimg2,
      imgbg: images.postBg,
      name: "Jenny",
      message:
        "When there is no comment count on a status update the text goes further.",
      time: "JAN 12",
      address: "Boston, MA United States 245 Friends",
      //   count: "2",
    },
    {
      img: images.defimg1,
      imgbg: images.postBg,
      name: "Todd Mason",
      message: "Who wants to meet up and grab a drink? On me!",
      address: "Boston, MA United States 245 Friends",
      time: "JAN 11",
      count: "7",
    },
    {
      img: images.defimg,
      imgbg: images.postBg,
      name: "Lucas",
      message:
        "Finished my latest track. I’ll post it here when it’s up. Peace!",
        address: "Boston, MA United States 245 Friends",
      time: "JAN 11",
      count: "453",
    },
    {
      img: images.defimg2,
      imgbg: images.postBg,
      name: "Holly",
      address: "Boston, MA United States 245 Friends",
      message:
        "I’m learning to speak Spanish at home on my spare time. So far so...",
      time: "JAN 10",
      count: "10",
    },
    {
      img: images.defimg1,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    },
    {
      img: images.defimg2,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    },
    {
      img: images.defimg2,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    }, {
      img: images.defimg1,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "At the laundry mat. Missing my washing machine days...",
      time: "JAN 10",
      count: "3",
    }, {
      img: images.defimg,
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
  const onScroll = async  (x: any) => {
    const xPos =
      x.nativeEvent?.contentOffset?.y < 0 ? 0 : x.nativeEvent?.contentOffset?.y;
    const current = Math.floor(xPos / 60);
    console.log("cdlncldc",current)

    dispatch(setIsScroll(current))
 
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <Spacer height={7} />
     
          <View >
            <View style={{paddingHorizontal:scale(15)}}>
            <TopHeader
            onPressNotification={() => navigation.navigate("Notifications")}
            onPressSetting={() => navigation.navigate("Settings")}
          />

            </View>
         
          <Spacer height={verticalScale(15)} />
  
          <TopBar 
          topBarData={topBarData}
          activeBar={activeBar} setActiveBar={setActiveBar} />
        </View>
     
      <Spacer height={10} />
      {/* <View > */}
        <FlatList
        // style={{paddingHorizontal:10}}
        onScroll={onScroll}
          data={
            activeBar == "My Updates"
              ? chatList.filter((item) => item.update)
              : chatList
          }
          contentContainerStyle={{
            gap: 7,
          }}
          renderItem={renderChatList}
        />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
