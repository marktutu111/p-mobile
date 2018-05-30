import React, { Component } from 'react';
import {  View, Text, StyleSheet, Image } from 'react-native';


import { Container, 
        InputIcon, 
        Input, 
        Button, 
        ClearButton, 
        Vr 
    } from "../../components";

import colors from '../../resources/styles/colors';
import { AuthService } from "../../services/auth.service";




class LoginComponent extends Component {


        constructor (props) {

                super(props);

                this.auth$vice = new AuthService();

        }

        render() {
            return (
                <Container>

                    <View style={styles.logoContainer}>
                        <Image source={require('../../resources/images/12.png')}
                            style={styles.logo}/>
                    </View>

                    <View style={styles.imageContainer}>
                        <Image source={require('../../resources/images/banner.png')}
                            style={styles.imageStyle}/>
                    </View>
                    <View style={styles.loginContainer}>

                        <Text style={styles.loginLabel}>SIGN INTO P-MOBILE WORLD</Text>
                        <InputIcon icon="user" placeholder="Username"/>
                        <InputIcon icon="lock" placeholder="password"/>
                        <Button title="Sign in" 
                                style={styles.buttonStyle}
                                onPress={() => this.auth$vice.login() }/>

                        <View style={styles.button2Container}>

                                <ClearButton text="Forgot Password?" 
                                             textStyle={styles.button2}/>

                                <Vr color={colors.WHITE_COLOR} size={15}/>

                                <ClearButton text="Now here? Take a Tour" 
                                             textStyle={styles.button2}/>

                        </View>

                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.acknowledge}>
                            By Signing in I acknowledge that i have read 
                            and understood the terms and condition when using
                            P-Mobile APP
                        </Text>
                        <Text style={styles.enquiries}>Enquiries? Call us on: +233 238 908 303</Text>
                    </View>


                    
                </Container>
            );
        }
}


const styles = StyleSheet.create({
        logoContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        logo: {
            // width: '50%',
            // height: '50%'
        },
        imageContainer: {
            height: 120,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        imageStyle: {
            width: '100%',
            height: '100%',
        },
        loginContainer: {
            height: 'auto',
            backgroundColor: colors.MAIN_COLOR,
            justifyContent: 'center',
            alignItems: 'center',
        },
        loginLabel: {
            color: colors.WHITE_COLOR,
            margin: 10,
            fontWeight: 'bold',
        },
        buttonStyle: {
            backgroundColor: colors.BUTTON_COLOR,
            borderColor: colors.WHITE_COLOR,
            borderWidth: 1,
            height: 40,
            width: '80%',
        },
        button2: {
            color: colors.WHITE_COLOR,
            padding: 5,
            fontSize: 12,
        },
        button2Container: {
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        footerContainer: {
            padding: 20,
            height: 'auto',
            backgroundColor: colors.DARK_COLOR,
            justifyContent: 'center',
            alignItems: 'center',
        },
        acknowledge: {
            color: colors.WHITE_COLOR,
            textAlign: 'center',
            fontSize: 10,
        },
        enquiries: {
            color: colors.WHITE_COLOR,
            fontSize: 10,
            margin: 20
        }

});




export { LoginComponent };