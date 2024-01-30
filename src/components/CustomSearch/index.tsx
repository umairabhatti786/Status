import { Pressable, Text, TouchableOpacity, View,ActivityIndicator, Image, TextInput } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { appStyles } from "../../utils/AppStyles";
import { images } from "../../assets/images";



const CustomSearch = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
}: any) => {
  return (
      <View style={{width:"100%",height:40,borderWidth:1,borderRadius:10,borderColor:colors.grey300,flexDirection:"row",alignItems:"center",paddingHorizontal:10,justifyContent:"space-between"}}> 
             <Image source={images.search1} />

      <TextInput
      placeholder="Search Members"
      placeholderTextColor={colors.white}
      style={{fontSize:16,fontFamily:"SF-Pro-Text-Regular",fontWeight:"400",color:colors.white,marginHorizontal:10,textAlign:"center",flex:1}}
      />

<Image
      style={{width:15,height:15}}
      source={images.cross}
      resizeMode="contain"
      />

      </View>
   
  );
};
export default CustomSearch;
