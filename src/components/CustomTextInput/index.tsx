import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { windowWidth } from "../../utils/Dimensions";
import DropDownPicker from "react-native-dropdown-picker";
import { images } from "../../assets/images";
type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  phoneInputValue?: any;
  setPhoneInputValue?: any;
  phoneInputRef?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  isPhoneField?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  complusory?: boolean;
  color?: string;
  onChangeCountry?: any;
  countryFlag?: string;
  maxLength?: number;
  onChangeFormattedText?: any;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  open?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
};

const CustomTextInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  dropdown,
  open,
  isPhoneField,
  phoneInputValue,
  setPhoneInputValue,
  phoneInputRef,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  complusory,
  color,
  onChangeCountry,
  countryFlag,
  maxLength,
  onChangeFormattedText,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
}: Props) => {
  const CustomArrowIcon = () => (
    <View>
      <Image source={images.arrowdown} />
    </View>
  );
  return (
    <View style={{ ...props, marginTop: marginTop || 15 }}>
      <View style={{ flexDirection: "row" }}>
        <CustomText
          fontWeight={"600"}
          fontFam="Poppins-Medium"
          size={15}
          style={{ marginBottom: 10 }}
          text={label}
          color={colors.white}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}
      >
        {leftSource && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: 25,
                height: 25,
                tintColor: "#CCCCCC",
              }}
              resizeMode={"contain"}
            />
          </View>
        )}
        <View style={{ flex: 1 }}>
          {dropdown ? (
            <DropDownPicker
              zIndex={zIndex}
              style={{
                width: windowWidth / 1.1,
                marginTop: 4,
                alignSelf: "center",
                backgroundColor: "transparent",
                borderColor: "transparent",
              }}
              dropDownContainerStyle={{
                width: windowWidth -15,
                alignSelf: "center",
                borderColor: colors.black,
                backgroundColor: colors.primary,
              }}
              open={open}
              
              disabled={disabled}
              onOpen={onOpen}
              onClose={onClose}
              value={dropdownValue}
              items={items}
              setOpen={setOpen}
              setValue={setDropdownValue}
              setItems={setItems}
              textStyle={{ color: colors.white,fontSize:15 }}
              ArrowDownIconComponent={CustomArrowIcon}
            />
          ) : (
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: 15,
                width: windowWidth / 1.2,
                height: height || 53,
                fontFamily:"Poppins-Regular",
                fontWeight: fontWeight,
                color: color || colors.grey400,
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              multiline={multiline}
              placeholderTextColor={colors.grey400}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
          )}
        </View>
        {source && (
          <TouchableOpacity
            onPress={onShowPassword}
            activeOpacity={0.6}
            disabled={!onShowPassword}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={source}
              style={{
                width: 22,
                height: 22,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CustomTextInput;
