import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
 } from 'react-native';

import MIcon from "react-native-vector-icons/MaterialIcons";
import colors from '../resources/styles/colors';


 const HeaderBar = ({ onLeftPress, 
                      onRightPress, 
                      leftIcon, 
                      rightIcon, 
                      title, 
                      style,
                      color }) => {

        const {container, textStyle} = styles;

        return (

                <View style={[container, style]}>
                        <View style={styles.leftContent}>
                            <TouchableOpacity activeOpacity={0.5} onPress={onLeftPress}>
                                <MIcon name={leftIcon} size={25} color={color}/>
                            </TouchableOpacity>
                            <View style={styles.iconContainer}>
                                <Image source={require('../resources/images/11.png')}
                                    style={styles.imageStyle}/>
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={[textStyle, { fontWeight: 'bold' }]}>Welcome</Text>
                            <Text style={[textStyle, {color: color}]}>{title}</Text>
                            <Text style={textStyle}>to</Text>
                            <Text style={[textStyle, { fontWeight: 'bold' }]}>P-Mobile</Text>
                            
                        </View>
                        {/* <TouchableOpacity activeOpacity={0.5} 
                                          onPress={onRightPress}>
                            <MIcon name={rightIcon} size={25} color={color}/>
                        </TouchableOpacity> */}
                </View>
        )


 }




 const styles = StyleSheet.create({
        container: {
            height: 50,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10
        },
        textStyle: {
            fontSize: 14,
            color: colors.WHITE_COLOR,
            marginLeft: 5,
        },
        iconContainer: {
            height: 30,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
        },
        imageStyle: {
            width: '100%',
            height: '100%',
            flex: 1,
            marginLeft: 10,
        },
        leftContent: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        textContainer: {
            flexDirection: 'row',
            alignItems: 'center',
        }
 })


 export { HeaderBar };