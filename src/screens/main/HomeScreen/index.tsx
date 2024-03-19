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
  StatusBar,
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
  const [activeBar, setActiveBar] = useState("Following");
     const dispatch=useDispatch()
     const isSroll=useSelector(state=>state.auth)?.isScroll


  const topBarData=[
    "Following",
    "Favorites"
  ]

 
  const chatList = [
    {
      img: images.defimage100,
      imgbg: images.postBg,
      postimg: images.defimage200,
      address: "Boston, MA United States 245 Friends",
      name: "Carmen Electra",
      message:
        "What a wonderful night I had at the Grammy Awards.",
      time: "2 minutes ago",
      unread: "24",
      
      update: true,
    },
    {
      img: images.defimg1,
      imgbg: images.postBg,
      name: "Mike O’Dea",
      message: "I will be adding more emoji reactions to updates for you. I am updating as fa",
      address: "Boston, MA United States 245 Friends",
      time: "Yesterday",
      unread: "5",
    },
    {
      img: images.defimg,
      imgbg: images.backimage10,
      status:false,
      commentLength:2,
      name: "Lexi Reegan",
      message: "Wolf of Wall Street ranks #1 movie in USA for the 6th week in a row.",
      address: "Boston, MA United States 245 Friends",
      time: "Yesterday",
      unread: "5",
    },
  
   


{
      img: images.defimg1,
      imgbg: images.postBg,
      name: "Lex Reynolds",
      address: "Boston, MA United States 245 Friends",
      message: "Wolf of Wall Street ranks #1 movie in USA for the ",
      time: "Yesterday",
      postimg: images.defimage300,

      unread: "5",
    },
     {
      img: images.defimg,
      imgbg: images.postBg,
      name: "Joey D",
      address: "Boston, MA United States 245 Friends",
      message: "Wolf of Wall Street ranks #1 movie in USA for the 6th week in a row.",
      time: "Yesterday",
      unread: "5",
    },
  ];

  const renderChatList = ({ item, index }) => {
    return (
      <FriendList
        disabled={false}
        onPress={() =>
         
          navigation.navigate("OthersProfile", {
            item: item,
          })
        }
        item={item}
      />
    );
  };
  // const onScroll = async  (x: any) => {
  //   const xPos =
  //     x.nativeEvent?.contentOffset?.y < 0 ? 0 : x.nativeEvent?.contentOffset?.y;
  //   const current = Math.floor(xPos / 60);
  //   console.log("cdlncldc",current)

  //   dispatch(setIsScroll(current))
 
  // };

  return (
    <SafeAreaView style={appStyles.main}>
      <StatusBar barStyle={"light-content"} backgroundColor={colors.black} />

      <Spacer height={7} />
     
          <View >
            <View style={{paddingHorizontal:scale(15)}}>
            <TopHeader
            onPressNotification={() => navigation.navigate("Notifications")}
            onPressSetting={() => navigation.replace("Settings")}
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
        // onScroll={onScroll}
        showsVerticalScrollIndicator={false}
          data={
            activeBar == "Favorites"
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
