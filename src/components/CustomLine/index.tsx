import React from 'react'
import { colors } from '../../utils/colors'
import { View } from 'react-native'

type Props = {}

const CustomLine = (props: Props) => {
    return (
        <View style={{ height: 3, backgroundColor: colors.grey }} />
    )
}

export default CustomLine