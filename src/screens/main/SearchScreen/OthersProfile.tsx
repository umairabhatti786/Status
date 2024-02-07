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
import React from "react";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import MessagesComponent from "../../../components/MessageComponent";
import { profileComments } from "../../../utils/Data";

const OthersProfile = () => {
  const route: any = useRoute();
  const item = route?.params?.item;
  const navigation: any = useNavigation();
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
    <SafeAreaView style={appStyles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.back} />
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                backgroundColor: colors.green,
                marginRight: 10,
              }}
            />
            <CustomText
              fontWeight="700"
              color={colors.white}
              size={18}
              text={item?.name}
            />
          </View>
          <CustomText color={"transparent"} size={18} text={"sss"} />
        </View>
        <ImageBackground
          style={{ width: windowWidth, height: windowHeight / 6.5 }}
          source={images.plane}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                width: windowWidth / 4.5,
                height: windowHeight / 10,
                borderRadius: 10,
                marginBottom: 3,
                marginHorizontal: 1.5,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={item.img}
              />

              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  backgroundColor: colors.green,
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <CustomText
                fontWeight="700"
                size={17}
                color={colors.white}
                numberOfLines={1}
                style={{ width: windowWidth / 2.6 }}
                text={item?.name}
              />
              <CustomText
                style={{ width: windowWidth / 3 }}
                fontWeight="700"
                size={17}
                numberOfLines={3}
                color={colors.white}
                text={"Boston, MA United States 245 Friends"}
              />
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            justifyContent: "space-between",
          }}
        >
          <CustomButton
            width={windowWidth / 2.35}
            text="Add Friend"
            height={35}
            borderRadius={8}
          />
          <CustomButton
            width={windowWidth / 2.35}
            borderRadius={8}
            text="Message"
            height={35}
          />
        </View>
        <Image
          style={{
            width: windowWidth,
            height: windowHeight / 2.7,
            marginTop: 15,
          }}
          source={item?.img}
        />
        <CustomText
          color={colors.white}
          size={16}
          style={{ padding: 15 }}
          text={
            "I’m the founder of Status and your first friend here. It’s time to take social networking back to the way it was meant to be."
          }
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{
              width: windowWidth / 2.22,
              height: windowHeight / 5,
              borderRadius: 8,
            }}
            source={images.oldman}
          />
          <Image
            style={{
              width: windowWidth / 2.22,
              height: windowHeight / 5,
              borderRadius: 8,
            }}
            source={images.walking}
          />
        </View>
        <ImageBackground
          style={{
            marginTop: 10,
            // marginHorizontal: 10,
            paddingHorizontal:20,
            overflow: "hidden",
            paddingVertical: 6,
          }}
          // resizeMode="contain"
          source={images.detailbg}
        >
          <View style={styles.flex}>
            <View style={styles.row}>
              <Image style={styles.icon} source={images.gander} />
              <CustomText color={colors.white}
                            size={14}

               text={"Male"} />
            </View>
            <View style={{...styles.row,marginLeft:10}}>
              <Image style={styles.icon} source={images.calander} />
              <CustomText color={colors.white} 
                            size={14}

              text={"40 years old"} />
            </View>
          </View>
          <View style={styles.flex}>
            <View style={styles.row}>
              <Image style={styles.icon} source={images.straight} />
              <CustomText color={colors.white} 
              size={14}
              text={"Straight"} />
            </View>
            <View style={{...styles.row,marginLeft:10}}>
              <Image style={styles.icon} source={images.heart} />
              <CustomText color={colors.white} 
                            size={14}

              text={"Single"} />
            </View>
          </View>
          <View style={[styles.flex, { marginBottom: 12 }]}>
            <View style={styles.row}>
              <Image style={styles.icon} source={images.education} />
              <CustomText color={colors.white} 
                            size={14}

              text={"GED"} />
            </View>
            <View style={{...styles.row,marginLeft:10}}>
              <Image style={styles.icon} source={images.bag} />
              <CustomText color={colors.white} 
                            size={14}

              text={"Status,Founder"} />
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            borderWidth: 1,
            borderColor: colors.gray200,
            paddingVertical: 7,
            marginBottom: 14,
            marginTop: 5,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <TextInput
            style={{ color: colors.gray200, width: windowWidth / 1.25 }}
            placeholderTextColor={colors.gray200}
            placeholder="Write on my wall"
          />
          <Image style={{ tintColor: colors.gray200 }} source={images.send} />
        </View>
        <FlatList
          data={profileComments}
          style={{paddingHorizontal:5}}
          contentContainerStyle={{
            gap: 7,
          }}
          renderItem={renderChatList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OthersProfile;

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
