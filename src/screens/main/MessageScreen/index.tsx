import React, { useEffect } from "react";
import { Alert, LogBox, StyleSheet, View, Text } from "react-native";
import { colors } from "../../../utils/colors";





 const MessageScreen = () => {

  return (
<View style={{flex:1,backgroundColor:colors.black,alignItems:"center",justifyContent:"center"}}> 
    <Text style={{color:colors.white,fontSize:25}}>Message</Text>
 </View>

    
  );
};

export default  MessageScreen
