import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { colors } from "../../../utils/colors";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { windowWidth } from "../../../utils/Dimensions";
import MessagesList from "./MessagesList";
import { messagesList } from "../../../utils/Data";

const MessageScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const renderChatList = ({ item }: any) => {
    return <MessagesList item={item} />;
  };

  const filteredList = messagesList.filter((item) =>
    item?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );
  return (
    <View style={appStyles.main}>
      <View style={styles.header}>
        <CustomText color={colors.white} size={18} text={"Private Messenger"} />
      </View>
      <View style={styles.inputContainer}>
        <Image source={images.search1} />
        <TextInput
          style={styles.input}
          placeholderTextColor={colors.white}
          onChangeText={(text: string) => setSearchTerm(text)}
          placeholder="Search Messages"
        />
        <Image source={images.cross} />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={filteredList}
          contentContainerStyle={{
            gap: 5,
          }}
          renderItem={renderChatList}
        />
      </View>
      <TouchableOpacity style={{ position: "absolute", bottom: 25, right: 10 }}>
        <Image source={images.compose} />
      </TouchableOpacity>
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black100,
    alignItems: "center",
    paddingTop: "18%",
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
