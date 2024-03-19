import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState, version } from "react";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import { useNavigation, useRoute } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import CustomButton from "../../../components/CustomButton";
import MessagesComponent from "../../../components/MessageComponent";
import { profileComments } from "../../../utils/Data";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import SizeBar from "../../../components/SizeBar";
import CustomModal from "../../../components/CustomModal";
import BlockModal from "./BlockModal";
import Channel from "../Channel";

const OthersProfile = () => {
  const route: any = useRoute();
  const item = route?.params?.item;
  const navigation: any = useNavigation();
  const [isWatchList, setIsWatchList] = useState(false);
  const [isSideBar, setIsBar] = useState(false);
  const [isFollow,setIsFollow]=useState(false)
  const [isBlockModal,setIsBlockModal]=useState(false)
  const [isReportModal,setIsReportModal]=useState(false)
  const [isActiveProfile,setIsActiveProfile]=useState(0)

  const [isUnfollowModal,setIsUnfollowModal]=useState(false)

  const renderChatList = ({ item }: any) => {
    return (
      <MessagesComponent
        comments={true}
        profile={true}
        name={item?.name}
        image={item?.img}
        message={item?.message}
        time={item?.time}
        chatDate={item?.chatDate}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={appStyles.main}>
          <View style={appStyles.rowjustify}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: scale(20),
                paddingVertical: verticalScale(5),
              }}
            >
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: scale(27),
                  height: scale(30),
                  alignItems: "flex-start",
                  justifyContent: "center",
                  // backgroundColor:"red"
                  // backgroundColor:"red"
                }}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={{ width: scale(18), height: scale(25) }}
                  source={images.back200}
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Image
                style={{
                  width: scale(37),
                  height: scale(37),
                  borderRadius: 999,
                }}
                source={item.img}
              />
              <View
                style={{
                  marginHorizontal: scale(7),
                  paddingBottom: verticalScale(5),
                }}
              >
                <CustomText
                  color={colors.white}
                  size={17}
                  style={{ marginTop: verticalScale(5) }}
                  text={item.name}
                />
                <CustomText
                  // fontWeight="700"
                  color={colors.white}
                  size={13}
                  style={{ marginTop: verticalScale(-3) }}
                  text={"1.2M Followers"}
                />
              </View>
            </View>
            <View style={{ ...appStyles.row, paddingRight: scale(10) }}>
              {isFollow ? (
                <View style={appStyles.row}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setIsWatchList(!isWatchList)}
                  >
                    <Image
                      style={{
                        width: scale(20),
                        height: scale(20),
                        tintColor: colors.white,
                      }}
                      source={isWatchList ? images.star1 : images.star}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <Spacer width={scale(10)} />
                  <TouchableOpacity
                    activeOpacity={1}
                    // onPress={() => navigation.goBack()}
                  >
                    <Image
                      style={{
                        width: scale(25),
                        height: scale(25),
                        tintColor: colors.white,
                      }}
                      source={images.messageicon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <TouchableOpacity
                activeOpacity={0.6}
                onPress={()=>setIsFollow(!isFollow)}
                >
                   <CustomText
                  color={colors.white}
                  size={16}
                  fontFam="Poppins-SemiBold"
                  fontWeight="700"
                  textDecorationLine={"underline"}
                  // style={{marginTop:verticalScale(5)}}
                  text={"Follow"}
                />

                </TouchableOpacity>
               
              )}

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => setIsBar(!isSideBar)}
              >
                <Image
                  style={{
                    width: scale(30),
                    height: scale(25),
                    tintColor: colors.white,
                    marginLeft: scale(-3),
                  }}
                  source={images.dot}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* <CustomText color={"transparent"} size={18} text={"sss"} /> */}
          </View>
          {/* <ImageBackground
          style={{ width: windowWidth, height: windowHeight / 6.5 }}
          source={images.plane}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              marginHorizontal: 20,
            }}
          >
            <View
              style={{
                width: windowWidth / 4.5,
                height: windowHeight / 10,
                borderRadius: 10,
                marginBottom: 3,
                marginHorizontal: 1.5,
                overflow: "hidden",
              }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={item.img}
              />

              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 999,
                  backgroundColor: colors.green,
                  position: "absolute",
                  top: 10,
                  left: 10,
                }}
              />
            </View>
            <View style={{ marginLeft: 15 }}>
              <CustomText
                fontWeight="700"
                size={17}
                color={colors.white}
                numberOfLines={1}
                style={{ width: windowWidth / 2.6 }}
                text={item?.name}
              />
              <CustomText
                style={{ width: windowWidth / 3 }}
                fontWeight="700"
                size={17}
                numberOfLines={3}
                color={colors.white}
                text={"Boston, MA United States 245 Friends"}
              />
            </View>
          </View>
        </ImageBackground> */}
           <View
            style={{ ...appStyles.rowjustify, paddingHorizontal: scale(10) ,marginBottom:verticalScale(10)}}
          >
            {
              ["Profile","Channel"].map((item,index)=>{
                return(
                  <CustomButton
                  width={"48.5%"}
                  onPress={()=>setIsActiveProfile(index)}
                  
                  text={item}
                  textColor={ isActiveProfile==index?  colors.black:colors.white}
                  height={35}
                  bgColor={ isActiveProfile==index?  colors.grey400:colors.primary}
                  borderRadius={8}
                />

                )
              })
            }
        
            {/* <CustomButton
              width={"48.5%"}
              borderRadius={8}
              text="Channel"
              height={35}
            /> */}
          </View>
          {/* <View
            style={{ ...appStyles.rowjustify, paddingHorizontal: scale(10) }}
          >
            <CustomButton
              width={"48.5%"}
              text="Profile"
              textColor={colors.black}
              height={35}
              bgColor={colors.grey400}
              borderRadius={8}
            />
            <CustomButton
              width={"48.5%"}
              borderRadius={8}
              text="Channel"
              height={35}
            />
          </View> */}

