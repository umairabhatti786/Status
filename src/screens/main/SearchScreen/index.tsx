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
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import { useIsFocused } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getToken } from "../../../redux/reducers/authReducer";
import { GetAllUsers } from "../../../api/ApiServices";
import CustomToast from "../../../components/CustomToast";
import axios from "axios";
import { getApiUrl } from "../../../api/Config";
import { URLS } from "../../../api/baseUrl";

const SearchScreen = ({ navigation }: any) => {
  const [activeBar, setActiveBar] = useState("all");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filterIndex, setFilterIndex] = useState<number>();
  const [activeCategory, setActiveCategory] = useState("All");
  const [filterTwo, setFilterTwo] = useState("");
  const [filterThree, setFilterThree] = useState("");
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const focused = useIsFocused();
  const token = useSelector(getToken);
  const [allUsers, setAllUsers] = useState([]);
  const [netpageUrl, setNextPageUrl] = useState();
  const [model, setModel] = useState(false);

  const topBarData = ["all", "following"];
  const filterData = [
    { value: "Online", filter: "online" },
    { value: "Nearby", filter: "new" },
    { value: "New", filter: "new" },
    { value: "Popular", filter: "popular" },
  ];

  console.log("filterTwo", filterTwo,"filterThree", filterThree);

  useEffect(() => {
    getUserData();
  }, [filterTwo, activeBar, filterThree]);
  const getUserData = () => {
    setLoading(true);
    const options = {
      method: "POST",
      url: getApiUrl(URLS.GET_ALL_USER),
      headers: {
        Authorization: "Bearer " + token,
        Accept: "application/json",
      },
      data: { filter1: activeBar, filter2: filterTwo, filter3: filterThree },
      // data: {filter: f2+"&"+f1}
    };

    axios
      .request(options)
      .then(function (response) {
        // if(response.data.result.data.length>0){
        //   const filteredUsers = response.data.result.data.filter(user => !user.blockers.length>0);
        //   setAllUsers(filteredUsers);



        // }

        // blockers
        setAllUsers(response.data.result.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        Alert.alert("Alert!", "Network Error.");
      });
    // GetAllUsers(param, token, async ({ isSuccess, response }: any) => {
    //   if (isSuccess) {
    //     // let result = JSON.parse(response);
    //     if (response.status) {
    //       setLoading(false);
    //       console.log("dataLength", response?.result?.data.length);

    //       setAllUsers(response?.result?.data);
    //     } else {
    //       setLoading(false);

    //       Alert.alert("Alert!", "Network Error.");
    //     }
    //   } else {
    //     setLoading(false);

    //     Alert.alert("Alert!", "Network Error.");
    //   }
    // });
  };

  const renderUsers = ({ item, index }) => {
    console.log("ckbdk", item.id);

    return (
      <UserList
        name={item.name}
        image={item.imageUrl}
        id={item.id}
        onPress={() =>
          navigation.navigate("OthersProfile", {
            id: item?.id,
          })
        }
        item={item}
      />
      // <FriendList item={item}/>
    );
  };

  return (
    <>
      {loading && <Loader />}

      <SafeAreaView style={appStyles.main}>
        <StatusBar barStyle={"light-content"} backgroundColor={colors.black} />

        <Spacer height={7} />

        <View>
          <View style={{ paddingHorizontal: scale(15) }}>
            <TopHeader
              isSearch={true}
              onPressNotification={() => navigation.navigate("Notifications")}
              onPressSetting={() => navigation.navigate("SearchMember")}
            />
          </View>

          <Spacer height={verticalScale(15)} />

          <TopBar
            topBarData={topBarData}
            activeBar={activeBar}
            setActiveBar={setActiveBar}
          />
        </View>

        <Spacer height={verticalScale(12)} />

        <View
          style={{
            ...appStyles.row,
            marginBottom: verticalScale(12),
            // marginLeft: scale(10),
          }}
        >
          <ScrollView
            horizontal
            style={{ paddingLeft: scale(10) }}
            showsHorizontalScrollIndicator={false}
          >
            {filterData.map((item, index) => {
              return (
                <View style={{ marginHorizontal: scale(3) }}>
                  <Button
                    onPress={() => {
                      if (model) {
                        setFilterThree(item.filter);
                        setFilterTwo("");
                      } else {
                        setFilterThree("");
                        setFilterTwo(item.filter);
                      }

                      setFilterIndex(index);
                    }}
                    height={32}
                    fontFam={"Inter-Regular"}
                    fontWeight={"400"}
                    paddingHorizontal={8}
                    size={15}
                    textColor={
                      filterIndex == index ? colors.black100 : colors.white
                    }
                    bgColor={
                      filterIndex == index ? colors.white : colors.primary
                    }
                    text={item.value}
                  />
                </View>
              );
            })}

            <Button
              onPress={() => {
                setModel(!model);

                if (model == false) {
                  if (filterIndex == undefined) {
                    setFilterTwo("model");
                    setFilterThree("");
                  } else if (filterIndex == 0) {
                    setFilterThree("new");
                    setFilterTwo("");
                  } else if (filterIndex == 1) {
                    setFilterThree("new");
                    setFilterTwo("");
                  } else if (filterIndex == 2) {
                    setFilterThree("new");
                    setFilterTwo("");
                  } else if (filterIndex == 3) {
                    setFilterThree("popular");
                    setFilterTwo("");
                  }
                } else {
                  if (filterIndex == undefined) {
                    setFilterTwo("");
                    setFilterThree("");
                  } else if (filterIndex == 0) {
                    setFilterTwo("new");
                    setFilterThree("");
                  } else if (filterIndex == 1) {
                    setFilterTwo("new");
                    setFilterThree("");
                  } else if (filterIndex == 2) {
                    setFilterTwo("new");
                    setFilterThree("");
                  } else if (filterIndex == 3) {
                    setFilterTwo("popular");
                    setFilterThree("");
                  }
                }
              }}
              height={32}
              fontFam={"Inter-Regular"}
              fontWeight={"400"}
              paddingHorizontal={8}
              size={15}
              style={{ marginHorizontal: scale(3) }}
              textColor={colors.white}
              bgColor={model ? "#48B1FF" : colors.primary}
              text={"models"}
            />
          </ScrollView>
        </View>

        {/* <Spacer height={10} /> */}
        <View>
          <FlatList
            data={allUsers}
            numColumns={3}
            style={{ marginBottom: verticalScale(155) }}
            renderItem={renderUsers}
          />
        </View>
      </SafeAreaView>

      {/* <BottomSheet bottomSheetModalRef={bottomSheetModalRef}>
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
                  />
                  <Spacer height={verticalScale(15)} />
                </>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      
      </BottomSheet> */}

      {showError && (
        <CustomToast
          showError={showError}
          setShowError={setShowError}
          bgColor={colors.red}
          text={error}
        />
      )}
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
    marginLeft: scale(3),
    marginRight: scale(20),
    flexDirection: "row",

    // paddingTop:5
  },
});
