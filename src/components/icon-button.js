import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import EIcon from 'react-native-vector-icons/MaterialIcons';
import colors from '../resources/styles/colors';



const IconButton = ({ name, onPress, size, color, text }) => {

        return (
            <TouchableOpacity style={styles.container} 
                              onPress={onPress} activeOpacity={0.7}>
                <EIcon name={name} size={size} color={color}/>
                <Text style={styles.textStyle}>{ text }</Text>
            </TouchableOpacity>
        )


}


const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        textStyle: {
            fontSize: 10,
            color: colors.WHITE_COLOR
        }
});




export { IconButton };