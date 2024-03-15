import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { scale, verticalScale } from "react-native-size-matters";
import sizeHelper from "../../../utils/helpers/sizeHelper";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import { images } from "../../../assets/images";

const EmailFormInput = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPAssword] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <CustomTextInput label="Email" placeholder="Enter your email address" />
      <Spacer height={7} />
      <CustomTextInput
        label="New Email"
        placeholder="Enter new email address"
      />
      <Spacer height={7} />
      <CustomTextInput
        label="Confirm New Email"
        placeholder="Retype your email address"
      />
      <Spacer height={7} />
      <CustomTextInput
        label="Password"
        isPassword={showPassword}
        onShowPassword={() => setShowPAssword(!showPassword)}
        placeholder="Your Status password"
        source={showPassword ? images.eyeclose : images.eye}
      />
      <Spacer height={7} />
    </View>
  );
};

export default EmailFormInput;

const styles = StyleSheet.create({
  rowConttainer: {
    height: verticalScale(50),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
});
