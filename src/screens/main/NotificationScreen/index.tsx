import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { appStyles } from "../../../utils/AppStyles";
import { images } from "../../../assets/images";
import { Spacer } from "../../../components/Spacer";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { windowWidth } from "../HomeScreen/FriendList";
import ReceiveRequestCard from "../../../components/ReceiveRequestCard";
import { useNavigation } from "@react-navigation/native";
import ActivityCard from "../../../components/ActivityCard";
import { activityData } from "../../../utils/Data";
import CustomLine from "../../../components/CustomLine";
import AbsoluteHeader from "../../../components/AbsoluteHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomButton from "../../../components/CustomButton";
import { scale, verticalScale } from "react-native-size-matters";
const Notifications = () => {
  const navigation: any = useNavigation();
  const [request, setRequest] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);

  const filterData = ["All", "Follows", "Comments"];

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <ActivityCard
          image={item?.image}
          time={item?.time}
          name={item?.name}
          isShowFollow={item.isShowFollow}
          comment={item?.comment}
        />
      </View>
    );
  };

  return (
    <View style={appStyles.main}>
      <AbsoluteHeader>
        <TouchableOpacity
          style={{ width: "10%" }}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{ width: wp(4.6), height: hp(2.6) }}
            resizeMode="contain"
            source={images.back}
          />
        </TouchableOpacity>
        <CustomText
          fontWeight="600"
          color={colors.white}
          fontFam="Poppins-Medium"
          size={18}
          text={"Notifications"}
        />
        <CustomText color={"transparent"} size={18} text={"sss"} />
      </AbsoluteHeader>

      <View
        style={{
          ...appStyles.row,
          marginVertical: verticalScale(13),
          marginLeft: scale(10),
        }}
      >
        {filterData.map((item, index) => {
          return (
            <View style={{ marginRight: 7 }}>
              <CustomButton
                onPress={() => setActiveFilter(index)}
                height={32}
                fontFam={"Inter-Regular"}
                fontWeight={"400"}
                borderRadius={9}
                paddingHorizontal={18}
                size={17}
                textColor={
                  activeFilter == index ? colors.black100 : colors.white
                }
                bgColor={activeFilter == index ? colors.white : colors.primary}
                text={item}
              />
            </View>
          );
        })}
      </View>

      <View style={{ padding: scale(15) }}>
        {/* <Spacer height={25} /> */}
        <FlatList
          data={
            activeFilter == 0
              ? activityData
              : activeFilter == 1
              ? activityData.filter((item) => item.isShowFollow)
              : activityData.filter((item) => !item.isShowFollow)
          }
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  tab: {
    width: windowWidth / 2,
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 3,
    borderBottomColor: colors.black200,
  },
  sentRequest: {
    textDecorationLine: "underline",
  },
});
