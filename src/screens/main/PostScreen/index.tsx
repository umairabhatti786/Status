import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { Spacer } from "../../../components/Spacer";
import { windowWidth } from "../HomeScreen/FriendList";
import { windowHeight } from "../../../utils/Dimensions";
import { comments } from "../../../utils/Data";
import MessagesComponent from "../../../components/MessageComponent";

const Post = () => {
  const route: any = useRoute();
  const item = route?.params?.item;
  const navigation = useNavigation();

  const renderChatList = ({ item }: any) => {
    return (
      <MessagesComponent
        comments={true}
        name={item?.name}
        image={item?.img}
        message={item?.message}
        time={item?.time}
        chatDate={item?.chatDate}
      />
    );
  };
  return (
    <View style={appStyles.main}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={images.back} />
        </TouchableOpacity>
        <CustomText
          color={colors.white}
          fontWeight="700"
          size={18}
          text={"Post"}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={{ width: windowWidth, height: windowHeight / 6.5 }}
          source={item?.imgbg}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={item?.img}
              style={{ width: windowWidth / 4.5, height: windowHeight / 10 }}
            />
            <View style={{ marginLeft: 15 }}>
              <CustomText
                fontWeight="700"
                size={17}
                color={colors.white}
                text={item?.name}
              />
              <CustomText
                style={{ width: windowWidth / 3 }}
                fontWeight="700"
                size={17}
                color={colors.white}
                text={item?.address}
              />
            </View>
          </View>
        </ImageBackground>
        <Spacer height={18} />
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 10,
          }}
        >
          <CustomText color={colors.white} text={item?.time} />
          <TouchableOpacity>
            <CustomText
              size={13}
              style={styles.edit}
              color={colors.white}
              text={"Edit"}
            />
          </TouchableOpacity>
        </View>
        <CustomText
          style={{ width: windowWidth / 1.47, marginLeft: 10 }}
          size={15}
          color={colors.white}
          text={item?.message}
        />
        <Spacer height={20} />
        <Image
          style={{ alignSelf: "center", width: windowWidth }}
          source={item?.postimg}
        />
        <View style={{ flex: 1 }}>
          <FlatList
            data={comments}
            contentContainerStyle={{
              gap: 5,
            }}
            renderItem={renderChatList}
          />
        </View>
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderTopColor: colors.gray200,
          borderBottomColor: colors.gray200,
          paddingVertical: 7,
          marginBottom: 30,
        }}
      >
        <TextInput
          style={{ color: colors.gray200, width: windowWidth / 1.25 }}
          placeholderTextColor={colors.gray200}
          placeholder="Type a comment"
        />
        <Image style={{ tintColor: colors.gray200 }} source={images.send} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black100,
    paddingTop: "18%",
    paddingBottom: "5%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  edit: {
    textDecorationLine: "underline",
  },
});
