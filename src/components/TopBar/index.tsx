import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";
import { verticalScale } from "react-native-size-matters";
import { windowWidth } from "../../utils/Dimensions";

const TopBar = ({ activeBar, setActiveBar, topBarData }: any) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {topBarData.map((item, index) => {
          return (
            <View style={{ alignItems: "center",}}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setActiveBar(item)}
              >
                <CustomText
                  color={ colors.white}
                  text={item}
                  size={verticalScale(18)}
                  fontWeight={"500"}
                  fontFam="Poppins-Regular"
                />
              </TouchableOpacity>
              <Spacer height={verticalScale(5)} />

              <View
                style={{
                  width: windowWidth/2.2,
                  height: verticalScale(3),
                  backgroundColor:
                    activeBar == item ? colors.white : colors.black200,
                }}
              ></View>
            </View>
          );
        })}

      </View>
      {/* <View style={{width:windowWidth/1,height:2,backgroundColor:colors.black200,marginTop:verticalScale(-2)}}></View> */}

    </View>
  );
};
export default TopBar;
