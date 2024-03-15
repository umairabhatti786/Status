import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React, { useState } from 'react'
import { windowWidth } from '../HomeScreen/FriendList'
import { colors } from '../../../utils/colors'
import { images } from '../../../assets/images'
import { verticalScale } from 'react-native-size-matters'

const GifContainer = ({item}) => {
    const [isSelectGif,setSelectGif]=useState(false)
  return (
    <TouchableOpacity
    activeOpacity={0.6}
    onPress={() => setSelectGif(!isSelectGif)}
    style={{
      width: "33%",
      height: verticalScale(130),
      margin: 3,
    }}>
    <Image
      style={{ width: "100%", height: "100%" }}
      source={item.gif}
    />
    {
        isSelectGif&&(
            <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 999,
              backgroundColor: colors.sky,
              position: "absolute",
              bottom: 10,
              right: 10,
              alignItems:"center",
              justifyContent:"center"
            }}>
                              <Image
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
            source={images.check}
          />


            </View>

        )
        
    }
  
  </TouchableOpacity>
  )
}

export default GifContainer