import { Text, TouchableOpacity, View, Image } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import { images } from "../../assets/images";
import sizeHelper from "../../utils/helpers/sizeHelper";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


type Props = {
  title?: string;
  onPressSetting?: any;
  onPressNotification?: any;
};

const TopHeader = ({ title, onPressSetting, onPressNotification }: Props) => {
  return (
    <View style={{...appStyles.rowjustify,height:verticalScale(40),}}>
      <View style={appStyles.row}>
        <TouchableOpacity onPress={onPressNotification}>
          <Image
            style={{ width: sizeHelper.calWp(50), height: sizeHelper.calHp(50) }}
            source={images.bell}
            // resizeMode="contain"
          />
          <View
            style={{
              position: "absolute",
              width:verticalScale(20) ,height: verticalScale(20),
              borderRadius: verticalScale(18),
              backgroundColor: colors.white,
              right: scale(-8),
              bottom: verticalScale(8),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomText
              text={"8"}
              color={colors.black}
              size={sizeHelper.calHp(25)}
              fontFam="Poppins-Medium"
              // fontWeight="Poppins-Bold"
            />
          </View>
        </TouchableOpacity>
        {/* <Spacer width={15} />

        <Spacer width={15} />

        <TouchableOpacity>
          <Image
            style={{ width: 23, height: 23 }}
            source={images.edit}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
      </View>

      {/* <CustomText
        text={title || "Chats"}
        color={colors.white}
        size={27}
        fontWeight="700"
        fontFam="SF-Pro-Display-Bold"
      /> */}

      <TouchableOpacity>
        <Image
            style={{ width: sizeHelper.calWp(50), height: sizeHelper.calHp(50) }}
            source={images.appicon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSetting}>
        <Image
            style={{ width: sizeHelper.calWp(45), height: sizeHelper.calHp(45) }}
            source={images.setting}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
export default TopHeader;
