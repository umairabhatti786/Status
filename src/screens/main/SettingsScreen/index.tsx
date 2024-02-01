import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { windowWidth } from "../../../utils/Dimensions";
import ToggleSwitch from "toggle-switch-react-native";

const Settings = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Everyone");
  const [inApp, setInApp] = useState(true);
  const [email, setEmail] = useState(true);
  const [items, setItems] = useState([
    { label: "Everyone", value: "Everyone" },
    { label: "Friends", value: "Friends" },
    { label: "No Body", value: "No Body" },
  ]);
  const CustomArrowIcon = () => (
    <View>
      <Image source={images.arrowdown} />
    </View>
  );
  return (
    <View style={appStyles.main}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <CustomText
          fontWeight="700"
          color={colors.white}
          size={18}
          text={"Settings"}
        />
        <CustomText color={"transparent"} size={18} text={"sss"} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CustomText
          style={{ textAlign: "center", marginTop: 10 }}
          size={17}
          color={colors.white}
          text={"Privacy Settings"}
        />
        <View style={styles.divider} />
        <CustomText
          style={{ marginLeft: 10 }}
          size={17}
          color={colors.white}
          text={"Who can message you?"}
        />
        <DropDownPicker
          style={styles.filter}
          dropDownContainerStyle={styles.dropdown}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          textStyle={{ color: colors.white }}
          ArrowDownIconComponent={CustomArrowIcon}
        />
        <View style={[styles.divider, { marginTop: 20 }]} />
        <CustomText
          style={{ textAlign: "center" }}
          size={17}
          color={colors.white}
          text={"Notification Settings"}
        />
        <View style={styles.divider} />
        <View style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <CustomText size={15} color={colors.white} text={"In App"} />
            <ToggleSwitch
              isOn={inApp}
              onColor={colors.sky}
              offColor={colors.gray1}
              size="small"
              onToggle={setInApp}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomText size={15} color={colors.white} text={"Email"} />
            <ToggleSwitch
              isOn={email}
              onColor={colors.sky}
              offColor={colors.gray1}
              size="small"
              onToggle={setEmail}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <CustomText
          style={{ textAlign: "center" }}
          size={17}
          color={colors.white}
          text={"Follow the Founder"}
        />
        <View style={styles.divider} />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          <Image source={images.insta} />
          <Image style={{ marginLeft: "8%" }} source={images.youtube} />
        </View>
        <View style={styles.divider} />
        <CustomText
          style={{ textAlign: "center" }}
          size={17}
          color={colors.white}
          text={"Account"}
        />
        <View style={styles.divider} />
        <CustomText
          style={{ textAlign: "center", marginTop: "7%" }}
          size={17}
          color={colors.gray200}
          text={"Delete Account"}
        />
        <CustomText
          style={{ textAlign: "center", marginTop: "10%" }}
          size={17}
          color={colors.gray200}
          text={"Sign out"}
        />
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black100,
    alignItems: "center",
    paddingTop: "18%",
    paddingBottom: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  divider: {
    borderTopWidth: 0.5,
    borderTopColor: colors.gray1,
    marginVertical: 10,
  },
  filter: {
    width: windowWidth / 1.05,
    marginTop: 4,
    alignSelf: "center",
    backgroundColor: colors.black100,
  },
  dropdown: {
    width: windowWidth / 1.05,
    alignSelf: "center",
    backgroundColor: colors.black100,
  },
});
