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
  Linking,
  Platform,
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
import NewText from "../../../components/NewText";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import ImagePicker from "react-native-image-crop-picker";
import { openSettings } from "react-native-permissions";
import { usePermissions } from "../../../utils/Permissions";
import CustomToast from "../../../components/CustomToast";
import Loader from "../../../components/Loader";
import { UserProfileSetup } from "../../../api/ApiServices";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface props {
  route: any;
}
const ProfileSetup = ({ route }: props) => {
  const navigation: any = useNavigation();
  const [activeGender, setActiveGender] = useState(1);
  const { requestGalleryPermission } = usePermissions();
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [toastColor,setToastColor]=useState(colors.red)

  const  token=route?.params?.token

  // 23|3UGmrNTv6NKeaymPN3gH26ALkKfWd31hrNwoY2Jh56d31b92

  const [imageFile,setImageFile]=useState({})

  const [values, setValues] = useState({
    name: "",
    location: "",
    lat: "31.5204",
    long: "74.3587",
   
  });


  const onOpenGallery = async () => {
    let gallerypermission = await requestGalleryPermission();
    if (gallerypermission == "granted" || gallerypermission == "limited") {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        mediaType: "photo",
        forceJpg: true,
      }).then(async (result) => {
        if (result) {
          const fileName = result?.path?.split("/").pop();
          let data = {
            ...result,
            fileName: fileName,
            name: fileName,
            size: result?.size,
            height: result?.height,
            type: result?.mime,
            uri: result?.path,
            width: result?.width,
          };
          setImageFile(data)

          // setImage(result?.path);
        }
      });
    } else {
      if (gallerypermission == "blocked") {
        if (Platform.OS == "ios") {
          openSettings();
        } else {
          Linking.openSettings();
        }
      }
    }
  };
  const onSaveProfile = () => {
    if (!values?.name) {
      setError("Name is Required");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 4000);

      return;
    }
    if (!values?.location) {
      setError("Location is Required");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 4000);

      return;
    }
    if (!imageFile.uri) {
      setError("Image is Required");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 4000);

      return;
    }
    setLoading(true);

    
    const form=new FormData()
    form.append("name", values.name);
    form.append("imageUrl", imageFile);
    form.append("location", values?.location);
    form.append("lat", values?.lat);
    form.append("long", values?.long);


    UserProfileSetup(form,token, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        console.log("responseData",result)
        if (result.status) {
          setLoading(false);
          setToastColor(colors.green)
            setError("Profile Setup is Completed");
            setShowError(true);
            setTimeout(() => {
              setShowError(false);
              navigation.navigate("Login", {
            
              });
                        }, 2000);
      
        } else {
          setLoading(false);
          setToastColor(colors.red)
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
    // setTimeout(() => {
    //   setLoading(false)

    // }, 2000);
  };
  return (
    <>
      {loading && <Loader />}

<KeyboardAwareScrollView
  showsVerticalScrollIndicator={false}
  style={{ flex: 1, backgroundColor: colors.black }}
  // extraScrollHeight={-100}
>

      <SafeAreaView style={appStyles.main}>
        <View style={{ flex: 1, padding: scale(20) }}>
          <Spacer height={verticalScale(30)} />

          <CustomText
            text={"Profile Setup"}
            color={colors.white}
            size={21}
            style={{ textAlign: "center" }}
            fontFam="Poppins-Medium"
            fontWeight="500"
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              width: scale(72),
              height: scale(72),
              borderRadius: scale(5),
              backgroundColor: colors.grey600,
              alignSelf: "center",
              marginVertical: verticalScale(10),
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <TouchableOpacity>
              <Image
                style={{
                  width: scale(58),
                  height: scale(58),
                  borderRadius: scale(58),
                }}
                source={imageFile.path ? { uri: imageFile.path } : images.defuser}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} onPress={onOpenGallery}>
            <NewText
              text={"Upload Profile Photo"}
              color={colors.white}
              size={15}
              textDecorationLine="underline"
              style={{ textAlign: "center" }}
              fontWeight="400"
            />
          </TouchableOpacity>

          <Spacer height={15} />

          <Input label="Display Name" 
          placeholder="Enter your name or handle"
          value={values.name}
          onChangeText={(txt: string) => {
            setValues({ ...values, name: txt });
          }}
           />
          <Spacer height={7} />

          <Input
            label="Your Location"
            leftSource={images.location}
            placeholder="Enter where you live for your profile"
            value={values.location}
            onChangeText={(txt: string) => {
              setValues({ ...values, location: txt });
            }}
          />

          <Spacer height={verticalScale(30)} />

           <Button
            text="LET ME IN"
            onPress={onSaveProfile}
            width={"100%"}
            fontWeight={"500"}
            textColor={colors.black}
            bgColor={colors.white}
          /> 
           <View style={{ marginVertical: verticalScale(25) }}>
            <View style={appStyles.row}>
              <NewText
                text={"By tapping “Let me In,” you agree to Status’s"}
                color={colors.white}
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
                  fontFam="Poppins-Medium"
                  fontWeight="500"
                />
              </TouchableOpacity>
              <Spacer width={3} />
              <NewText
                text={"and"}
                color={colors.white}
                fontFam="Poppins-Medium"
                fontWeight="500"
              />
              <Spacer width={3} />

              <TouchableOpacity>
                <NewText
                  text={"Privacy Policy."}
                  textDecorationLine={"underline"}
                  color={colors.white}
                  style={{ marginLeft: 3 }}
                  fontFam="Poppins-Medium"
                  fontWeight="500"
                />
              </TouchableOpacity>
            </View>
          </View> 
        </View>
      </SafeAreaView>

      </KeyboardAwareScrollView>


      {showError && (
        <CustomToast
          showError={showError}
          setShowError={setShowError}
          bgColor={toastColor}
          text={error}
        />
      )}
    </>
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
