import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
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
  onChangeCountry?:any
  countryFlag?:string
  maxLength?:number
  onChangeFormattedText?:any
  leftSource?:any
};

const CustomTextInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
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
  leftSource
}: Props) => {
  return (
    <View style={{ ...props,marginTop:15 }}>
      <View style={{ flexDirection: "row" }}>
        <CustomText
        fontWeight={"600"}
        fontFam="Poppins-Medium"
        size={15}
        style={{marginBottom:10}}

         text={label} color={colors.white} />
        
        
      </View>
    
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            borderRadius:10,
            backgroundColor:colors.primary
          }}
        >
          {leftSource && (
            <View
             
              style={{ justifyContent: "center", alignItems: "center",marginRight:10 }}
            >
              <Image
                source={leftSource}
                style={{
                  width: 25,
                  height: 25,
                  tintColor:"#CCCCCC"
                }}
                resizeMode={"contain"}
              />
            </View>
          )}
          <View style={{ flex: 1 }}>
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize: 15,
                height: 53,
                color: color || colors.grey400,
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              placeholderTextColor={colors.grey400}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
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
