import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, version, useEffect } from "react";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import MessagesComponent from "../../../components/MessageComponent";
import { profileComments } from "../../../utils/Data";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import SizeBar from "../../../components/SizeBar";
import CustomModal from "../../../components/CustomModal";
import Channel from "../Channel";
import { useSelector } from "react-redux";
import { getToken } from "../../../redux/reducers/authReducer";
import { GetAuthUser } from "../../../api/ApiServices";
import NewText from "../../../components/NewText";
import FastImage from "react-native-fast-image";
import Loader from "../../../components/Loader";

const ProfileScreen = () => {
  const navigation: any = useNavigation();
  const [isSideBar, setIsBar] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [isActiveProfile, setIsActiveProfile] = useState(0);
  const focused = useIsFocused();

  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const token = useSelector(getToken);

  useEffect(() => {
    getAuth();
  }, [focused]);

  console.log("userDatauserData", userData?.imageUrl);

  const getAuth = () => {
    setLoading(true);
    GetAuthUser(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        console.log("ckdnckdnc", result?.user);

        if (result.status) {
          setLoading(false);
          setUserData(result?.user);
          // setNextPageUrl(!result?.users?.next_page_url?true:false)
        } else {
          setLoading(false);

          // Alert.alert("Alert!", "Something wrong");
        }
      } else {
        setLoading(false);

        Alert.alert("Alert!", "Network Error.");
      }
    });
  };

  const renderChatList = ({ item }: any) => {
    return (
      <MessagesComponent
        comments={true}
        profile={true}
        name={item?.name}
        image={item?.img}
        message={item?.message}
        time={item?.time}
        chatDate={item?.chatDate}
      />
    );
  };
  return (
    <>
      {loading ? (
        <View style={appStyles.main}>
          <Loader />
        </View>
      ) : (
        <SafeAreaView style={appStyles.main}>
          <StatusBar backgroundColor="#000" barStyle="light-content" />

          <View style={appStyles.rowjustify}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: scale(20),
                paddingVertical: verticalScale(5),
              }}
            >
              <FastImage
                style={{
                  width: scale(37),
                  height: scale(37),
                  borderRadius: 999,
                }}
                source={{
                  uri: userData?.imageUrl,
                  headers: { Authorization: "someAuthToken" },
                  priority: FastImage.priority.normal,
                }}
              />
              <View
                style={{
                  marginHorizontal: scale(7),
                  paddingBottom: verticalScale(5),
                  width: windowWidth / 2.5,
                }}
              >
                <NewText
                  color={colors.white}
                  size={18}
                  numberOfLines={1}
                  style={{ marginTop: verticalScale(5) }}
                  text={userData?.name}
                />
                <NewText
                  // fontWeight="700"
                  color={colors.white}
                  size={14}
                  style={{ marginTop: verticalScale(-3) }}
                  text={`${userData?.followers_count} Followers`}
                />
              </View>
            </View>
            <View style={{ ...appStyles.row, paddingRight: scale(20) }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() =>
                  navigation.navigate("EditProfile", { data: userData })
                }
              >
                <NewText
                  color={colors.white}
                  size={16}
                  fontFam="Poppins-SemiBold"
                  fontWeight="700"
                  textDecorationLine={"underline"}
                  // style={{marginTop:verticalScale(5)}}
                  text={"Edit Profile"}
                />
              </TouchableOpacity>
            </View>

            {/* <CustomText color={"transparent"} size={18} text={"sss"} /> */}
          </View>

          <View
            style={{
              ...appStyles.rowjustify,
              paddingHorizontal: scale(10),
              marginBottom: verticalScale(5),
            }}
          >
            {["Profile", "Channel"].map((item, index) => {
              return (
                <CustomButton
                  width={"48.5%"}
                  onPress={() => setIsActiveProfile(index)}
                  text={item}
                  textColor={
                    isActiveProfile == index ? colors.black : colors.white
                  }
                  height={35}
                  bgColor={
                    isActiveProfile == index ? colors.grey400 : colors.primary
                  }
                  borderRadius={8}
                />
              );
            })}

            {/* <CustomButton
        width={"48.5%"}
        borderRadius={8}
        text="Channel"
        height={35}
      /> */}
          </View>
          {isActiveProfile == 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <View
                  style={{
                    ...appStyles.row,
                    paddingBottom: verticalScale(5),
                    paddingHorizontal: scale(20),
                  }}
                >
                  <View style={{ ...appStyles.row, width: "46%" }}>
                    <Image
                      style={{
                        width: scale(16),
                        height: scale(16),
                      }}
                      source={images.locationicon}
                    />
                    <CustomText
                      color={colors.grey300}
                      size={15}
                      numberOfLines={1}
                      fontFam="Inter-Medium"
                      style={{ marginLeft: scale(8) }}
                      text={userData?.location}
                    />
                  </View>
                  <Spacer width={scale(22)} />

                  <View style={{ ...appStyles.row, width: "48%" }}>
                    <Image
                      style={{
                        width: scale(20),
                        height: scale(20),
                      }}
                      source={images.bagicon}
                    />
                    <CustomText
                      color={colors.grey300}
                      size={15}
                      numberOfLines={1}
                      fontFam="Inter-Medium"
                      style={{ marginLeft: scale(8), marginRight: scale(10) }}
                      text={userData?.occupation}
                    />
                  </View>
                </View>
                <FastImage
                  style={{
                    width: "94%",
                    height: verticalScale(350),
                    alignSelf: "center",
                  }}
                  resizeMode="cover"
                  source={{
                    uri: userData?.imageUrl,
                    headers: { Authorization: "someAuthToken" },
                    priority: FastImage.priority.normal,
                  }}
                />
                <View style={{ paddingHorizontal: scale(10) }}>
                  <View
                    style={{
                      backgroundColor: colors.primary,
                      borderBottomRightRadius: scale(5),
                      borderBottomLeftRadius: scale(5),
                      paddingLeft: scale(10),
                      paddingVertical: verticalScale(10),
                    }}
                  >
                    {userData?.bio && (
                      <NewText
                        color={colors.white}
                        lineHeight={20}
                        size={15}
                        text={userData?.bio}
                      />
                    )}

                    {userData?.link && (
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => {
                          Linking.openURL(userData?.link);
                        }}
                        style={{
                          ...appStyles.row,
                          marginTop: verticalScale(3),
                        }}
                      >
                        <Image
                          style={{
                            width: scale(18),
                            height: scale(18),
                          }}
                          resizeMode="contain"
                          source={images.link}
                        />
                        <NewText
                          color={colors.grey300}
                          size={14}
                          fontFam="Inter-Medium"
                          style={{ marginLeft: scale(8) }}
                          text={userData?.link}
                        />
                      </TouchableOpacity>
                    )}
                  </View>

                  {/* <View
             style={{
               ...appStyles.rowjustify,
               marginVertical: verticalScale(10),
             }}
           >
             <Image
               style={{
                 width: "48.5%",
                 height: windowHeight / 4.2,
                 borderRadius: 8,
               }}
               source={images.defimg400}
             />
             <Image
               style={{
                 width: "48.5%",
                 height: windowHeight / 4.2,
                 borderRadius: 8,
               }}
               source={images.defimage4}
             />
           </View> */}

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingHorizontal: 20,
                      borderWidth: 1,
                      borderColor: colors.gray200,
                      // paddingVertical:verticalScale(5),
                      borderRadius: 10,
                      marginVertical: verticalScale(10),
                    }}
                  >
                    <TextInput
                      style={{
                        color: colors.gray200,
                        width: "90%",
                        fontSize: verticalScale(15),
                      }}
                      placeholderTextColor={colors.gray200}
                      placeholder="Write on my wall"
                    />
                    <Image
                      style={{ tintColor: colors.gray200 }}
                      source={images.send}
                    />
                  </View>

                  {/* <FlatList
             data={profileComments}
             contentContainerStyle={{
               gap: 7,
             }}
             renderItem={renderChatList}
           /> */}
                </View>
              </View>
            </ScrollView>
          ) : (
            <>
              <View
                style={{
                  width: "100%",
                  height: windowHeight,
                  paddingTop: verticalScale(10),
                }}
              >
                <Channel userData={userData} />
              </View>
            </>
          )}
        </SafeAreaView>
      )}

      {/* 
      <CustomModal
          isModalVisible={isBlockModal}
          setModalVisible={setIsBlockModal}
      >

<View
                style={{ alignItems: "center" }}>
                <View
                    style={{
                        width: "85%",
                        backgroundColor: colors.white,
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        borderRadius:scale(15)
                    }}
                >

<CustomText
                        text={"Block Carmen Electra?!"}
                        size={17}
                        fontWeight='700'
                        fontFam="Poppins-Bold"
                        color={colors.black}
                        style={{ textAlign: "center" }}
                    />

<CustomText
                        text={"This user will no longer be able to follow, message, or see your profile."}
                        size={16}
                        color={colors.black}
                        style={{ textAlign: "center",marginVertical:verticalScale(10) }}
                    />
                    <View style={{...appStyles.row,alignSelf:"center"}}>

                    <CustomButton
          text={"Cancel"}
          // width={windowWidth/3.5}
          size={16}
          height={verticalScale(43)}
          borderRadius={scale(20)}
          paddingHoriontal={scale(25)}
          onPress={()=>setIsFollow(!isFollow)}
          // fontWeight={"600"}
          fontFam={"Poppins-Regular"}
          bgColor={"#C4C4C4"}
          textColor={colors.black}
          />
          <Spacer width={scale(20)}/>

          <CustomButton
          text={"BLOCK"}
          // width={windowWidth/3.5}
          size={16}
          height={verticalScale(43)}
          borderRadius={scale(20)}
          paddingHorizontal={scale(25)}
          // onPress={()=>setIsFollow(!isFollow)}
          // fontWeight={"600"}
          fontFam={"Poppins-Regular"}
          bgColor={"#277DD2"}
          textColor={colors.white}
          />
  

                    </View>
                    
                </View>
            </View>



      </CustomModal> */}
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black100,
    alignItems: "center",
    paddingBottom: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth / 2,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  flex: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
});
