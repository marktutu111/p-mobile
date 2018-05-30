import React from 'react';

import { 
    View,
    StyleSheet,
    Text,
    TouchableOpacity
 } from 'react-native';


 import FIcon from "react-native-vector-icons/FontAwesome";
import colors from '../resources/styles/colors';



 const MButtonCaret = ({ text, icon, onPress }) => {

            return (
                <TouchableOpacity style={styles.buttonContainer}
                                  activeOpacity={0.7} onPress={onPress}>
                        <FIcon name={ icon } color={colors.WHITE_COLOR} size={20}/>
                        <Text style={styles.textStyle}>{ text }</Text>
                </TouchableOpacity>
            )

 }



 const styles = StyleSheet.create({
        buttonContainer: {
            backgroundColor: colors.DARK_COLOR,
            width: '100%',
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
        },
        textStyle: {
            color: colors.WHITE_COLOR,
            fontSize: 10,
            margin: 10,
        }
 });



 export { MButtonCaret }