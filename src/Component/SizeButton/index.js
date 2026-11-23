import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

export default function SizeButtom(props) {
  return (
    <View style={[styles.container, {backgroundColor:props.bgcolor || '#FFFFFF'}]}>
       <Text style={[styles.text, {color: props.color || "#17181A" }]}>
           {props.children}
       </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width:150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      berderRadius: 4,
      borderColor: '#e6e6e6',
      berderWidth: 3,
      marginHorizontal: 10,
      borderWidth: 2,
      borderColor: '#cfcfcf',
      borderRadius: 5,
      marginHorizontal: 5,

    },
    text: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})