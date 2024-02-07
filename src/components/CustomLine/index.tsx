import React from 'react'
import { colors } from '../../utils/colors'
import { View } from 'react-native'

type Props = {}

const CustomLine = ({backgroundColor,height}:any) => {
    return (
        <View style={{ height:height ||3, backgroundColor: backgroundColor ||colors.grey }} />
    )
}

export default CustomLine