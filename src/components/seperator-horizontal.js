import React from 'react';
import { 
    StyleSheet,
    View
 } from 'react-native';

import { COLORS } from "../constants";



const Hr = ({ style }) => {
    return (
        <View style={[styles.viewStyle, style]}></View>
    )
}



const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: COLORS.WHITE_COLOR,
        height: 3,
        padding: 0,
    }

})



export { Hr }