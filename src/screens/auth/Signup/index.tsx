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
  ImageBackground,
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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import NewText from "../../../components/NewText";
import Input from "../../../components/Input";
import ErrorToast from "../../../components/ErrorToast";
import CustomToast from "../../../components/CustomToast";
import { emailRegex } from "../../../utils/Regex";
import Button from "../../../components/Button";
import { SignupForm } from "./SignupForm";
import Loader from "../../../components/Loader";
import { UserSignup } from "../../../api/ApiServices";
import OneSignal from "react-native-onesignal";

const Signup = () => {
  const navigation: any = useNavigation();
  const [showPassword, setShowPAssword] = useState(true);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastColor, setToastColor] = useState(colors.red);
  const [deveiceId, setDeviceId] = useState();

  // useEffect(() => {
  //   getDeviceId();
  // }, []);

  const getDeviceId = async () => {
    let deviceState = await OneSignal.getDeviceState();
    console.log("devchc", deviceState?.userId);
    setDeviceId(deviceState?.userId);
  };
  const [values, setValues] = useState({
    email: "",
    confirmEmail: "",
    password: "",
  });

  const OnSignup = async () => {
    const viladResponse = SignupForm(values, setShowError, setError);
    let deviceState = await OneSignal.getDeviceState();


    if (viladResponse) {

      const data = {
        email: values.email,
        password: values.password,
        deviceId: deviceState?.userId,
      };
      setLoading(true);


      UserSignup(data, async ({ isSuccess, response }: any) => {
        if (isSuccess) {
          let result = JSON.parse(response);
          console.log("ckdnckdnc", result);

          if (result.status) {
            setLoading(false);
            if (result?.errors) {
              setError(result?.message);
              setToastColor(colors.red);

              setShowError(true);
              setTimeout(() => {
                setShowError(false);
              }, 4000);
            } else {
              setToastColor(colors.green);
              setError(result?.msg);
              setShowError(true);
              setTimeout(() => {
                setShowError(false);
                navigation.navigate("ConfirmationCode", {
                  data: { email: values.email },
                });
              }, 2000);
            }
          } else {
            setLoading(false);
            setToastColor(colors.red);

            setError(result?.msg);
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
            }, 4000);
          }
        } else {
          setLoading(false);

          Alert.alert("Alert!", "Network Error.");
        }
      });


      // console.log("ckbdckdbc",response)

  
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Image
        source={images.lightBackground}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: windowWidth,
          height: windowHeight,
        }}
      />
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1, padding: scale(20) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={images.back} />
            </TouchableOpacity>
            <Spacer height={verticalScale(10)} />
            <Image
              style={{
                width: windowWidth / 3.5,
                height: windowHeight / 5.7,
                alignSelf: "center",
              }}
              source={images.logo}
              resizeMode="contain"
            />
            <NewText
              text={"Create Account"}
              color={colors.white}
              size={25}
              style={{ textAlign: "center" }}
              fontFam="Poppins-Medium"
              fontWeight="500"
            />
            <Spacer height={10} />

            <Input
              label="Email"
              value={values.email}
              onChangeText={(txt: string) => {
                setValues({ ...values, email: txt });
              }}
              placeholder="Enter your email address"
            />
            <Spacer height={7} />
            <Input
              label="Confirm Email"
              value={values.confirmEmail}
              onChangeText={(txt: string) => {
                setValues({ ...values, confirmEmail: txt });
              }}
              placeholder="Confirm your email address"
            />
            <Spacer height={7} />
            <Input
              label="Password"
              isPassword={showPassword}
              value={values.password}
              onChangeText={(txt: string) => {
                setValues({ ...values, password: txt });
              }}
              onShowPassword={() => setShowPAssword(!showPassword)}
              placeholder="At least 6 characters"
              source={showPassword ? images.eyeclose : images.eye}
            />
            <Spacer height={15} />

            <View>
              <View style={{ ...appStyles.row }}>
                <NewText
                  text={"By tapping Continue, you agree to Status’s"}
                  color={colors.white}
                  size={11}
                  style={{ textAlign: "center" }}
                  fontFam="Poppins-Medium"
                  fontWeight="500"
                />
                <Spacer width={3} />
                <TouchableOpacity>
                  <NewText
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
                  <NewText
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
                <NewText
                  text={"and"}
                  color={colors.white}
                  size={11}
                  fontFam="Poppins-Medium"
                  fontWeight="500"
                />
                <Spacer width={3} />

                <TouchableOpacity>
                  <NewText
                    text={"Privacy Policy."}
                    textDecorationLine={"underline"}
                    color={colors.white}
                    size={11}
                    style={{ marginLeft: 3 }}
                    fontFam="Poppins-Medium"
                    fontWeight="500"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Spacer height={25} />

            <Button
              text="CONTINUE"
              width={"100%"}
              onPress={OnSignup}
              fontWeight={"500"}
              textColor={colors.black}
              bgColor={colors.white}
            />
            <Spacer height={25} />

            <View style={{ height: 1, backgroundColor: colors.white }} />
            <Spacer height={20} />
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Login")}
              style={{
                ...appStyles.row,
                justifyContent: "center",
                paddingVertical: verticalScale(5),
                width: "65%",
                alignSelf: "center",
              }}
            >
              <NewText
                text={"Already a member?"}
                color={colors.white}
                // size={11}
                style={{ textAlign: "center" }}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
              <Spacer width={5} />
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Login")}
              >
                <NewText
                  text={"Log In here"}
                  color={colors.white}
                  // size={11}
                  textDecorationLine={"underline"}
                  style={{ textAlign: "center" }}
                  fontFam="Poppins-Medium"
                  fontWeight="500"
                />
              </TouchableOpacity>
            </TouchableOpacity>
            {/* <ErrorToast
          text="Invalid email address"
          /> */}
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>

      {showError && (
        <CustomToast
          showError={showError}
          setShowError={setShowError}
          text={error}
          bgColor={toastColor}
        />
      )}
    </>
  );
};

export default Signup;
