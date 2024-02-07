import React, { useEffect, useState } from "react";
import {
  Alert,
  LogBox,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { appStyles } from "../../../utils/AppStyles";

import { useNavigation } from "@react-navigation/native";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";

const ProfileSetup = () => {
  const navigation: any = useNavigation();
  const [activeGender, setActiveGender] = useState(1);

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: 15 }}>
        <View style={appStyles.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={images.back} />
          </TouchableOpacity>
          <Spacer width={"10%"} />
          <CustomText
            text={"Profile Set Up - Step 2 of 2"}
            color={colors.white}
            size={22}
            style={{ textAlign: "center" }}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
        </View>
        <Spacer height={35} />
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: 90,
            height: 90,
            borderRadius: 5,
            borderColor: colors.white,
            borderStyle: "dotted",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
          }}>
          <TouchableOpacity>
            <Image style={{ width: 16, height: 16 }} source={images.plusgrey} />
          </TouchableOpacity>
        </TouchableOpacity>

        <CustomText
          text={"Upload Profile Photo"}
          color={colors.white}
          size={15}
          textDecorationLine="underline"
          style={{ textAlign: "center", marginTop: 4 }}
          fontFam="Poppins-Medium"
          fontWeight="400"
        />
        <Spacer height={20} />
        <View>
          <CustomText
            fontWeight={"600"}
            fontFam="Poppins-Medium"
            size={15}
            style={{ marginBottom: 10 }}
            text={"Gender"}
            color={colors.white}
          />
          <View style={{ ...appStyles.row, marginLeft: 20 }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setActiveGender(1)}
              style={styles.dotContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActiveGender(1)}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  backgroundColor:
                    activeGender == 1 ? colors.white : "transparent",
                }}></TouchableOpacity>
            </TouchableOpacity>

            <CustomText
              fontWeight={"500"}
              // fontFam="Poppins-Medium"
              size={16}
              style={{ marginLeft: 10 }}
              text={"Female"}
              color={colors.white}
            />
            <Spacer width={20} />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => setActiveGender(2)}
              style={styles.dotContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActiveGender(2)}
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 999,
                  backgroundColor:
                    activeGender == 2 ? colors.white : "transparent",
                }}></TouchableOpacity>
            </TouchableOpacity>

            <CustomText
              fontWeight={"500"}
              // fontFam="Poppins-Medium"
              size={16}
              style={{ marginLeft: 10 }}
              text={"Male"}
              color={colors.white}
            />
          </View>
        </View>
        <Spacer height={15}/>


        <CustomTextInput
          label="Display Name"
          placeholder="Enter your name or handle"
        />
        <Spacer height={7} />
        <CustomTextInput label="Your Birthday" placeholder="8/24/1989" />
        <Spacer height={7} />

        <CustomTextInput
          label="Your Location"
          leftSource={images.location}
          placeholder="Enter where you live for your profile"
        />

        <Spacer height={30} />

        <CustomButton
          text="LET ME IN"
          onPress={()=>navigation.navigate("LostPassword")}
          width={"100%"}
          fontWeight={"500"}
          size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  dotContainer: {
    width: 23,
    height: 23,
    borderRadius: 999,
    borderWidth: 1,
    padding: 2,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
