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

const Notifications = () => {
  const navigation: any = useNavigation();
  const [request, setRequest] = useState(false);

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <ActivityCard
          image={item?.image}
          time={item?.time}
          name={item?.name}
          comment={item?.comment}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={appStyles.main}>
      <Image
        style={{ width: 30, height: 30, alignSelf: "center" }}
        source={images.appicon}
      />
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => setRequest(false)}
          style={[
            styles.tab,
            { borderBottomColor: request ? colors.black200 : colors.white },
          ]}
        >
          <CustomText size={18} color={colors.white} text={"Activity"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRequest(true)}
          style={[
            styles.tab,
            { borderBottomColor: request ? colors.white : colors.black200 },
          ]}
        >
          <CustomText size={18} color={colors.white} text={"Requests"} />
        </TouchableOpacity>
      </View>
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

      {request ? (
        <View style={{ padding: 12 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Sent Request")}
            activeOpacity={0.5}
            style={{ marginTop: 4 }}
          >
            <CustomText
              color={colors.white}
              size={16}
              style={styles.sentRequest}
              text={"View Sent Request"}
            />
          </TouchableOpacity>
          <Spacer height={25} />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CustomText
              color={colors.white}
              size={16}
              text={"Friend Requests"}
            />
            <CustomText
              style={{ marginLeft: 10 }}
              color={colors.white}
              size={16}
              text={"1"}
              fontWeight="600"
            />
          </View>
          <Spacer height={22} />
          <ReceiveRequestCard image={images.man5} name="William Jhonson" />
        </View>
      ) : (
        <View style={{ padding: 12 }}>
          <TouchableOpacity activeOpacity={0.5} style={{ marginTop: 4 }}>
            <CustomText
              color={colors.white}
              size={16}
              style={styles.sentRequest}
              text={"Clear All Activity"}
            />
          </TouchableOpacity>
          <Spacer height={25} />
          <FlatList data={activityData} renderItem={renderItem} />
        </View>
      )}
    </SafeAreaView>
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
