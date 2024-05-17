import { BlurView, VibrancyView } from "@react-native-community/blur";
import React from "react";
import {
  ScrollView,
  Text,
  useWindowDimensions,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  TextInput,
} from "react-native";
import Modal from "react-native-modal";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomLine from "../CustomLine";
import { Spacer } from "../Spacer";

interface Props {
  isModalVisible?: boolean;
  setModalVisible?: any;
  children?: React.ReactNode;
  backdropStyle?: any;
  paddingTop?: any;
  justifyContent?: any;
  setActiveChat?: any;
  imageData?: any;
}

const ImageUploaderModal: React.FC<Props> = ({
  isModalVisible,
  setModalVisible,
  children,
  backdropStyle,
  justifyContent,
  paddingTop,
  setActiveChat,
  imageData,
}) => {
  console.log("imageData", imageData);
  const windowWidth = useWindowDimensions().width;

  return (
    <Modal
      style={{
        ...styles.modalContainer,
        justifyContent: justifyContent || "flex-start",
      }}
      deviceWidth={windowWidth}
      isVisible={isModalVisible}
      onBackButtonPress={() => setModalVisible?.(false)}
      onBackdropPress={() => setModalVisible?.(false)}
      backdropColor="transparent"
      customBackdrop={
        <Pressable
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: colors.black300,
          }}
          onPress={() => setModalVisible?.(false)}
        ></Pressable>
      }
    >
      <View
        style={{
          width: "101%",
          height: "100%",
          backgroundColor: colors.black300,
          borderTopLeftRadius: scale(20),
          borderTopRightRadius: scale(20),
          overflow: "hidden",
          justifyContent: "space-between",

          borderRightWidth: 1,
          borderColor: "#8A8A8A",
        }}
      >
        <View style={{ width: "100%", height: "87%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: imageData?.uri }}
          />

          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: `rgba(0, 0, 0, 0.4)`, // Apply opacity to the background color
              opacity: 0.5,
            }}
          />

          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              setModalVisible(false);
            }}
            style={{
              width: 35,
              height: 35,
              backgroundColor: colors.gray200,
              position: "absolute",
              top: 0,
              left: 0,
              margin: 20,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 999,
              padding: 5,
            }}
          >
            <Image
              style={{ width: 13, height: 13 }}
              source={images.crossicon}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            // borderColor: "#8A8A8A",
            marginBottom: verticalScale(20),
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 999,
              backgroundColor: colors.black,
              paddingHorizontal: scale(5),
              paddingVertical: verticalScale(3),
              width: "82%",
              alignSelf: "center",
            }}
          >
            <TextInput
              value={""}
              //   onChangeText={(text) =>
              //     // message
              //     //   ? setMsg({ ...msg, message: text })
              //     //   : setState({ ...state, description: text })
              //   }
              style={{
                marginLeft: 12,
                color: colors.white,
                paddingRight: 5,
                width: "90%",
                fontSize: verticalScale(16),
              }}
              placeholderTextColor={colors.gray200}
              placeholder={"Write a message"}
            />
          </View>

          <TouchableOpacity
            // onPress={message ? sendMessage : createPost}
            activeOpacity={0.6}
            style={{
              width: scale(45),
              height: scale(45),
              borderRadius: scale(45),
              backgroundColor: colors.sky,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.sendmessage}
              style={{ width: scale(25), height: scale(25) }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    backgroundColor: colors.black300,
  },
  imgContainer: {
    width: scale(25),
    height: scale(30),
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageUploaderModal;
