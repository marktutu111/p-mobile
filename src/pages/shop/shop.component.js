import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';


import { 
    Container
 } from "../../components";


import colors from '../../resources/styles/colors';
import Icon from "react-native-vector-icons/FontAwesome";


class ShopComponent extends Component {

        constructor (props) {
                super()
        }


        render() {
            return (
                <Container>

                        <View style={styles.container1}>
                            <View style={styles.labelContainer}>
                                <Icon name="circle" size={8} color={colors.WHITE_COLOR}/>
                                <Text style={styles.labelText}>Check Our Phone Products</Text>
                            </View>
                            <View style={styles.labelContainer}>
                                <Icon name="circle" size={8} color={colors.WHITE_COLOR}/>
                                <Text style={styles.labelText}>Buy Glo Airtime Bundle</Text>
                            </View>
                            <View style={styles.labelContainer}>
                                <Icon name="circle" size={8} color={colors.WHITE_COLOR}/>
                                <Text style={styles.labelText}>Switch Plans</Text>
                            </View>
                            <View style={styles.labelContainer}>
                                <Icon name="circle" size={8} color={colors.WHITE_COLOR}/>
                                <Text style={styles.labelText}>Check Account Balance</Text>
                            </View>
                        </View>

                        <View style={styles.container2}>

                            <View style={styles.imageContainer}>
                                <Image source={require('../../resources/images/13.png')}
                                       style={styles.container2Image}/>
                            </View>

                        </View>

                </Container>
            );
        }


}



const styles = StyleSheet.create({
        container1: {
            height: '30%',
            backgroundColor: colors.LIGHT_PINK_COLOR,
            width: '100%',
            justifyContent: 'center',
            paddingLeft: 50,
            borderBottomColor: colors.WHITE_COLOR,
            borderBottomWidth: 0.2,
        },
        labelContainer: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 10,
        },
        labelText: {
            color: colors.WHITE_COLOR,
            marginLeft: 5,
            fontSize: 12,
        },
        container2: {
            flex: 1,
            backgroundColor: colors.PINK_COLOR_2,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            width: 200,
            height: 150,
            overflow: 'hidden',
        },
        container2Image: {
            width: '100%',
            height: '100%'
        }

});



export { ShopComponent };
