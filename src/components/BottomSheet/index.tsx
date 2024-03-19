import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useMemo, useCallback } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useFocusEffect } from "@react-navigation/native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { scale, verticalScale } from "react-native-size-matters";

const BottomSheet = (props) => {
  const { bottomSheetModalRef, snapTo, onDismiss, children } = props;

  const snapPoints = useMemo(() => snapTo || [ "82%"], []);

  useFocusEffect(
    useCallback(() => {
      return () => {
        bottomSheetModalRef.current?.close();
      };
    }, [])
  );

  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      backdropComponent={(props) => <Backdrop {...props} bottomSheetModalRef={bottomSheetModalRef} />}
      snapPoints={snapPoints}
      
    
      backgroundStyle={{backgroundColor:"#1D2029",borderRadius:scale(20),marginHorizontal:scale(5)}}
      onDismiss={props?.onDismiss}
      children={() => (
        <SafeAreaView>
          <ScrollView style={{ paddingTop: verticalScale(20), paddingBottom: verticalScale(20), }}>{children}</ScrollView>
        </SafeAreaView>
      )}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ backgroundColor: "#FFFFFF" }}
    />
  );
};

const Backdrop = ({ animatedIndex, bottomSheetModalRef, style }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [1, 1],
      [1, 1],
      Extrapolate.CLAMP
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.6)",
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View onTouchStart={() => bottomSheetModalRef.current?.close()} style = { containerStyle } />;
};

export default BottomSheet;
