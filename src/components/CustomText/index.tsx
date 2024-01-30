import { Text } from 'react-native'
import { colors } from '../../utils/colors'

type Props = {
    color?: string,
    size?: number,
    fontFam?: string,
    text?: any,
    style?: any,
    lineHeight?: number
    numberOfLines?:number
    fontWeight?:string
    textDecorationLine?:string
}

const CustomText = ({ color, size, fontFam, text, style, lineHeight,numberOfLines,fontWeight,textDecorationLine }: Props) => {
    return (
        <Text
        numberOfLines={numberOfLines}
            style={[
                {
                    color: color || colors.black,
                    fontSize: size || 12,
                    fontWeight: fontWeight ||"500",
                    fontFamily: fontFam || "SF-Pro-Text-Regular",
                    textDecorationLine:textDecorationLine,
                
                    
                    ...(lineHeight && { lineHeight: lineHeight }),
                }, style
            ]}
        >
            {text}
        </Text >
    )
}
export default CustomText
