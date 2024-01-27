import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { Spacer } from "../Spacer";


const TopBar = ({
  activeBar,
    setActiveBar,
}:any) => {

  
  
  return (
    <View>
      <View style={{ flexDirection:"row",alignItems:"center",justifyContent:"center", paddingHorizontal5:0 }}>
        {
          ["Friends","My Updates"].map((item,index)=>{
            return(
              <View style={{alignItems:"center",marginHorizontal:20}}>

<TouchableOpacity activeOpacity={0.6} onPress={() => setActiveBar(item)}>
          <CustomText
            color={activeBar==item?  colors.white:colors.white}
            text={ item}
            size={16}
            fontWeight={"600"}
            fontFam="Poppins-Medium"
          />
        </TouchableOpacity>
        <Spacer height={8}/>

        <View
                style={{
                  width: 93,
                  height: 3.2,
                  backgroundColor:activeBar==item?  colors.white:colors.black,
                  borderRadius: 30,
                }}>
      
                </View>
                </View>

            )
          })
        }
       

       
      </View>

    
    </View>
  );
};
export default TopBar;
