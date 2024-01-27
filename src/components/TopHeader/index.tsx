import { Text, TouchableOpacity, View, Image } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import { images } from "../../assets/images";

type Props = {
  title?: string;
};

const TopHeader = ({ title }: Props) => {
  return (
    <View style={appStyles.rowjustify}>
      <View style={appStyles.row}>
        <View>
          <Image
            style={{ width: 30, height: 30 }}
            source={images.bell}
            // resizeMode="contain"
          />
          <View
            style={{
              position: "absolute",
              width: 22,
              height: 22,
              borderRadius: 999,
              backgroundColor: colors.white,
              right: -12,
              bottom: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomText
              text={"8"}
              color={colors.black}
              size={14}
              fontFam="Poppins-Medium"
              // fontWeight="Poppins-Bold"
            />
          </View>
        </View>
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
          style={{ width: 27, height: 27 }}
          source={images.appicon}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={{ width: 25, height: 25 }}
          source={images.setting}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
export default TopHeader;
