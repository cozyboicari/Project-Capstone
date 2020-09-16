import React, { Component } from 'react';
import { Text, View, TouchableOpacity, 
    SafeAreaView, StatusBar, FlatList, Image 
} from 'react-native';

//file component
import HeaderComponent from '../Header/Header';

//file css
import styles from './Styles';

//library ngoai
import Icons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../ConfigGlobal';

import { getFirestore } from '../../Database/Firebase/ConfigGlobalFirebase';

//custom item country
const ItemContry = ({ name, description, image }) => {
    return (
        <TouchableOpacity 
            onPress={() => {}}
            activeOpacity={.7}
        >
            <View style={styles.containerItemCountry}>
                <Image 
                    style={styles.imageItemCountry}
                    source={{uri: image}}
                />
                <View style={styles.containerLayoutItemCountry}>
                    <View style={styles.containerItemInfo}>
                        <Text style={styles.textItemNameCountry}>{name}</Text>
                        <View style={styles.containerDescription}>
                            <Text style={styles.textDescription}>{description}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onGetVietnam();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="dark-content"/>
                {/* phan header */}
                <HeaderComponent {...this.props}/>
                {/* phan get du lieu */}
                <View style={styles.containerTop}>
                    <View style={styles.containerTopDestinations}>
                        <Text style={styles.textTitle}>Top destinations</Text>
                        <TouchableOpacity
                            onPress={() => {}}
                        >
                            <Text style={styles.textSeeAll}>See all</Text>
                        </TouchableOpacity>
                    </View>
                    {/* view top city */}
                    <FlatList
                        data={this.props.vietnam}
                        keyExtractor={item => item.id}
                        renderItem={({item, index}) => {
                            if(item.visits > 500) {
                                return(
                                    <ItemContry name={item.name} image={item.image} description={item.description}/>
                                )
                            }
                        }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        )
    }
}