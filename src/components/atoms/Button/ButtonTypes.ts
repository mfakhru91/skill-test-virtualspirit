import {TouchableOpacityProps} from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
    children:React.ReactNode | string
    color?:string
    textColor?:string
}