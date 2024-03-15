import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
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
import { scale, verticalScale } from "react-native-size-matters";
import ToggleSwitch from "toggle-switch-react-native";

const EditProfile = () => {
  const navigation: any = useNavigation();
  const [male, setMale] = useState(false);
  const [doesApply, setDoesApply] = useState(false);
  const [selectedGender,setSelectedGender]=useState(0)

  const [active, setActive] = React.useState(0);
  const [isToggle,setIsToggle]=useState(true)
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
            <StatusBar backgroundColor="#000" barStyle="light-content" />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft:scale(20),
          paddingRight:scale(10),
          paddingTop:verticalScale(10)
          // padding:10
     
        }}
      >
        <TouchableOpacity
        style={{width:"10%"}}
         onPress={() => navigation.goBack()}>
          <Image source={images.back} />
        </TouchableOpacity>
        <CustomText
          fontWeight="700"
          color={colors.white}
          size={18}
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
        <View style={{paddingHorizontal:scale(20),            marginTop: "10%",
}}>

      <View
              style={appStyles.rowjustify}
            >
              <CustomText
                size={16}
                fontWeight="600"
                fontFam="Poppins-Medium"
                color={colors.white}
                text={"Enable Wall Comments?"}
              />
              <ToggleSwitch
                isOn={isToggle}
                onColor={colors.sky}
                offColor={colors.grey300}
                size="small"
                onToggle={setIsToggle}
                thumbOnStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                thumbOffStyle={{ width: 17, height: 17, borderRadius: 9999 }}
                trackOffStyle={{width: 46, height:25,}}
                trackOnStyle={{ width:46, height: 25 }}
              />
            </View>


        <View
          style={{...appStyles.rowjustify,            marginTop: "9%",
          marginBottom:verticalScale(10)
        }}
        >
          <CustomText
            fontWeight="600"
            color={colors.white}
            size={19}
            fontFam="Poppins-Medium"
            text={"Channel Wallpaper"}
          />
          <CustomText color={colors.white} size={17} text={"Add"} />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderRadius: scale(7),
            borderColor: colors.white,
            alignItems: "center",
            borderStyle: "dashed",
            height: windowHeight / 4,
            justifyContent: "center",
          }}
        >
          <Image style={{ width: 16, height: 16 }} source={images.add} />
        </View>


        <View
          style={{...appStyles.rowjustify,            marginTop: "10%",
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
            borderRadius: scale(5),
            borderColor: colors.white,
            alignItems: "center",
            borderStyle: "dashed",
            // marginHorizontal: 18,
            height: scale(99),
            width: scale(99),
            justifyContent: "center",
            marginTop: verticalScale(10),
          }}
        >
          <Image style={{ width: 14, height: 14 }} source={images.add} />
        </View>


        <View
          style={{...appStyles.rowjustify,
            marginTop: "7%",
            marginBottom:verticalScale(15)
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
          style={appStyles.rowjustify}
        >
          <Image
            style={{
              width: "48.5%",
              height: windowHeight / 4,
              borderRadius: 8,
            }}
            source={images.defimage2}
          />
          <Image
            style={{
              width: "48.5%",
              height: windowHeight / 4,
              borderRadius: 8,
            }}
            source={images.defimage4}
          />
        </View>

        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderColor: colors.white,
            marginVertical: "8%",
          }}
        />
        <View style={{paddingHorizontal:scale(20)}}>
          <CustomText
            fontWeight="700"
            color={colors.white}
            size={19}
            text={"Your Info"}
          />
        
        <CustomTextInput
          label="Display Name"
          value={"Lauren Connors"}
          placeholder="Name"
          color={colors.white}
          fontWeight="600"
          marginTop={"8%"}
        />

<CustomText
            style={{ marginTop: "7%" }}
            color={colors.white}
            
            size={15}
            text={"Gender"}
          />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "5%",
            marginTop: "3%",
          }}
        >
          {
            ["Female","Male","Does not apply "].map((item,index)=>{
              return(
                <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>setSelectedGender(index)} 
                 style={{ flexDirection: "row", alignItems: "center",marginRight:"5%" }}>
            <TouchableOpacity
            activeOpacity={0.6}
             onPress={()=>setSelectedGender(index)} style={styles.radioButton}>
              <View>{selectedGender==index && <View style={styles.radioButtonInner} />}</View>
            </TouchableOpacity>
            <CustomText color={colors.white} size={13} text={item} />
          </TouchableOpacity>

              )
            })
          }
          
         
        </View>
        <CustomTextInput
          label="Your Birthday"
          value={"05/24/77"}
          labelSize={15}
          placeholder="Email"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <CustomTextInput
          label="Your Location"
          labelSize={15}

          value={"Los Angeles, CA"}
          placeholder="Email"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
        <CustomTextInput
                  labelSize={15}

          label="Occupation"
          value={"Model, Actress"}
          placeholder="Occupation"
          color={colors.white}
          fontWeight="600"
          marginTop={"7%"}
        />
      
        <CustomTextInput
                  labelSize={15}

          label="Bio"
          value={
            "see my latest content using the link below ⚡️ bookings & inquiries email thaer@princemarketinggroup.com"
          }
          placeholder="Bio"
          color={colors.white}
          fontWeight="600"
          multiline={true}
          height={85}
          marginTop={"7%"}
        />
           <CustomTextInput
                  labelSize={15}

          label="Your Link"
          value={"link.me/carmenelectra"}
          placeholder="Your Link"
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
    width: scale(18),
    height: scale(18),
    borderRadius: scale(18),
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioButtonInner: {
    width: scale(10),
    height: scale(10),
    borderRadius: scale(12),
    backgroundColor: "white",
  },
});
