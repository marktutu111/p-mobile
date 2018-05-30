import  React, {Component} from 'react';

import { View, StyleSheet, Text, Image } from "react-native";
import { MButtonCaret } from "./menu-button-caret";
import colors from '../resources/styles/colors';
import FIcon from "react-native-vector-icons/FontAwesome";



class MenuBar extends Component {

        constructor (props) {
                super(props);

                this.state = {
                    active: 'credit-card'
                }
        }


        onMenu (state) {

                this.props.onPress(state);
                this.setState({ active: state })

        }


        renderArrows ()  {

                switch (this.state.active) {
                    case 'credit-card':
                        return (
                            <View style={styles.caretContainer}>
                                <FIcon name="caret-right" size={25} color={colors.DARK_COLOR}/>
                            </View>
                        )
                    case 'transfers':
                        return (
                            <View style={[styles.caretContainer, { marginTop: 70 }]}>
                                <FIcon name="caret-right" size={25} color={colors.DARK_COLOR}/>
                            </View>
                        )
                    case 'payments':
                        return (
                            <View style={[styles.caretContainer, { marginTop: 150 }]}>
                                <FIcon name="caret-right" size={25} color={colors.DARK_COLOR}/>
                            </View>
                        )
                    case 'recommend':
                        return (
                            <View style={[styles.caretContainer, { marginTop: 220 }]}>
                                <FIcon name="caret-right" size={25} color={colors.DARK_COLOR}/>
                            </View>
                        )
                    default:
                        break;
                }

        }


        render() {
            return (
                <View style={styles.menuBar}>

                        <View style={styles.menuButtonsContainer}>
                            <MButtonCaret icon='credit-card' 
                                          text="Shop in P-Mobile"
                                          onPress={ () => this.onMenu('credit-card') }/>
                            <MButtonCaret icon="arrows-h" 
                                          text="Transfers"
                                          onPress={() => this.onMenu('transfers')}/>
                            <MButtonCaret icon="dollar" 
                                          text="Payments"
                                          onPress={ () => this.onMenu('payments')}/>
                            <MButtonCaret icon="users" 
                                          text="Recommend P-M" 
                                          onPress={() => this.onMenu('recommend')}/>

                        </View>

                        <View style={styles.imageContainer}>
                            <Image source={require('../resources/images/pixx.png')}
                                style={styles.imageStyle}/>
                        </View>

                        { this.renderArrows() }                  
                        
                </View>
            );
        }
}




const styles = StyleSheet.create({
    menuBar: {
        width: '35%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    menuButtonsContainer: {
        backgroundColor: colors.DARK_COLOR,
        flex: 1,
        height: '100%',
        width: '90%'
    },
    caretContainer: {
        position: 'absolute',
        right: 5,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 80,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    }
});




export { MenuBar };