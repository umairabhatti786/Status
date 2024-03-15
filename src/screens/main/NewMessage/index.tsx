import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import ImagePicker from "react-native-image-crop-picker";
import { messages, messagesList } from "../../../utils/Data";
import MessagesComponent from "../../../components/MessageComponent";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import MessageSender from "../../../components/MessageSender";

const NewMessage = () => {
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const [selectedUser, setSelectedUser] = useState();
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);

  const [usersList, setUsersList] = useState([
    { name: "Mike O’Dea", img: images.defimage12 },
   
  ]);

  const onSearchUsers = (txt: any) => {
    setSearch(txt);
    setIsSearch(true);

    if (txt.length == 0) {
      setIsSearch(false);

      return;
    } else {
      let filterSearch = usersList?.filter((item) => {
        return `${item.name}`
          .toLowerCase()
          .trim()
          .includes(txt.toLowerCase().trim());
      });
      console.log("kcndkcnTextLwnghtdxdc", filterSearch);

      setUsersList(filterSearch);
    }
  };

  return (
    <View style={appStyles.main}>
      <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View style={styles.header}>
        <View style={{ width: "30%" }} />

        <View style={{ width: "40%" }}>
          <CustomText
            fontWeight="600"
            color={colors.white}
            fontFam="Poppins-Medium"
            size={16}
            text={"New Message"}
          />
        </View>

        <TouchableOpacity
          style={{
            width: "30%",
            alignItems: "flex-end",
            // paddingRight: scale(10),
          }}
          onPress={() => navigation.goBack()}
        >
          <CustomText
            // fontWeight="600"
            color={colors.white}
            // fontFam="Poppins-Medium"
            size={16}
            text={"Cancel"}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ paddingHorizontal: scale(15), paddingTop: verticalScale(20) }}
      >
        <View style={appStyles.rowjustify}>
          <CustomText
            fontWeight="600"
            color={colors.white}
            fontFam="Poppins-Medium"
            size={18}
            style={{ marginRight: scale(10) }}
            text={"To:"}
          />

          {/* <View
        style={{
          width: "87%",
          height: verticalScale(40),
          borderWidth: 1,
          borderRadius: scale(8),
          borderColor: colors.grey300,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      > */}
          <View
            style={{
              // marginHorizontal: 10,
              // paddingVertical:verticalScale(6),
              width: "90%",
              borderWidth: 1,
              borderRadius: scale(8),
              borderColor: colors.grey300,
              paddingHorizontal: scale(10),
              // textAlign:"center"
              // paddingHorizontal: scale(15),
            }}
          >
            {selectedUser ? (
                <View style={{flexDirection:"row",alignItems:"center"}}>
                      <View
                style={{
                    marginVertical:verticalScale(4),
                    
            
                    //   minWidth: scale(80),
                  borderRadius: scale(8),
                  
                  borderWidth: 1,
                  borderColor: colors.white,
                }}
              >
                <CustomText
                //   fontWeight="600"
                  color={colors.white}
                //   fontFam="Poppins-Medium"
                  size={16}
                  style={{marginHorizontal:scale(10),marginVertical:verticalScale(1)}}
                  text={selectedUser.name}
                />
              </View>
              <View/>
                    </View>
            
            ) : (
              <TextInput
                placeholder="Search"
                placeholderTextColor={colors.white}
                value={search}
                onChangeText={onSearchUsers}
                style={{
                  fontSize: verticalScale(15),
                  fontFamily: "Poppins-Regular",
                  fontWeight: "400",
                  color: colors.white,
                  width: "87%",
                  paddingVertical:verticalScale(6),
                  alignItems: "center",

                  // textAlign:"center"
                }}
              />
            )}
          </View>

          {/* </View> */}
        </View>

        <Spacer height={verticalScale(10)} />
        {isSearch && (
          <View>
            {usersList.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() => {
                    setSearch(item.name);
                    setSelectedUser(item);

                    setIsSearch(false);
                  }}
                >
                  <CustomText
                    fontWeight="600"
                    color={colors.white}
                    fontFam="Poppins-Medium"
                    size={18}
                    style={{ marginVertical: verticalScale(5) }}
                    text={item.name}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        )}

        {
            selectedUser&&(
                <View style={{marginTop:"20%",alignItems:"center",justifyContent:"center",}}>


                <Image
                style={{width:scale(100),height:scale(100),borderRadius:scale(10)}}
                source={selectedUser?.img}
                />
                    <CustomText
                fontWeight="600"
                color={colors.white}
                fontFam="Poppins-Medium"
                size={17}
                style={{ marginVertical: verticalScale(10) }}
                text={"Mike O’Dea"}
              />
    
    <CustomText
                // fontWeight="600"
                color={colors.white}
                // fontFam="Poppins-Medium"
                size={17}
                style={{ textAlign:"center",marginHorizontal:scale(20) }}
                text={"You started a private message with Mike O’Dea. Please be respectful."}
              />
    
    
            </View>

            )
        }
    

       
      </View>
      {
        selectedUser&&(
            <MessageSender/>


        )
      }


    </View>
  );
};

export default NewMessage;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black300,
    alignItems: "center",
    paddingTop: Platform.OS == "ios" ? "18%" : "3%",
    paddingBottom: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(15),
  },
});
