import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { windowWidth } from "../../../utils/Dimensions";
import MessagesList from "./MessagesList";
import { messagesList } from "../../../utils/Data";
import CustomSearch from "../../../components/CustomSearch";
import { Spacer } from "../../../components/Spacer";
import AbsoluteHeader from "../../../components/AbsoluteHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { scale, verticalScale } from "react-native-size-matters";

const MessageScreen = ({ navigation }: any) => {
  const [isArchived, setIsArchived] = useState(false);
  const renderChatList = ({ item }: any) => {
    return <MessagesList item={item} />;
  };

  // const filteredList = messagesList.filter((item) =>
  //   item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  // );

//   const filteredList = messagesList.filter((item) =>
//   item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
// );
  return (
    <View style={appStyles.main}>
      <AbsoluteHeader>
        <View style={{ width: "30%" }} />

        <View
        // style={{ width: "40%" }}
        >
        <CustomText
          fontWeight="600"
          color={colors.white}
          fontFam="Poppins-Medium"
          size={18}
          text={ !isArchived ?"Status Inbox":"Archived Chats"}
        />

        </View>

       
        <TouchableOpacity
          style={{width:"30%",alignItems:"flex-end",paddingRight:scale(10)}}

          onPress={() => navigation.navigate("NewMessage")}
        >
          <Image
            style={{ width: wp(5), height: hp(3) }}
            resizeMode="contain"
            source={images.newchat}
          />
        </TouchableOpacity>
      
      </AbsoluteHeader>

      <TouchableOpacity
      activeOpacity={0.6}
      onPress={()=>setIsArchived(!isArchived)}
       style={{ paddingHorizontal:scale(15),paddingVertical:verticalScale(5) }}>



      <CustomText
          fontWeight="600"
          color={colors.white}
          fontFam="Poppins-Medium"
          textDecorationLine={"underline"}
          size={17}
          text={!isArchived?"Archived chats":"Back to Inbox"}
        />

      </TouchableOpacity>

      {/* <View style={styles.inputContainer}>
        <Image source={images.search1} />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.white}
          onChangeText={(text: string) => setSearchTerm(text)}
          placeholder="Search Messages"
        />
        <Image source={images.cross} />
      </View> */}
      <View style={{ flex: 1 }}>
        <FlatList
          data={ isArchived? messagesList.filter(it=>!it.isOnline):messagesList}
          contentContainerStyle={{
            gap: 5,
          }}
          renderItem={renderChatList}
        />
      </View>
      {/* <TouchableOpacity style={{ position: "absolute", bottom: 25, right: 10 }}>
        <Image source={images.compose} />
      </TouchableOpacity> */}
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    alignItems: "center",
    paddingTop: Platform.OS == "ios" ? "18%" : "5%",
    paddingBottom: "5%",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 10,
    marginHorizontal: 10,
    marginBottom: 12,
  },
  input: { color: colors.white, width: windowWidth / 3 },
});
