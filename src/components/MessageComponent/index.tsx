import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { windowWidth } from "../../utils/Dimensions";
import { appStyles } from "../../utils/AppStyles";

type Props = {
  name?: string;
  image?: any;
  time?: string;
  message?: string;
  chatDate?: string;
  comments?: boolean;
  profile?: boolean;
  edit?: boolean;
  onEdit?: () => void;
};

const MessagesComponent = ({
  name,
  image,
  time,
  message,
  chatDate,
  comments,
  profile,
  edit,
  onEdit,
}: Props) => {
  return (
    <View>
      {chatDate && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginVertical: 8,
          }}>
          <View
            style={{
              borderTopWidth: 0.4,
              width: windowWidth / 3,
              borderColor: colors.lightgray,
            }}
          />
          <CustomText
            style={{ marginHorizontal: 12 }}
            text={chatDate}
            color={colors.lightgray}
            size={13}
            fontFam="Poppins-Bold"
            fontWeight="700"
          />
          <View
            style={{
              borderTopWidth: 0.4,
              width: windowWidth / 3,
              borderColor: colors.lightgray,
            }}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: comments ? colors.black300 : colors.black,
          borderRadius: 12,
        }}>
        <View style={{ width: 62, height: 62 }}>
          <Image
            style={{ width: "100%", height: "100%", borderRadius: 10 }}
            source={image}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: windowWidth / 1.4,
            }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <CustomText
                text={name}
                color={colors.white}
                size={15}
                fontFam="Poppins-Bold"
                fontWeight="800"
              />
              <CustomText
                text={"."}
                color={colors.grey400}
                size={24}
                fontFam="Poppins-Regular"
                style={{
                  marginTop: -12,
                  marginHorizontal: 8,
                }}
              />
              <CustomText
                text={time}
                color={colors.lightgray}
                size={13}
                fontFam="Poppins-Regular"
              />
            </View>
            {!profile && (
              <TouchableOpacity style={appStyles.row}>
                {edit && (
                  <TouchableOpacity
                    style={{ marginRight: 7 }}
                    activeOpacity={0.6}
                    onPress={onEdit}>
                    <CustomText color={colors.lightgray} text={"Edit"} />
                  </TouchableOpacity>
                )}

                <CustomText color={colors.lightgray} text={"Reply"} />
              </TouchableOpacity>
            )}
          </View>
          <CustomText
            text={message}
            color={profile ? colors.gray500 : colors.white}
            size={15}
            style={{ width: windowWidth / 1.5, marginTop: 3 }}
            fontFam="Poppins-Medium"
            fontWeight={profile ? "600" : "500"}
          />
        </View>
      </View>
    </View>
  );
};

export default MessagesComponent;

const styles = StyleSheet.create({});
