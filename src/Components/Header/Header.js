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
                height: Platform.OS === 'ios' ? 110 : 70
            }]}>
                <StatusBar barStyle="light-content"/>
                {/* header  */}
                <View style={[styles.containerHeader, {
                    marginTop: Platform.OS === 'ios' ? 28 : 0
                }]}>
                    <TouchableOpacity 
                        style={styles.itemHeaderLeft}
                        onPress={() => {
                            const { goBack } = this.props.navigation;
                            goBack();
                        }}
                    >
                        {
                        !this.props.isHome ?
                        <Icons 
                            name='chevron-back-outline'
                            size={30}
                            color='#fff'
                        />
                        : <View />
                    }
                    </TouchableOpacity>
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