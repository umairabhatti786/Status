import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { windowWidth } from "../../../utils/Dimensions";
import ToggleSwitch from "toggle-switch-react-native";
import { Spacer } from "../../../components/Spacer";
import CustomLine from "../../../components/CustomLine";
import CustomTextInput from "../../../components/CustomTextInput";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AbsoluteHeader from "../../../components/AbsoluteHeader";
import { scale, verticalScale } from "react-native-size-matters";
import sizeHelper from "../../../utils/helpers/sizeHelper";
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { setIsVerify } from "../../../redux/reducers/authReducer";
import DropDown from "../../../components/DropDown";
import { data } from "../../../utils/Data";

const Settings = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Everyone");
  const [inApp, setInApp] = useState(true);
  const [email, setEmail] = useState(false);
  const isVerify = useSelector((state) => state.auth?.isVerify);
  const verifyData = useSelector((state) => state.auth?.verifyData);
  const dispatch = useDispatch();

  console.log("isVerify", isVerify);
  const [items, setItems] = useState([
    { label: "Everyone", value: "Everyone" },
    { label: "Friends", value: "Friends" },
    { label: "No Body", value: "No Body" },
  ]);
  useEffect(() => {
    if (isVerify) {
      setTimeout(() => {
        dispatch(setIsVerify(false));
      }, 2000);
    }
  });

  const Detail = ({ txt, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.6}
        style={{
          ...appStyles.rowjustify,
          paddingVertical: verticalScale(10),
          paddingLeft: scale(15),
          paddingRight: scale(10),
        }}
      >
        <CustomText
          // style={{ marginVertical: 12 }}
          size={16}
          fontFam="Inter-SemiBold"
          color={colors.white}
          fontWeight={"600"}
          text={txt}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ width: wp(5), height: hp(2.5) }}
            resizeMode="contain"
            source={images.next}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={appStyles.main}>
        <AbsoluteHeader>
          <TouchableOpacity
          style={{width:"10%"}}
           onPress={() => navigation.goBack()}>
            <Image
              style={{ width: scale(15), height: scale(15) }}
              resizeMode="contain"
              source={images.back}
            />
          </TouchableOpacity>
          <CustomText
            fontWeight="600"
            fontFam="Poppins-Medium"
            color={colors.white}
            size={18}
            text={"Account Settings"}
          />
          <CustomText color={"transparent"} size={18} text={"sss"} />
        </AbsoluteHeader>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: scale(15),marginTop:verticalScale(20) }}>
          <CustomText
          fontWeight={"500"}
          fontFam="Poppins-Medium"
          size={ 13}
          style={{ marginBottom: verticalScale(5) }}
          text={"Who can start a DM conversation with you?"}
          color={colors.white}
        />
          <DropDown
          placeholder={'Everyone'}
          dropWidth={"100%"}
          //   data={data}
          data={data.map((item, _index) => {
            return {
              id: item?.id,
              label: item?.value,
              value: item?.value,
            }
          })}
        />
          
          </View>
          {/* <View
          style={{ ...appStyles.row, alignSelf: "center", marginVertical: 20 }}>
          <Image
            source={images.gift}
            resizeMode="contain"
            style={{ width: 22, height: 22 }}
          />
          <Spacer width={15} />

          <CustomText
            style={{ textAlign: "center" }}
            size={17}
            textDecorationLine={"underline"}
            color={colors.white}
            text={"Please Visit our GoFundMe Campaign"}
          />
        </View> */}
          {/* <CustomLine backgroundColor={colors.primary} height={1.5} /> */}

          <View
            style={{
              ...appStyles.row,
              paddingLeft: scale(15),
              marginTop: verticalScale(10),
              marginBottom: verticalScale(3),
            }}
          >
            <CustomText
              style={{ marginVertical: 12 }}
              size={16}
              fontFam="Inter-SemiBold"
              color={colors.white}
              fontWeight={"600"}
              text={"Account ID:"}
            />
            <View
              style={{
                width: wp(28),
                height: hp(3.7),
                backgroundColor: colors.primary,
                justifyContent: "center",
                paddingHorizontal: scale(10),
                marginHorizontal: scale(10),
              }}
            >
              <CustomText
                // style={{ marginVertical: 12 }}
                size={15}
                fontFam="Inter-SemiBold"
                color={colors.white}
                fontWeight={"600"}
                text={"1459151"}
              />
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ width: scale(19), height: scale(19) }}
                resizeMode="contain"
                source={images.copy}
              />
            </TouchableOpacity>
          </View>

          <CustomLine backgroundColor={colors.primary} height={1.5} />
          <Detail
            txt={"Blocked accounts"}
            onPress={() => navigation.navigate("BlockedAccount")}
          />
          <CustomLine backgroundColor={colors.primary} height={1} />
          <Detail
            txt={"Change your password"}
            onPress={() => navigation.navigate("ChangePassword")}
          />
          <CustomLine backgroundColor={colors.primary} height={1.5} />
          <Detail
            txt={"Email" + "     " + "carmenelectra@gmail.com"}
            onPress={() => navigation.navigate("ChangeEmail")}
          />
          <CustomLine backgroundColor={colors.primary} height={1.5} />
          <Detail
            txt={"Delete your account"}
            onPress={() => navigation.navigate("AccountDeletion")}
          />
          <CustomLine backgroundColor={colors.primary} height={1.5} />
          <TouchableOpacity
            style={{
              paddingVertical: verticalScale(15),
              paddingLeft: scale(15),
            }}
          >
            <CustomText
              // style={{ marginVertical: 12 }}
              size={16}
              fontFam="Inter-SemiBold"
              color={colors.white}
              fontWeight={"600"}
              text={"Log out"}
            />
          </TouchableOpacity>
          <View style={styles.rowConttainer}>
            <CustomText
              fontWeight="600"
              fontFam="Poppins-Medium"
              color={colors.white}
              size={17}
              text={"Notifications"}
            />
          </View>

          <View
            style={{
              paddingHorizontal: scale(20),
              paddingVertical: verticalScale(15),
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: verticalScale(20),
              }}
            >
              <CustomText
                color={colors.white}
                text={"Push"}
                size={16}
                fontWeight="600"
                fontFam="Poppins-Medium"
              />
              <ToggleSwitch
                isOn={inApp}
                onColor={colors.sky}
                offColor={colors.grey300}
                size="small"
                onToggle={setInApp}
                thumbOnStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                thumbOffStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                trackOffStyle={{width: 46, height:25,}}
                trackOnStyle={{ width:46, height: 25 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomText
                size={16}
                fontWeight="600"
                fontFam="Poppins-Medium"
                color={colors.white}
                text={"Email"}
              />
              <ToggleSwitch
                isOn={email}
                onColor={colors.sky}
                offColor={colors.grey300}
                size="small"
                onToggle={setEmail}
                thumbOnStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                thumbOffStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                trackOffStyle={{width: 46, height:25,}}
                trackOnStyle={{ width:46, height: 25 }}
              />
            </View>
          </View>
          <View style={styles.rowConttainer}>
            <CustomText
              fontWeight="600"
              fontFam="Poppins-Medium"
              color={colors.white}
              size={16}
              text={"Donate to Status "}
            />
          </View>
          <View
            style={{
              paddingHorizontal: scale(50),
              paddingVertical: verticalScale(20),
            }}
          >
            <CustomText
              fontWeight="500"
              color={colors.white}
              size={14}
              style={{ textAlign: "center", textDecorationLine: "underline" }}
              text={
                "Donate $5 or more and the founder will “Thank you” on your wall"
              }
            />
          </View>

          <View style={styles.rowConttainer}>
            <CustomText
              fontWeight="600"
              fontFam="Poppins-Medium"
              color={colors.white}
              size={16}
              text={"Follow the founder"}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              marginVertical: verticalScale(20),
            }}
          >
            <TouchableOpacity activeOpacity={0.6}>
              <Image
                source={images.insta}
                style={{ width: scale(28), height: scale(28) }}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} style={{ marginLeft: "8%" }}>
              <Image
                style={{ width: scale(28), height: scale(28) }}
                source={images.youtube}
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {isVerify && (
        <Animatable.View
          animation={"slideInUp"}
          style={{
            width: "100%",
            height: verticalScale(65),
            backgroundColor: "#03B74E",
            flexDirection: "row",
            paddingHorizontal: scale(20),
            position: "absolute",
            paddingTop: verticalScale(7),
            bottom: verticalScale(100),
          }}
        >
          <Image
            style={{ width: scale(35), height: scale(35) }}
            source={images.verify}
            resizeMode="contain"
          />
          <View style={{ marginTop: -4 }}>
            <CustomText
              text={verifyData.lable}
              color={colors.white}
              fontWeight={"600"}
              size={15}
              style={{ marginLeft: scale(10), marginBottom: -5 }}
              fontFam={"Poppins-SemiBold"}
            />
            <CustomText
              text={verifyData.text}
              color={colors.white}
              fontWeight={"600"}
              size={12}
              style={{ marginLeft: scale(10) }}
              fontFam={"Poppins-Medium"}
            />
          </View>
        </Animatable.View>
      )}
    </>
  );
};

export default Settings;

const styles = StyleSheet.create({
  rowConttainer: {
    height: verticalScale(50),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
});