{isActiveProfile==0?(
               <View>
                        <ScrollView showsVerticalScrollIndicator={false}>

           
               <View
                 style={{
                   ...appStyles.row,
                   paddingVertical: verticalScale(8),
                   paddingHorizontal: scale(20),
                 }}
               >
                 <View style={appStyles.row}>
                   <Image
                     style={{
                       width: scale(16),
                       height: scale(16),
                     }}
                     source={images.locationicon}
                   />
                   <CustomText
                     color={colors.grey300}
                     size={15}
                     fontFam="Inter-Medium"
                     style={{ marginLeft: scale(8) }}
                     text={"Los Angeles, CA"}
                   />
                 </View>
                 <Spacer width={scale(22)} />
     
                 <View style={appStyles.row}>
                   <Image
                     style={{
                       width: scale(20),
                       height: scale(20),
                     }}
                     source={images.bagicon}
                   />
                   <CustomText
                     color={colors.grey300}
                     size={15}
                     fontFam="Inter-Medium"
                     style={{ marginLeft: scale(8) }}
                     text={"Actress, Model"}
                   />
                 </View>
               </View>
               <Image
                 style={{
                   width: "94%",
                   height: verticalScale(350),
                   // height: 362,
                   alignSelf: "center",
                   // marginTop: 15,
                 }}
                 resizeMode="cover"
                 source={images.defimage12}
               />
               <View style={{ paddingHorizontal: scale(10) }}>
                 <View
                   style={{
                     backgroundColor: colors.primary,
                     borderBottomRightRadius: scale(5),
                     borderBottomLeftRadius: scale(5),
                     paddingLeft: scale(10),
                     paddingVertical: verticalScale(10),
                   }}
                 >
                   <CustomText
                     color={colors.white}
                     lineHeight={20}
                     size={15}
                     text={
                       "see my latest content using the link below ⚡ bookings & inquiries email"
                     }
                   />
                   <CustomText
                     color={colors.white}
                     size={15}
                     lineHeight={20}
                     text={"thaer@princemarketinggroup.com"}
                   />
                   <View style={{ ...appStyles.row, marginTop: verticalScale(3) }}>
                     <Image
                       style={{
                         width: scale(18),
                         height: scale(18),
                       }}
                       resizeMode="contain"
                       source={images.link}
                     />
                     <CustomText
                       color={colors.grey300}
                       size={14}
                       fontFam="Inter-Medium"
                       style={{ marginLeft: scale(8) }}
                       text={"link.me/carmenelectra"}
                     />
                   </View>
                 </View>
     
                 <View
                   style={{
                     ...appStyles.rowjustify,
                     marginVertical: verticalScale(10),
                   }}
                 >
                   <Image
                     style={{
                       width: "48.5%",
                       height: windowHeight / 4.2,
                       borderRadius: 8,
                     }}
                     source={images.defimg400}
                   />
                   <Image
                     style={{
                       width: "48.5%",
                       height: windowHeight / 4.2,
                       borderRadius: 8,
                     }}
                     source={images.defimage4}
                   />
                 </View>
     
                 {/* <ImageBackground
               style={{
                 marginTop: 10,
                 // marginHorizontal: 10,
                 paddingHorizontal: 20,
                 overflow: "hidden",
                 paddingVertical: 6,
               }}
               // resizeMode="contain"
               source={images.detailbg}
             >
               <View style={styles.flex}>
                 <View style={styles.row}>
                   <Image style={styles.icon} source={images.gander} />
                   <CustomText color={colors.white} size={14} text={"Male"} />
                 </View>
                 <View style={{ ...styles.row, marginLeft: 10 }}>
                   <Image style={styles.icon} source={images.calander} />
                   <CustomText
                     color={colors.white}
                     size={14}
                     text={"40 years old"}
                   />
                 </View>
               </View>
               <View style={styles.flex}>
                 <View style={styles.row}>
                   <Image style={styles.icon} source={images.straight} />
                   <CustomText color={colors.white} size={14} text={"Straight"} />
                 </View>
                 <View style={{ ...styles.row, marginLeft: 10 }}>
                   <Image style={styles.icon} source={images.heart} />
                   <CustomText color={colors.white} size={14} text={"Single"} />
                 </View>
               </View>
               <View style={[styles.flex, { marginBottom: 12 }]}>
                 <View style={styles.row}>
                   <Image style={styles.icon} source={images.education} />
                   <CustomText color={colors.white} size={14} text={"GED"} />
                 </View>
                 <View style={{ ...styles.row, marginLeft: 10 }}>
                   <Image style={styles.icon} source={images.bag} />
                   <CustomText
                     color={colors.white}
                     size={14}
                     text={"Status,Founder"}
                   />
                 </View>
               </View>
             </ImageBackground> */}
                 <View
                   style={{
                     flexDirection: "row",
                     justifyContent: "space-between",
                     alignItems: "center",
                     paddingHorizontal: 20,
                     borderWidth: 1,
                     borderColor: colors.gray200,
                     // paddingVertical:verticalScale(5),
                     borderRadius: 10,
                     marginBottom: verticalScale(10),
                   }}
                 >
                   <TextInput
                     style={{
                       color: colors.gray200,
                       width:"70%",
                       fontSize: verticalScale(15),
                     }}
                     placeholderTextColor={colors.gray200}
                     placeholder="Write on my wall"
                   />
                   <Image
                     style={{ tintColor: colors.gray200 }}
                     source={images.send}
                   />
                 </View>
     
                 <FlatList
                   data={profileComments}
                   style={{ marginBottom: verticalScale(130) }}
                   contentContainerStyle={{
                     gap: 7,
                   }}
                   renderItem={renderChatList}
                 />
               </View>

               </ScrollView>

               </View>
              
              ):(
                <>
               <View style={{width:"100%",height:windowHeight,paddingTop:verticalScale(10)}}>
                <Channel/>


                </View>
                </>
              )}
          
      </SafeAreaView>
      <SizeBar
        setIsModalVisible={setIsBar}
        top={verticalScale(-15)}
        right={scale(-8)}
        // paddingHorizontal={5}
        // paddingVertical={5}
        isModalVisible={isSideBar}
      >
        {
          !isFollow?(
            <View>
               <CustomText
                color={"#F9FFFF"}
                size={15}
                style={{ marginBottom: verticalScale(10) }}

                // fontFam="Inter-Medium"
                // style={{ marginLeft: scale(8) }}
                text={"Block"}
              />
                <CustomText
                color={"#F9FFFF"}
                size={15}
                // fontFam="Inter-Medium"
                style={{ marginBottom: verticalScale(10) }}
                text={"Report"}
              />
              
              
            </View>
          ):(
            <View>
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>{
                setIsBar(false)
                setTimeout(() => {
                  setIsFollow(false)

                  
                }, 1000);


              }}
              >
              <CustomText
                color={"#F9FFFF"}
                size={15}
                style={{ marginBottom: verticalScale(10) }}

                // fontFam="Inter-Medium"
                // style={{ marginLeft: scale(8) }}
                text={"Unfollow"}
              />

              </TouchableOpacity>
             
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>{
                setIsBar(false)
                setTimeout(() => {
                  setIsBlockModal(true)

                  
                }, 1000);


              }}
              >
              <CustomText
                color={"#F9FFFF"}
                size={15}
                style={{ marginBottom: verticalScale(10) }}

                // fontFam="Inter-Medium"
                // style={{ marginLeft: scale(8) }}
                text={"Block"}
              />

              </TouchableOpacity>

              <TouchableOpacity
               activeOpacity={0.6}
               onPress={()=>{
                 setIsBar(false)
                 setTimeout(() => {
                   setIsReportModal(true)
 
                   
                 }, 1000);
 
 
               }}
              >
              <CustomText
                color={"#F9FFFF"}
                size={15}
                
                // fontFam="Inter-Medium"
                // style={{ marginLeft: scale(8) }}
                text={"Report"}
              />

              </TouchableOpacity>
               
            </View>
          )
        }
         

      </SizeBar>
      <BlockModal
      isModalVisible={isBlockModal}
      setModalVisible={setIsBlockModal}
      isBlock={"BLOCK"}
      title={"Block Carmen Electra?"}
      des={"This user will no longer be able to follow, message, or see your profile."}

      />
        <BlockModal
      isModalVisible={isReportModal}
      setModalVisible={setIsReportModal}
      isBlock={"REPORT"}
      title={"Report Carmen Electra?"}
      des={"If you feel this user has violated our terms of service select REPORT and we will review your anonymous submission."}

      />
{/* 
      <CustomModal
          isModalVisible={isBlockModal}
          setModalVisible={setIsBlockModal}
      >

<View
                style={{ alignItems: "center" }}>
                <View
                    style={{
                        width: "85%",
                        backgroundColor: colors.white,
                        paddingVertical: 20,
                        paddingHorizontal: 20,
                        borderRadius:scale(15)
                    }}
                >

<CustomText
                        text={"Block Carmen Electra?!"}
                        size={17}
                        fontWeight='700'
                        fontFam="Poppins-Bold"
                        color={colors.black}
                        style={{ textAlign: "center" }}
                    />

<CustomText
                        text={"This user will no longer be able to follow, message, or see your profile."}
                        size={16}
                        color={colors.black}
                        style={{ textAlign: "center",marginVertical:verticalScale(10) }}
                    />
                    <View style={{...appStyles.row,alignSelf:"center"}}>

                    <CustomButton
          text={"Cancel"}
          // width={windowWidth/3.5}
          size={16}
          height={verticalScale(43)}
          borderRadius={scale(20)}
          paddingHoriontal={scale(25)}
          onPress={()=>setIsFollow(!isFollow)}
          // fontWeight={"600"}
          fontFam={"Poppins-Regular"}
          bgColor={"#C4C4C4"}
          textColor={colors.black}
          />
          <Spacer width={scale(20)}/>

          <CustomButton
          text={"BLOCK"}
          // width={windowWidth/3.5}
          size={16}
          height={verticalScale(43)}
          borderRadius={scale(20)}
          paddingHorizontal={scale(25)}
          // onPress={()=>setIsFollow(!isFollow)}
          // fontWeight={"600"}
          fontFam={"Poppins-Regular"}
          bgColor={"#277DD2"}
          textColor={colors.white}
          />
  

                    </View>
                    
                </View>
            </View>



      </CustomModal> */}
    </>
  );
};

export default OthersProfile;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.black100,
    alignItems: "center",
    paddingBottom: "3%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: windowWidth / 2,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 10,
    resizeMode: "contain",
  },
  flex: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
});
