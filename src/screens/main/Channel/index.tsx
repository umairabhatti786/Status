import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState, version } from "react";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import MessageSender from "../../../components/MessageSender";
import moment from "moment";
import { AUTH, StorageServices } from "../../../utils/hooks/StorageServices";
import FastImage from "react-native-fast-image";
import NewText from "../../../components/NewText";
import ImageViewModal from "../../../components/ImageViewModal";

const Channel = ({
  hideSendMessage,
  userData,
  posts,
  channelId,
  token,
  authPosts,
  setAuthPosts,
}: any) => {
  const route: any = useRoute();
  const item = route?.params?.item;
  const navigation: any = useNavigation();
  const [isViewImage, setIsViewImage] = useState(false);

  const [imageObject, setImageObject] = useState({});
  const [isSideBar, setIsBar] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const [isBlockModal, setIsBlockModal] = useState(false);
  const [isReportModal, setIsReportModal] = useState(false);
  const [isUnfollowModal, setIsUnfollowModal] = useState(false);
  console.log("userData", item?.gif);

  return (
    <>
      <View style={appStyles.main}>
        <ImageBackground
          style={{ width: "100%", height: windowHeight }}
          source={userData?.wallpaperUrl ? { uri: userData?.wallpaperUrl } : ""}
        >
          <View>
            <FlatList
              data={hideSendMessage ? posts : authPosts}
              nestedScrollEnabled={true}
              style={{ marginBottom: verticalScale(180) }}
              // //  contentContainerStyle={{
              // //    gap: 100,
              // //  }}
              renderItem={({ item, index }) => {
                const currentDate = moment();
                const createdAtDate = moment(item?.created_at);
                return (
                  <View style={{ paddingBottom: verticalScale(10) }}>
                    <Spacer height={verticalScale(30)} />
                    <View style={styles.timeContainer}>
                      <CustomText
                        color={colors.grey300}
                        size={15}
                        text={
                          createdAtDate.isSame(currentDate, "day")
                            ? "Today " + createdAtDate.format("hh:mm A")
                            : createdAtDate.format("dddd hh:mm A")
                        }
                        // fontFam="Inter-SemiBold"
                        //  style={{ marginLeft: scale(8),backgroundColor:colors.primary }}
                        // text={moment(item?.created_at).format("dddd hh:mm A")}
                      />
                    </View>
                    <View
                      style={{
                        // marginHorizontal: scale(15),
                        marginVertical: verticalScale(10),
                        // height:windowHeight/1.5,
                        // height:"50%",
                        backgroundColor: colors.black300,
                        borderRadius: scale(10),
                        width: "90%",
                        alignSelf: "center",
                        overflow: "hidden",
                        // paddingVertical: verticalScale(8),
                        // paddingHorizontal: scale(5),
                      }}
                    >
                      <View
                        style={{ paddingHorizontal: 10, paddingVertical: 2 }}
                      >
                        <NewText
                          color={colors.gray500}
                          size={16}
                          fontFam="Inter-Medium"
                          // style={{ marginBottom: verticalScale(8) }}
                          text={item?.title}
                        />
                      </View>

                      {item?.imageUrl ? (
                        <TouchableOpacity
                          activeOpacity={0.9}
                          onPress={() => {
                            setImageObject({
                              uri: item?.imageUrl,
                              name: item?.title,
                              description: item?.description,
                              time: item?.created_at,
                            });
                            setIsViewImage(true);
                          }}
                          style={{
                            width: "100%",
                            height: verticalScale(340),
                            borderRadius: scale(10),
                          }}
                        >
                          <FastImage
                            style={{
                              width: "100%",
                              height: verticalScale(340),
                              borderRadius: scale(10),
                            }}
                            // source={{ uri: item?.imageUrl }}
                            source={{
                              uri: item?.imageUrl,
                              headers: { Authorization: "AuthToken" },
                              priority: FastImage.priority.high,
                            }}
                          />
                        </TouchableOpacity>
                      ) : (
                        <></>
                      )}
                      {item?.gif ? (
                        <Image
                          style={{ width: "100%", height: verticalScale(300) }}
                          source={{ uri: item?.gif }}
                        />
                      ) : (
                        <></>
                      )}

                      <CustomText
                        color={colors.white}
                        size={14}
                        // fontFam="Inter-Medium"
                        style={{
                          marginTop: verticalScale(8),
                          marginHorizontal: scale(10),
                        }}
                        text={item?.description}
                      />

                      <View
                        style={{
                          ...appStyles.row,
                          alignSelf: "flex-end",
                          marginRight: 10,
                          marginBottom: 5,
                          height: 20,
                        }}
                      >
                        {item?.imageUrl && (
                          <View style={appStyles.row}>
                            <Image
                              style={{
                                width: 17,
                                height: 17,
                                tintColor: colors.grey300,
                              }}
                              source={images.eye}
                            />
                            <Spacer width={8} />
                            <NewText
                              color={colors.grey300}
                              size={13}
                              // fontFam="Inter-Medium"
                              style={{
                                marginRight: scale(5),
                                textAlign: "right",
                              }}
                              text={"14"}
                            />
                          </View>
                        )}
                      </View>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: scale(10),
                        // paddingVertical: verticalScale(2),
                        position: "absolute",
                        bottom: verticalScale(10),
                        left: scale(25),
                        backgroundColor: colors.black300,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: scale(20),
                        borderWidth: 1,
                        borderColor: colors.black,
                      }}
                    >
                      <CustomText
                        color={colors.grey300}
                        size={15}
                        // fontFam="Inter-Medium"
                        style={{ letterSpacing: 3 }}
                        text={"❤️" + "  " + item?.likes}
                      />
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ImageBackground>
      </View>

      <ImageViewModal
        isModalVisible={isViewImage}
        imageObject={imageObject}
        // imageData={imageData}
        
        // sendMessage={sendMessage}
        // createPost={createPost}
        // setState={setState}
        // state={state}
        // msg={msg}
        // setMsg={setMsg}
        // message={message}
        // setLoading={setLoading}
        // loading={loading}
        // // setActiveChat={setActiveChat}
        setModalVisible={setIsViewImage}
      />
    </>
  );
};

export default Channel;

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
  timeContainer: {
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(2),
    alignSelf: "center",
    borderRadius: scale(20),
  },
});
