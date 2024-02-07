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
import { Spacer } from "../../../components/Spacer";
import CustomLine from "../../../components/CustomLine";
import CustomTextInput from "../../../components/CustomTextInput";

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
        <View
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
        </View>
        <CustomLine backgroundColor={colors.primary} height={1.5} />

        <CustomText
          style={{ textAlign: "center", marginVertical: 12 }}
          size={18}
          color={colors.white}
          fontWeight={"600"}
          text={"Privacy Settings"}
        />
        <CustomLine backgroundColor={colors.primary} height={1.5} />

        <View style={{ marginHorizontal: 10 }}>
          <CustomTextInput
            // disabled={active === 1 || active === 2 ? true : false}
            items={items}
            // onOpen={() => setActive(3)}
            // onClose={() => setActive(0)}
            setItems={setItems}
            // dropdownValue={dropdownValueEducation}
            // setDropdownValue={setDropdownValueEducation}
            label="Who can message you?"
            dropdown={true}
            marginTop={"7%"}
            open={open}
            setOpen={setOpen}
          />
        </View>

        {/* <DropDownPicker
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
        /> */}
        <View style={{ marginTop: 20 }} />

        <CustomLine backgroundColor={colors.primary} height={1.5} />

        <CustomText
          style={{ textAlign: "center", marginVertical: 12 }}
          size={18}
          color={colors.white}
          fontWeight={"600"}
          text={"Notification Settings"}
        />
        <CustomLine backgroundColor={colors.primary} height={1.5} />

        <View style={{ padding: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 25,
            }}>
            <CustomText size={17} color={colors.white} text={"In App"} />
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
            }}>
            <CustomText size={17} color={colors.white} text={"Email"} />
            <ToggleSwitch
              isOn={email}
              onColor={colors.sky}

              offColor={colors.gray1}
              size="small"
              onToggle={setEmail}
            />
          </View>
        </View>
        <CustomLine 
        backgroundColor={colors.primary}
        height={1.5}
        
        />
     
        <CustomText
          style={{ textAlign: "center", marginVertical: 12 }}
          size={18}
          color={colors.white}
          fontWeight={"600"}
          text={"Follow the Founder"}
        />
  <CustomLine 
        backgroundColor={colors.primary}
        height={1.5}
        
        />
        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            marginVertical: 15,
          }}>
          <Image source={images.insta}
          style={{width:30,height:30}}
           />
          <Image style={{ marginLeft: "8%",width:30,height:30 }} source={images.youtube} />
        </View>
        <CustomLine 
        backgroundColor={colors.primary}
        height={1.5}
        
        />
     
        <CustomText
          style={{ textAlign: "center", marginVertical: 12 }}
          size={18}
          color={colors.white}
          fontWeight={"600"}
          text={"Account"}
        />
  <CustomLine 
        backgroundColor={colors.primary}
        height={1.5}
        
        />
        <CustomText
          style={{ textAlign: "center", marginTop: "7%" }}
          size={18}
          color={colors.grey400}
          text={"Delete Account"}
        />
        <CustomText
          style={{ textAlign: "center", marginTop: "10%" }}
          size={18}
          color={colors.grey400}
          text={"Sign out"}
        />
      </ScrollView>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black300,
    alignItems: "center",
    paddingTop: "18%",
    paddingBottom: "7%",
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
