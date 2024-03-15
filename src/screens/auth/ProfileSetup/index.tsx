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
import { scale, verticalScale } from "react-native-size-matters";

const ProfileSetup = () => {
  const navigation: any = useNavigation();
  const [activeGender, setActiveGender] = useState(1);

  return (
    <SafeAreaView style={appStyles.main}>
      <View style={{ flex: 1, padding: scale(20) }}>
        {/* <View style={appStyles.row}>
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
        </View> */}
                <Spacer height={verticalScale(30)} />

        <CustomText
            text={"Profile Setup"}
            color={colors.white}
            size={21}
            style={{ textAlign: "center" }}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
        {/* <Spacer height={35} /> */}
        <TouchableOpacity
          activeOpacity={0.6}
          style={{
            width: scale(72),
            height: scale(72),
            borderRadius:scale(5),
            backgroundColor:colors.grey600,
            alignSelf: "center",
            marginVertical:verticalScale(10),
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
          }}>
          <TouchableOpacity>
            <Image style={{ width: scale(58), height: scale(58) }} source={images.defuser} 
            resizeMode="contain"
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <CustomText
          text={"Upload Profile Photo"}
          color={colors.white}
          size={15}
          textDecorationLine="underline"
          style={{ textAlign: "center", }}
          // fontFam="Poppins-Medium"
          fontWeight="400"
        />
        {/* <Spacer height={verticalScale(10)} /> */}
        {/* <View>
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
        </View> */}
        <Spacer height={15}/>


        <CustomTextInput
          label="Display Name"
          placeholder="Enter your name or handle"
        />
        <Spacer height={7} />

        <CustomTextInput
          label="Your Location"
          leftSource={images.location}
          placeholder="Enter where you live for your profile"
        />

        <Spacer height={verticalScale(30)} />

        <CustomButton
          text="LET ME IN"
          onPress={()=>navigation.navigate("LostPassword")}
          width={"100%"}
          fontWeight={"500"}
          // size={18}
          textColor={colors.black}
          bgColor={colors.white}
        />


<View style={{marginVertical:verticalScale(15)}}>
          <View style={appStyles.row}>
            <CustomText
              text={"By tapping “Let me In,” you agree to Status’s"}
              color={colors.white}
              size={11}
              style={{ textAlign: "center" }}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
            <Spacer width={3} />
            <TouchableOpacity>
              <CustomText
                text={"Terms of"}
                textDecorationLine={"underline"}
                color={colors.white}
                size={11}
                style={{ textAlign: "center", marginRight: 10 }}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
            </TouchableOpacity>
          </View>
          <View style={appStyles.row}>
            <TouchableOpacity>
              <CustomText
                text={"Use"}
                textDecorationLine={"underline"}
                color={colors.white}
                size={11}
                //   style={{textAlign:"center",marginRight:10}}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
            </TouchableOpacity>
            <Spacer width={3} />
            <CustomText
              text={"and"}
              color={colors.white}
              size={11}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
            <Spacer width={3} />

            <TouchableOpacity>
              <CustomText
                text={"Privacy Policy."}
                textDecorationLine={"underline"}
                color={colors.white}
                size={11}
                style={{marginLeft:3}}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
            </TouchableOpacity>
          </View>
        </View>
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
