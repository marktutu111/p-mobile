import React, { Component } from 'react';
import { View, 
         Text, 
         StyleSheet
} from 'react-native';


import { 
    Container, 
    HeaderBar, 
    IconButton, 
    MenuBar
 } from "../../components";


import colors from '../../resources/styles/colors';
import { ShopComponent } from "../shop/shop.component";




class HomeComponent extends Component {

        constructor (props) {
                super(props);
        }


        render() {
            return (

                    <Container>

                        <HeaderBar leftIcon="menu"
                                   style={styles.headerContainer}
                                   color={colors.WHITE_COLOR}
                                   title="mark"/>
                        
                        <View style={styles.content}>

                            <View style={styles.positionMenubar}>
                                <MenuBar onPress={() => {}}/>
                            </View>
                            <View style={styles.menuContent}>
                                <ShopComponent />
                            </View>


                        </View>

                        <View style={styles.homeFooter}>

                                <IconButton name="help" color={colors.WHITE_COLOR} 
                                            size={20} text="Help"/>
                                <IconButton name="settings" color={colors.WHITE_COLOR} 
                                            size={20} text="Settings"/>
                                <IconButton name="lock" color={colors.WHITE_COLOR} 
                                            size={20} text="Log Out"/>

                        </View>


                    </Container>

            );
        }


}



const styles = StyleSheet.create({
        headerContainer: {
            backgroundColor: colors.MAIN_COLOR,
        },
        content: {
            flex: 1,
            position: 'relative',
        },
        homeFooter: {
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: colors.MAIN_COLOR
        },
        menuContent: {
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            flex: 1,
            width: '70%',
        },
        positionMenubar: {
            position: 'absolute',
            width: '100%',
            left: 0,
            top: 0,
            bottom: 0,
            flex: 1,
            zIndex: 10000
        }
});



export { HomeComponent }