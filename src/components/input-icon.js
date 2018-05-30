import React from 'react';
import { View, StyleSheet, Text, TextInput } from "react-native";
import FIcon from "react-native-vector-icons/FontAwesome";
import colors from '../resources/styles/colors';



const InputIcon = ({ icon, placeholder }) => {

        return (

                <View style={styles.container}>

                    <View style={styles.iconContainer}>
                        <FIcon name={icon} size={20} style={styles.iconStyle} />
                    </View>
                    <TextInput placeholder={placeholder} 
                               underlineColorAndroid="transparent"
                               style={styles.inputStyle}/>

                </View>

        )

}


const styles = StyleSheet.create({
        container: {
            width: '80%',
            height: 40,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: colors.WHITE_COLOR,
            marginBottom: 10,
        },
        iconContainer: {
            backgroundColor: colors.DARK_COLOR,
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconStyle: {
            color: colors.WHITE_COLOR
        },
        inputStyle: {
            width: '100%',
            paddingLeft: 5,
            paddingRight: 5,
        }
});



export { InputIcon };