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
    <View
      style={{
        flex: 1,
        backgroundColor: colors.black,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: colors.white, fontSize: 25 }}>Search</Text>
    </View>
  );
};

export default SearchScreen;
