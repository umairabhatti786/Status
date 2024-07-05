import {
  ActivityIndicator,
  Alert,
  BackHandler,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Linking,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, version, useEffect, useRef } from "react";
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
import { data, profileComments } from "../../../utils/Data";
import { s, scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import SizeBar from "../../../components/SizeBar";
import CustomModal from "../../../components/CustomModal";
import Channel from "../Channel";
import { useDispatch, useSelector } from "react-redux";
import {
  getToken,
  setDisableBottomTab,
} from "../../../redux/reducers/authReducer";
import {
  CreateComment,
  DeleteComment,
  GetAuthUser,
  GetStatus,
  GetUserComment,
} from "../../../api/ApiServices";
import NewText from "../../../components/NewText";
import FastImage from "react-native-fast-image";
import Loader from "../../../components/Loader";
import {
  AUTH,
  StorageServices,
  TOKEN,
} from "../../../utils/hooks/StorageServices";
import MessageSender from "../../../components/MessageSender";
import {
  GiphyContentType,
  GiphyDialog,
  GiphyDialogEvent,
  GiphyDialogMediaSelectEventHandler,
  GiphyMedia,
  GiphySDK,
  GiphyTheme,
  GiphyThemePreset,
} from "@giphy/react-native-sdk";

GiphySDK.configure({ apiKey: "C9JfKgGLTfcnLfvQ8O189iehEyTOq0tm" });
GiphyDialog.configure({
  mediaTypeConfig: [
    GiphyContentType.Emoji,
    GiphyContentType.Gif,
    GiphyContentType.Sticker,
    GiphyContentType.Text,
  ],
  showConfirmationScreen: true,
});
const theme: GiphyTheme = {
  preset: GiphyThemePreset.Light,
  backgroundColor: colors.black300,
  cellCornerRadius: 12,
  defaultTextColor: colors.white,
};
GiphyDialog.configure({ theme });

const ProfileScreen = () => {
  const navigation: any = useNavigation();
  const [isSideBar, setIsBar] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const focused = useIsFocused();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [userData, setUserData] = useState<any>();
  const token = useSelector(getToken);
  const [authPosts, setAuthPosts] = useState([]);
  const [giphy, setGiphy] = useState("");
  const activeBar = useSelector((state) => state.auth)?.profileActiveBar;
  const [isActiveProfile, setIsActiveProfile] = useState("Profile");
  const [counter, setCounter] = useState(0);
  const [isEditView, setIsEditView] = useState(false);
  const [imageForEdit, setImageForEdit] = useState("");
  const [postId, setPostId] = useState("");
  const flatListRefPosts: any = useRef(null);

  const dispatch = useDispatch();

  const [channelId, setIsChannelId] = useState("");
  const getChannelId = async () => {
    const userInfo = await StorageServices.getItem(AUTH);
    setIsChannelId(userInfo?.channel?.id);
  };

  console.log("UserDatatype", typeof  userData?.wallComments);
  useEffect(() => {
    setImageForEdit(imageForEdit);
  }, [isEditView]);

  useEffect(() => {
    getChannelId();
  }, []);

  useEffect(() => {
    getAuth();
    // setIsActiveProfile(activeBar);
  }, [focused]);

  useEffect(() => {
    if (focused) getUserComment();
  }, [focused]);

  useEffect(() => {
    GetPosts();
  }, [counter]);

  useEffect(() => {
    const backAction = () => {
      dispatch(setDisableBottomTab(false));
      navigation.goBack();
      console.log("goBAckData");

      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const handler: GiphyDialogMediaSelectEventHandler = (e) => {
      setGiphy(e.media.url);

      GiphyDialog.hide();
    };
    const listener = GiphyDialog.addListener(
      GiphyDialogEvent.MediaSelected,
      handler
    );
    return () => {
      listener.remove();
    };
  }, []);
  // console.log("UserData", userData?.gif);

  // useEffect(() => {
  //   if(authPosts.length){

  //     flatListRefPosts?.current?.scrollToEnd({ animated: true });
  //   }
  // }, [authPosts])

  const GetPosts = async () => {
    let userInfo = await StorageServices.getItem(AUTH);
    let token = await StorageServices.getItem(TOKEN);
    GetStatus(userInfo?.id, token, async ({ isSuccess, response }: any) => {
      console.log("data p", isSuccess);

      let result = JSON.parse(response);
      if (result.status) {
        // console.log('result?.posts',result?.posts?.data)
        let data = result?.posts?.data.reverse();
        // setPosts(data);
        setAuthPosts(data);
      } else {
        console.log(result);
        // Alert.alert("Alert!", "Something went wrong",);
        console.log("Something went wrong");
      }
    });
  };

  const delComment = async (com: any) => {
    let userInfo = await StorageServices.getItem(AUTH);
    let data = {
      commentId: com?.id,
      userId: userInfo?.id,
    };
    console.log(data);
    DeleteComment(data, token, async ({ isSuccess, response }: any) => {
      console.log("data", isSuccess);

      let result = JSON.parse(response);
      if (result.status) {
        console.log(result);
        let newComs = comments.filter(
          (c: any) => c.id != result?.comment?.commentId
        );
        setComments(newComs);
        // console.log('newComs',newComs);
        // setLoading(false);
      } else {
        // Alert.alert(result);
        // Alert.alert("Alert!", "Something went wrong");
        console.log("Something went wrong");
        // console.log(userData?.id,token);
        console.log(result);
      }
    });
  };
  const getUserComment = async () => {
    let userInfo = await StorageServices.getItem(AUTH);
    let data = {
      userId: userInfo?.id,
    };
    // console.log(userData?.id, token);
    GetUserComment(data, token, async ({ isSuccess, response }: any) => {
      console.log("data", isSuccess);

      let result = JSON.parse(response);
      if (result.status) {
        console.log(result);
        setComments(result?.comments?.data.reverse());
        // setLoading(false);
      } else {
        // Alert.alert(result);
        // Alert.alert("Alert!", "Something went wrong");
        console.log("Something went wrong");
        // console.log(userData?.id,token);
        // console.log(result)
      }
    });
  };

  const submitComment = async () => {
    let data = {
      description: comment,
      userId: userData?.id,
    };
    // console.log(data)
    setLoading2(true);
    CreateComment(data, token, async ({ isSuccess, response }: any) => {
      console.log("data", isSuccess);

      let result = JSON.parse(response);
      if (result.status) {
        setComment("");

        setComments([result.comment,...comments, ]);
        setLoading2(false);
      } else {
        // Alert.alert("Alert!", "Something went wrong");
        console.log("Something went wrong");
      }
    });
  };

  // console.log("userData", userData);

  const getAuth = () => {
    setLoading(true);
    GetAuthUser(token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        // console.log("ckdnckdnc", result?.user);

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
        // id={item?.id}
        onDelete={() => delComment(item)}
        name={item?.commentator?.name}
        image={item.commentator?.imageUrl}
        message={item?.description}
        time={item?.created_at}
        chatDate={item?.chatDate}
      />
    );
  };
  const shortenedText =
    userData?.name?.length > 20
      ? userData?.name?.substring(0, 19) + "..."
      : userData?.name;

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
                  priority: FastImage.priority.high,
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
                  text={shortenedText}
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
                  onPress={() => {
                    if (item == "Channel") {
                      dispatch(setDisableBottomTab(true));

                      navigation.navigate("AuthChannel");

                      return;
                    }
                    dispatch(setDisableBottomTab(false));

                    setIsActiveProfile(item);
                  }}
                  text={item}
                  textColor={
                    isActiveProfile == item ? colors.black : colors.white
                  }
                  height={35}
                  bgColor={
                    isActiveProfile == item ? colors.grey400 : colors.primary
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
          {isActiveProfile == "Profile" ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <View
                  style={{
                    ...appStyles.row,
                    paddingBottom: verticalScale(5),
                    paddingHorizontal: scale(10),
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

                  <View style={{ ...appStyles.row, width: "46%", }}>
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
                    width: "100%",
                    height: verticalScale(350),
                    alignSelf: "center",
                  }}
                  resizeMode="cover"
                  source={{
                    uri: userData?.imageUrl,
                    headers: { Authorization: "someAuthToken" },
                    priority: FastImage.priority.high,
                  }}
                />

                <View style={appStyles.rowjustify}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    disabled={true}
                    // onPress={onFavorite}
                    style={styles.box}
                  >
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: "#8A8A8A",
                      }}
                      source={images.star}
                      resizeMode="contain"
                    />
                    <CustomText
                      color={"#8A8A8A"}
                      size={13}
                      numberOfLines={1}
                      fontFam="Inter-Medium"
                      style={{ marginTop: scale(5) }}
                      text={"Favorite"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    // onPress={() => setIsWatchList(!isWatchList)}
                    style={styles.box}
                  >
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: colors.white,
                      }}
                      source={images.appicon}
                      resizeMode="contain"
                    />
                    <CustomText
                      color={colors.white}
                      size={13}
                      numberOfLines={1}
                      fontFam="Inter-Medium"
                      style={{ marginTop: scale(7) }}
                      text={"STATUS"}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    disabled={true}
                    // onPress={() => setIsWatchList(!isWatchList)}
                    style={styles.box}
                  >
                    <Image
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: "#8A8A8A",
                      }}
                      source={images.profilemessage}
                      resizeMode="contain"
                    />
                    <CustomText
                      color={"#8A8A8A"}
                      size={13}
                      numberOfLines={1}
                      fontFam="Inter-Medium"
                      style={{ marginTop: scale(5) }}
                      text={"Message"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ paddingHorizontal: scale(10) }}>
                  <View
                    style={{
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
                  <View style={appStyles.rowjustify}>
                    {userData?.gif1 && (
                      <View style={styles.gifhyContainer}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          source={{ uri: userData?.gif1 }}
                        />

                        <View
                          style={{ position: "absolute", right: 5, bottom: 0 }}
                        >
                          <Image
                            style={{
                              width: 100,
                              height: 30,
                              alignSelf: "flex-end",
                            }}
                            source={images.giphy}
                            resizeMode="contain"
                          />
                        </View>
                      </View>
                    )}
                    {userData?.gif2 && (
                      <View style={styles.gifhyContainer}>
                        <Image
                          style={{ width: "100%", height: "100%" }}
                          source={{ uri: userData?.gif2 }}
                        />
                        <View
                          style={{ position: "absolute", right: 5, bottom: 0 }}
                        >
                          <Image
                            style={{
                              width: 100,
                              height: 30,
                              alignSelf: "flex-end",
                            }}
                            source={images.giphy}
                            resizeMode="contain"
                          />
                        </View>
                      </View>
                    )}
                  </View>
                  {
                    userData?.wallComments&&(
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
                        onChangeText={(text) => setComment(text)}
                        value={comment}
                      />
  
                      <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={submitComment}
                      >
                        {loading2 ? (
                          <ActivityIndicator
                            size={"small"}
                            color={colors.white}
                          />
                        ) : (
                          <Image
                            style={{ tintColor: colors.gray200 }}
                            source={images.send}
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    )
                  }

               

                  <FlatList
                    data={comments}
                    nestedScrollEnabled={true}
                    contentContainerStyle={{
                      gap: 7,
                    }}
                    keyExtractor={(item) => item}
                    renderItem={renderChatList}
                  />
                </View>
              </View>
            </ScrollView>
          ) : (
            <>
              <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : null}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100} // Adjust this value as needed
              >
                <View
                  style={{
                    flex: 1,
                    paddingTop: verticalScale(10),
                  }}
                >
                  <Channel
                    userData={userData}
                    channelId={channelId}
                    token={token}
                    authPosts={authPosts}
                    setAuthPosts={setAuthPosts}
                    counter={counter}
                    setCounter={setCounter}
                    isActiveProfile={isActiveProfile}
                    isEditView={isEditView}
                    setIsEditView={setIsEditView}
                    imageForEdit={imageForEdit}
                    setImageForEdit={setImageForEdit}
                    setPostId={setPostId}
                    flatListRefPosts={flatListRefPosts}
                  />

                  <View>
                    <MessageSender
                      onGiphyPress={() => GiphyDialog.show()}
                      // bottom={verticalScale(15)}
                      sendImage={images.simplesend}
                      channelId={channelId}
                      giphy={giphy}
                      setGiphy={setGiphy}
                      token={token}
                      setAuthPosts={setAuthPosts}
                      authPosts={authPosts}
                      isEditView={isEditView}
                      setIsEditView={setIsEditView}
                      imageForEdit={imageForEdit}
                      setImageForEdit={setImageForEdit}
                      postId={postId}
                      setCounter={setCounter}
                      counter={counter}
                    />
                  </View>
                </View>
              </KeyboardAvoidingView>
            </>
          )}
        </SafeAreaView>
      )}
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

  gifhyContainer: {
    width: "48%",
    height: windowHeight / 4.3,
    overflow: "hidden",
    borderRadius: scale(5),
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    width: "33%",
    height: 75,
    backgroundColor: colors.black300,
    justifyContent: "center",
  },
});
