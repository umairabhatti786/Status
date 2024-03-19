import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import CustomSearch from "../../../components/CustomSearch";
import { Spacer } from "../../../components/Spacer";
import TopBar from "../../../components/TopBar";
import BottomSheet from "../../../components/BottomSheet";

import TopHeader from "../../../components/TopHeader";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import UserList from "./UserList";
import { scale, verticalScale } from "react-native-size-matters";
import FilterCategory from "./FilterCategory";
import CustomText from "../../../components/CustomText";

const SearchScreen = ({ navigation }) => {
  const [activeBar, setActiveBar] = useState("All");
  const [activeFilter, setActiveFilter] = useState(0);
  const bottomSheetModalRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("Bodybuilder");
  // const [setSelectedCategory,setSelectedCategory]=useState("")
  // const [setSelectedCategory, setSelectedCategory] = useState("All");

  const snapPoints = useMemo(() => ["20%", "80%"], []);
  const handleClosePress = () => bottomSheetModalRef?.current?.close();
  // const handleOpenress = () => {
  //   bottomSheetRef?.current?.expand();
  // };

  let profileCategories = [
    "Actor",
    "Athlete",
    "Bodybuilder",
    "Comedian",
    "Entrepreneur",
    "Fighter",
    "Filmmaker",
    "Influencer",
    "Model",
    "Musician",
    "News",
    "Podcaster",
    "Other",
  ];

  const topBarData = ["All", "Following"];

  const filterData = ["Online", "Nearby", "New", "Popular"];
  const handleSheetChanges = useCallback((index) => {
    if (index == 0) {
      handleClosePress();
    }
  }, []);

  const userData = [
    // online
    { name: "MIke O’Dea", img: images.defimage9, online: true, isFollow: true },
    {
      name: "Lexi Reegan",
      img: images.defimage10,
      online: true,
      isFollow: false,
    },
    {
      name: "Eric Broadway",
      img: images.defimage11,
      online: true,
      isFollow: true,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage12,
      online: true,
      isFollow: false,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage13,
      online: true,
      isFollow: true,
    },
    { name: "T Smith", img: images.defimage14, online: true, isFollow: false },
    {
      name: "Lexi Reegan",
      img: images.defimage15,
      online: true,
      isFollow: true,
    },
    {
      name: "Eric Broadway",
      img: images.defimage16,
      online: true,
      isFollow: false,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage17,
      online: true,
      isFollow: true,
    },
    { name: "T Smith", img: images.defimage18, online: true, isFollow: false },
    {
      name: "Lexi Reegan",
      img: images.defimage19,
      online: true,
      isFollow: true,
    },
    { name: "T Smith", img: images.defimage20, online: true, isFollow: false },

    /// nearby
    {
      name: "MIke O’Dea",
      img: images.defimage23,
      nearby: "10mi",
      isFollow: true,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage22,
      nearby: "10mi",
      isFollow: false,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage21,
      nearby: "10mi",
      isFollow: true,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage9,
      nearby: "10mi",
      isFollow: false,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage10,
      nearby: "10mi",
      isFollow: true,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage11,
      nearby: "10mi",
      isFollow: false,
    },
    { name: "T Smith", img: images.defimage12, nearby: "10mi", isFollow: true },
    {
      name: "MIke O’Dea",
      img: images.defimage13,
      nearby: "10mi",
      isFollow: false,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage14,
      nearby: "10mi",
      isFollow: true,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage15,
      nearby: "10mi",
      isFollow: false,
    },
    { name: "T Smith", img: images.defimage16, nearby: "10mi", isFollow: true },
    {
      name: "Lexi Reegan",
      img: images.defimage17,
      nearby: "10mi",
      isFollow: false,
    },

    // new
    {
      name: "T Smith",
      img: images.defimage18,
      new: true,
      online: true,
      isFollow: true,
    },
    {
      name: "T Smith",
      img: images.defimage19,
      new: true,
      online: true,
      isFollow: false,
    },
    {
      name: "Eric Broadway",
      img: images.defimage20,
      new: true,
      online: true,
      isFollow: true,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage21,
      new: true,
      online: true,
      isFollow: false,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage22,
      new: true,
      online: true,
      isFollow: true,
    },
    { name: "MIke O’Dea", img: images.defimage23, new: true, isFollow: false },
    { name: "MIke O’Dea", img: images.defimage9, new: true, isFollow: true },
    { name: "Lexi Reegan", img: images.defimage10, new: true, isFollow: false },
    { name: "MIke O’Dea", img: images.defimage11, new: true, isFollow: true },
    { name: "Lexi Reegan", img: images.defimage12, new: true, isFollow: false },
    {
      name: "Eric Broadway",
      img: images.defimage13,
      new: true,
      isFollow: true,
    },
    { name: "Lexi Reegan", img: images.defimage14, new: true, isFollow: false },
    { name: "MIke O’Dea", img: images.defimage15, new: true, isFollow: true },

    // popular

    {
      name: "MIke O’Dea",
      img: images.defimage16,
      online: true,
      popular: "205k",
      isFollow: true,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage17,
      online: true,
      popular: "205k",
      isFollow: false,
    },
    {
      name: "Eric Broadway",
      img: images.defimage18,
      online: true,
      popular: "205k",
      isFollow: true,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage19,
      online: true,
      popular: "205k",
      isFollow: false,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage20,
      popular: "205k",
      isFollow: true,
    },
    {
      name: "Eric Broadway",
      img: images.defimage21,
      popular: "205k",
      isFollow: false,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage22,
      popular: "205k",
      isFollow: true,
    },
    {
      name: "Eric Broadway",
      img: images.defimage23,
      popular: "205k",
      isFollow: true,
    },
    {
      name: "MIke O’Dea",
      img: images.defimage9,
      popular: "205k",
      isFollow: false,
    },
    {
      name: "Lexi Reegana",
      img: images.defimage10,
      popular: "205k",
      isFollow: true,
    },
    {
      name: "Eric Broadway",
      img: images.defimage11,
      popular: "205k",
      isFollow: false,
    },
    {
      name: "Lexi Reegan",
      img: images.defimage12,
      popular: "205k",
      isFollow: true,
    },
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
    <>
      <SafeAreaView style={appStyles.main}>
        <StatusBar barStyle={"light-content"} backgroundColor={colors.black} />

        <Spacer height={7} />

        <View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <TopHeader
              isSearch={true}
              onPressNotification={() => navigation.navigate("Notifications")}
              onPressSetting={() => navigation.replace("SearchMember")}
            />
          </View>

          <Spacer height={verticalScale(15)} />

          <TopBar
            topBarData={topBarData}
            activeBar={activeBar}
            setActiveBar={setActiveBar}
          />
        </View>

        <Spacer height={10} />

        <View
          style={{
            ...appStyles.row,
            marginBottom: verticalScale(8),
            // marginLeft: scale(10),
          }}
        >
          <ScrollView
          horizontal
          style={{paddingLeft:scale(10)}}
          >

          {filterData.map((item, index) => {
            return (
              <View style={{ marginHorizontal: scale(3) }}>
                <CustomButton
                  onPress={() => {
                    setActiveFilter(index);
                  }}
                  height={29}
                  fontFam={"Inter-Regular"}
                  fontWeight={"400"}
                  paddingHorizontal={8}
                  size={15}
                  textColor={
                    activeFilter == index ? colors.black100 : colors.white
                  }
                  bgColor={
                    activeFilter == index ? colors.white : colors.primary
                  }
                  text={item}
                />
              </View>
            );
          })}
          <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => {
            bottomSheetModalRef.current.present();
          }}
        >
          <CustomText
            text={activeCategory}
            color={colors.white}
            fontWeight={"600"}
            size={15}
            fontFam={"Poppins-Medium"}
          />
          <Spacer width={10}/>
          <Image
          style={{width:scale(15),height:scale(15)}}
          source={images.arrowdown}
          />
        </TouchableOpacity>
        </ScrollView>

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
            style={{ marginBottom: verticalScale(155) }}
            renderItem={renderUsers}
          />
        </View>
      </SafeAreaView>

      <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
        <View style={{ paddingHorizontal: scale(20) }}>
          <FlatList
            data={profileCategories}
            nestedScrollEnabled={true}
            renderItem={({ item, index }) => {
              return (
                <>
                  <FilterCategory
                    item={item}
                    onSelectCatrgory={() => {
                      setActiveCategory(item);
                      bottomSheetModalRef?.current?.dismiss();

                    }}
                    selectedCategory={activeCategory}
                    // setSelectedCategory={setSelectedCategory}
                  />
                  <Spacer height={verticalScale(15)} />
                </>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        {/* <SelectLocation
          navigation={navigation}
          handleSheetClosePress={handleSheetClosePress}
          LOCATION={LOCATION1}
        /> */}
      </BottomSheet>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  categoryBtn: {
    height: verticalScale(29),
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    // minWidth:scale(50),
    paddingHorizontal: scale(8),
    borderRadius: scale(8),
    marginLeft:scale(3),
    marginRight:scale(20),
    flexDirection:"row"

    // paddingTop:5
  },
});
