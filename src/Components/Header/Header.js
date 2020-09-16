import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Platform } from 'react-native';

//file css
import styles from './Styles';

//file global config
import { colors } from '../../ConfigGlobal'; 

//library ben ngoai
import Icons from 'react-native-vector-icons/Ionicons';

//bien' config
const SIZE_ICON = 35;

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={[styles.container, {
                height: Platform.OS === 'ios' ? 120 : 80
            }]}>
                <StatusBar barStyle="light-content"/>
                {/* header  */}
                <View style={[styles.containerHeader, {
                    marginTop: Platform.OS === 'ios' ? 28 : 10
                }]}>
                    <View style={styles.itemHeaderLeft}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.openDrawer();
                            }}
                        >
                            <Icons 
                                name="menu-outline"
                                size={SIZE_ICON}
                                color={colors.BACKGROUND_CULTURE}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemHeaderMid}>
                        <Text style={styles.textBrand}>Your Tour</Text>
                    </View>
                    <View style={styles.itemHeaderRight}>
                    </View>
                </View>
            </View>
        )
    }
}