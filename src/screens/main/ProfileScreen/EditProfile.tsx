import {
  Image,
  SafeAreaView,
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
import CustomButton from "../../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";

const EditProfile = () => {
  const navigation: any = useNavigation();
  const [male, setMale] = useState(false);
  const [active, setActive] = React.useState(0);
  const [itemsGender, setItemsGender] = useState([
    { label: "Straight", value: "Straight" },
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ]);
  const [dropdownValueGender, setDropdownValueGender] = useState("Straight");
  const [openGender, setOpenGender] = useState(false);
  const [items, setItems] = useState([
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
  ]);
  const [dropdownValue, setDropdownValue] = useState("Single");
  const [open, setOpen] = useState(false);
  const [itemsEducation, setItemsEducation] = useState([
    { label: "Bachelor’s Degree", value: "Bachelor’s Degree" },
    { label: "Secondary", value: "Secondary" },
    { label: "Master's Degree", value: "Master's Degree" },
  ]);
  const [dropdownValueEducation, setDropdownValueEducation] =
    useState("Bachelor’s Degree");
  const [openEducation, setOpenEducation] = useState(false);

  const handlePress = () => {
    setMale(false);
  };
  return (
    <SafeAreaView style={appStyles.main}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:10
     
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <CustomText
          fontWeight="700"
          color={colors.white}
          size={19}
          text={"Edit Your Profile"}
        />
        <CustomButton
          textColor={colors.black}
          bgColor={colors.white}
          width={75}
          height={35}
          text="Save"
          borderRadius={6}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "7%",
            padding: 12,
          }}
        >
          <CustomText
            fontWeight="700"
            color={colors.white}
            size={19}
            text={"Cover Photo"}
          />
          <CustomText color={colors.white} size={17} text={"Add"} />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 16,
            borderColor: colors.white,
            alignItems: "center",
            borderStyle: "dashed",
            marginHorizontal: 18,
            height: windowHeight / 5.6,
            justifyContent: "center",
          }}
        >
          <Image style={{ width: 16, height: 16 }} source={images.add} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "7%",
            padding: 12,
          }}
        >
          <CustomText
            fontWeight="700"
            color={colors.white}
            size={19}
            text={"Profile Pic"}
          />
          <CustomText color={colors.white} size={17} text={"Add"} />
        </View>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 6,
            borderColor: colors.white,
            alignItems: "center",
            borderStyle: "dashed",
            marginHorizontal: 18,
            height: 99,
            width: 99,
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <Image style={{ width: 14, height: 14 }} source={images.add} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "4%",
            padding: 12,
          }}
        >
          <CustomText
            fontWeight="700"
            color={colors.white}
            size={19}
            text={"Your GIFS"}
          />
          <TouchableOpacity
          activeOpacity={0.6}
          onPress={()=>navigation.navigate("EditGifs")}
          >
          <CustomText color={colors.white} size={17} text={"Edit"} />


          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Image
            style={{
              width: windowWidth / 2.15,
              height: windowHeight / 5,
              borderRadius: 8,
            }}
            source={images.defimage2}
          />
          <Image
            style={{
              width: windowWidth / 2.15,
              height: windowHeight / 5,
              borderRadius: 8,
            }}
            source={images.defimage4}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: colors.white,
            marginVertical: "8%",
          }}
        />
        <View style={{paddingHorizontal:10}}>
        <View >
          <CustomText
            fontWeight="700"
            color={colors.white}
            size={19}
            text={"Your Info"}
          />
          <CustomText
            style={{ marginTop: "7%" }}
            color={colors.white}
            
            size={16}
            text={"Gender"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "7%",
            marginTop: "3%",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={handlePress} style={styles.radioButton}>
              <View>{!male && <View style={styles.radioButtonInner} />}</View>
            </TouchableOpacity>
            <CustomText color={colors.white} size={17} text={"Female"} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: "7%",
            }}
          >
            <TouchableOpacity
              onPress={() => setMale(true)}
              style={styles.radioButton}
            >
              <View>{male && <View style={styles.radioButtonInner} />}</View>
            </TouchableOpacity>
            <CustomText color={colors.white} size={17} text={"Male"} />
          </View>
        </View>
        <CustomTextInput
          label="Display Name"
          value={"Lauren Connors"}
          placeholder="Name"
          color={colors.white}
          fontWeight="600"
          marginTop={"8%"}
        />
        <CustomTextInput
          label="Email"
          value={"Lauren242@gmail.com"}
          placeholder="Email"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <CustomTextInput
          label="Password"
          value={"*****"}
          placeholder="Password"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <CustomTextInput
          label="Your Location"
          value={"Boston, MA USA"}
          placeholder="Your Location"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <CustomTextInput
          label="Your Birthday"
          value={"8/24/1989"}
          placeholder="Your Birthday"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <CustomTextInput
          label="Bio"
          value={
            "Hi. I’m a hard working professional. I love what I do. I’m interested in networking with other professionals."
          }
          placeholder="Bio"
          color={colors.white}
          fontWeight="600"
          multiline={true}
          height={75}
          marginTop={"7%"}
        />
        <View style={{ zIndex: active === 1 ? 1 : 0 }}>
          <CustomTextInput
            disabled={active === 2 || active === 3 ? true : false}
            onOpen={() => setActive(1)}
            onClose={() => setActive(0)}
            items={itemsGender}
            setItems={setItemsGender}
            dropdownValue={dropdownValueGender}
            setDropdownValue={setDropdownValueGender}
            label="Sexual Orientation"
            dropdown={true}
            marginTop={"7%"}
            open={openGender}
            setOpen={setOpenGender}
          />
        </View>
        <View style={{ zIndex: active === 2 ? 1 : 0 }}>
          <CustomTextInput
            disabled={active === 1 || active === 3 ? true : false}
            items={items}
            onOpen={() => setActive(2)}
            onClose={() => setActive(0)}
            setItems={setItems}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
            label="Relationship Status"
            dropdown={true}
            marginTop={"7%"}
            open={open}
            setOpen={setOpen}
          />
        </View>
        <View style={{ zIndex: active === 3 ? 1 : 0 }}>
          <CustomTextInput
            disabled={active === 1 || active === 2 ? true : false}
            items={itemsEducation}
            onOpen={() => setActive(3)}
            onClose={() => setActive(0)}
            setItems={setItems}
            dropdownValue={dropdownValueEducation}
            setDropdownValue={setDropdownValueEducation}
            label="Education Level"
            dropdown={true}
            marginTop={"7%"}
            open={openEducation}
            setOpen={setOpenEducation}
          />
        </View>
        <CustomTextInput
          label="Occupation"
          value={"Software Engineer"}
          placeholder="Occupation"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <Spacer height={20}/>

        </View>
       
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  radioButton: {
    width: 22,
    height: 22,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonInner: {
    width: 14,
    height: 14,
    borderRadius: 99,
    backgroundColor: "white",
  },
});
