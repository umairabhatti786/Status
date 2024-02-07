import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";
import Header from "../../../components/Header";
import { appStyles } from "../../../utils/AppStyles";
import { colors } from "../../../utils/colors";
import { windowHeight } from "../../../utils/Dimensions";
import { windowWidth } from "../HomeScreen/FriendList";
import GifContainer from "./GifContainer";

const EditGifs = ({ navigation }: any) => {
  const yourGifs = [{ gif: images.defimage2 }, { gif: images.defimage4 }];
  const [isSelectGif, setSelectGif] = useState(false);
  const searchGifs = [
    { gif: images.defimage2 },
    { gif: images.defimage4 },
    { gif: images.defimagese },
    { gif: images.defimagese1 },
    { gif: images.defimages2 },
    { gif: images.defimages2 },
    { gif: images.defimages2 },

    { gif: images.defimages2 },
    { gif: images.defimages3 },
  ];

  return (
    <View style={appStyles.main}>
      <View
        style={{
          backgroundColor: colors.black300,
          alignItems: "center",
          paddingTop: "18%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: "5%",
          paddingHorizontal: 15,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: 20, height: 20, tintColor: colors.white }}
            source={images.back}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View
          style={{
            width: windowWidth / 1.8,
            height: 53,
            borderRadius: 5,
            backgroundColor: colors.black,
            marginLeft: 5,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
          }}>
          <Image
            style={{ width: 25, height: 25, tintColor: colors.white }}
            source={images.search}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Search GIPHY"
            style={{
              fontSize: 20,
              fontFamily: "Poppins-Regular",
              paddingLeft: 10,
            }}
            placeholderTextColor={colors.grey400}
          />
        </View>

        <CustomButton
          text="Save"
          width={65}
          height={35}
          borderRadius={5}
          bgColor={colors.white}
          textColor={colors.black}
        />
      </View>

      <ScrollView style={{ flex: 1 }}>
        <CustomText
          color={colors.white}
          size={20}
          text={"Active GIFS"}
          style={{ marginLeft: 20, marginTop: 15, marginBottom: 5 }}
        />
        <View>
          <FlatList
            scrollEnabled={false}
            data={yourGifs}
            numColumns={2}
            style={{ flexWrap: "nowrap" }}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: windowWidth - 215,
                    height: 180,
                    borderWidth: 1,
                    borderColor: colors.white,
                    margin: 10,
                  }}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    source={item.gif}
                  />
                </View>
              );
            }}
          />
        </View>

        <CustomText
          color={colors.white}
          size={20}
          text={"Search Results"}
          style={{ marginLeft: 20, marginTop: 15, marginBottom: 5 }}
        />

        <FlatList
          data={searchGifs}
          numColumns={3}
          scrollEnabled={false}
          style={{ flexWrap: "nowrap" }}
          renderItem={({ item, index }) => {
            return (
                <GifContainer
                item={item}
                />
                
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default EditGifs;
