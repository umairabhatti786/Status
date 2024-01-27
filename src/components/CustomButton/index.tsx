import { Pressable, Text, TouchableOpacity, View,ActivityIndicator } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { appStyles } from "../../utils/AppStyles";

type Props = {
  text?: string;
  onPress?: any;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  elevation?: number;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  notRequiredShadow?: boolean;
  disable?: boolean;
  isLoading?: boolean;
};

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.9}
      style={{
        ...style,
        width: width || "100%",
        height: height || 50,
        backgroundColor: bgColor || colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: borderRadius || 12,
        borderWidth: 2,
        borderColor: borderColor || colors.primary,
      }}
    >
      {isLoading ? (
        <>
              <ActivityIndicator size={"large"} color={colors.white} />

        </>
      ) : (
        <CustomText
          text={text}
          color={textColor || colors.white}
          fontWeight={500}
          size={size || disable ? 15 : 18}
          fontFam={fontFam ||"sf-pro-text-semibold"}
        />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
