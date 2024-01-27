import React, { useEffect } from "react";
import { Alert, LogBox, StyleSheet, View, Text } from "react-native";
import { colors } from "../../../utils/colors";





 const ProfileScreen = () => {

  return (
<View style={{flex:1,backgroundColor:colors.black,alignItems:"center",justifyContent:"center"}}> 
    <Text style={{color:colors.white,fontSize:25}}>Profile</Text>
 </View>

    
  );
};

export default  ProfileScreen
