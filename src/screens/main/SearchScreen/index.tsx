import React, { useEffect } from "react";
import { Alert, LogBox, StyleSheet, View, Text } from "react-native";
import { colors } from "../../../utils/colors";





const SearchScreen = () => {

  return (
<View style={{flex:1,backgroundColor:colors.black,alignItems:"center",justifyContent:"center"}}> 
    <Text style={{color:colors.white,fontSize:25}}>Search</Text>
 </View>

    
  );
};

export default  SearchScreen
