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
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import CustomSearch from "../../../components/CustomSearch";
import { Spacer } from "../../../components/Spacer";
import TopBar from "../../../components/TopBar";
import TopHeader from "../../../components/TopHeader";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import UserList from "./UserList";

const SearchScreen = () => {
  const [activeBar, setActiveBar] = useState("Friends");
  const [activeFilter, setActiveFilter] = useState(0);

  const topBarData = ["All", "Friends"];

  const filterData = ["Online", "Nearby", "New", "Popular"];

  const userData = [
    // online
    { name: "MIke O’Dea", img: images.defimage9, online: true },
    { name: "Lexi Reegan", img: images.defimage10, online: true },
    { name: "Eric Broadway", img: images.defimage11, online: true },
    { name: "Lexi Reegan", img: images.defimage12, online: true },
    { name: "MIke O’Dea", img: images.defimage13, online: true },
    { name: "T Smith", img: images.defimage14, online: true },
    { name: "Lexi Reegan", img: images.defimage15, online: true },
    { name: "Eric Broadway", img: images.defimage16, online: true },
    { name: "Lexi Reegan", img: images.defimage17, online: true },
    { name: "T Smith", img: images.defimage18, online: true },
    { name: "Lexi Reegan", img: images.defimage19, online: true },
    { name: "T Smith", img: images.defimage20, online: true },

    /// nearby
    {
      name: "MIke O’Dea",
      img: images.defimage23,
      online: true,
      nearby: "10mi",
    },
    {
      name: "Lexi Reegan",
      img: images.defimage22,
      online: true,
      nearby: "10mi",
    },
    {
      name: "Lexi Reegan",
      img: images.defimage21,
      online: true,
      nearby: "10mi",
    },
    { name: "MIke O’Dea", img: images.defimage9, online: true, nearby: "10mi" },
    { name: "MIke O’Dea", img: images.defimage10, nearby: "10mi" },
    { name: "Lexi Reegan", img: images.defimage11, nearby: "10mi" },
    { name: "T Smith", img: images.defimage12, nearby: "10mi" },
    { name: "MIke O’Dea", img: images.defimage13, nearby: "10mi" },
    { name: "Lexi Reegan", img: images.defimage14, nearby: "10mi" },
    { name: "MIke O’Dea", img: images.defimage15, nearby: "10mi" },
    { name: "T Smith", img: images.defimage16, nearby: "10mi" },
    { name: "Lexi Reegan", img: images.defimage17, nearby: "10mi" },

    // new
    { name: "T Smith", img: images.defimage18, new: true, online: true },
    { name: "T Smith", img: images.defimage19, new: true, online: true },
    { name: "Eric Broadway", img: images.defimage20, new: true, online: true },
    { name: "MIke O’Dea", img: images.defimage21, new: true, online: true },
    { name: "Lexi Reegan", img: images.defimage22, new: true, online: true },
    { name: "MIke O’Dea", img: images.defimage23, new: true },
    { name: "MIke O’Dea", img: images.defimage9, new: true },
    { name: "Lexi Reegan", img: images.defimage10, new: true },
    { name: "MIke O’Dea", img: images.defimage11, new: true },
    { name: "Lexi Reegan", img: images.defimage12, new: true },
    { name: "Eric Broadway", img: images.defimage13, new: true },
    { name: "Lexi Reegan", img: images.defimage14, new: true },
    { name: "MIke O’Dea", img: images.defimage15, new: true },

    // popular

    {
      name: "MIke O’Dea",
      img: images.defimage16,
      online: true,
      popular: "205k",
    },
    {
      name: "Lexi Reegan",
      img: images.defimage17,
      online: true,
      popular: "205k",
    },
    {
      name: "Eric Broadway",
      img: images.defimage18,
      online: true,
      popular: "205k",
    },
    {
      name: "Lexi Reegan",
      img: images.defimage19,
      online: true,
      popular: "205k",
    },
    { name: "MIke O’Dea", img: images.defimage20, popular: "205k" },
    { name: "Eric Broadway", img: images.defimage21, popular: "205k" },
    { name: "MIke O’Dea", img: images.defimage22, popular: "205k" },
    { name: "Eric Broadway", img: images.defimage23, popular: "205k" },
    { name: "MIke O’Dea", img: images.defimage9, popular: "205k" },
    { name: "Lexi Reegana", img: images.defimage10, popular: "205k" },
    { name: "Eric Broadway", img: images.defimage11, popular: "205k" },
    { name: "Lexi Reegan", img: images.defimage12, popular: "205k" },
  ];

  console.log("UserLoeng", userData.length);

  const renderUsers = ({ item, index }) => {
    console.log("ckbdk", index);

    return (
      <UserList item={item} />
      // <FriendList item={item}/>
    );
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <Spacer height={7} />
      <View style={{ paddingHorizontal: 20 }}>
        <TopHeader />
        <Spacer height={20} />

        <TopBar
          topBarData={topBarData}
          activeBar={activeBar}
          setActiveBar={setActiveBar}
        />
      </View>
      <Spacer height={10} />
      <CustomSearch />
      <View style={{ ...appStyles.row, marginVertical: 17 }}>
        {filterData.map((item, index) => {
          return (
            <View style={{ marginRight: 7 }}>
              <CustomButton
                onPress={() => setActiveFilter(index)}
                height={33}
                paddingHorizontal={10}
                size={15}
                textColor={
                  activeFilter == index ? colors.black100 : colors.white
                }
                bgColor={activeFilter == index ? colors.white : colors.primary}
                text={item}
              />
            </View>
          );
        })}
      </View>

      {/* <Spacer height={10} /> */}
      <View>
        <FlatList
          data={
            activeFilter == 0
              ? userData.filter((item) => item.online)
              : activeFilter == 1
              ? userData.filter((item) => item.nearby)
              : activeFilter == 2
              ? userData.filter((item) => item.new)
              : activeFilter == 3
              ? userData.filter((item) => item.popular)
              : userData
          }
          numColumns={3}
          style={{ marginBottom: 210 }}
          renderItem={renderUsers}
        />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
