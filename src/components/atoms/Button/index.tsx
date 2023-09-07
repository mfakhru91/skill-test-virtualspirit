import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { ButtonProps } from './ButtonTypes'

const index:FC<ButtonProps> = ({style,...props}) => {
    
    const newStyle = styles(props)

    return (
        <TouchableOpacity
            style={[newStyle.button,style]}
            {...props}>
                {typeof props.children == "string"?<Text style={newStyle.text}>{props.children}</Text>:props.children}
        </TouchableOpacity>
    )
}

export default index

const styles = (props:ButtonProps) => StyleSheet.create({
    button:{
        paddingVertical:9,
        paddingHorizontal:18,
        marginVertical:5,
        marginHorizontal:12,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:props.color||'#2B72C4',
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    text:{
        color:props.textColor||"#FFFFFF"
    }
})