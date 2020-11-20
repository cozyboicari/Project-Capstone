import React, { Component } from 'react';
import { View, Text, StatusBar, Image, Linking, Alert,
    ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

// file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

//file library
import Icons from 'react-native-vector-icons/Ionicons';
import { LiteCreditCardInput } from 'react-native-credit-card-input';
import * as Animatable from 'react-native-animatable'; 

// file global
import { colors } from '../../ConfigGlobal';

const Item = ({ title, money }) => {
    return(
        <View style={styles.containerTotal}>
            <Text style={[styles.textTotal, {
                color: title === 'Total' ? '#000' : '#444',
                fontWeight: title === 'Total' ? '600' : '400'
            }]}>
                {title}
            </Text>
            <Text style={[styles.textTotal, {
                color: title === 'Total' ? '#000' : '#444',
                fontWeight: title === 'Total' ? '600' : '400'
            }]}>
                {`$${money}`}
            </Text>
        </View>
    );
}

const ItemPayment = ({ title, urlImage, selectPayment, choosePayment }) => {
    const isSelect = (selectPayment === title);

    return(
        <View style={[styles.containerItemPayment, {
            borderBottomWidth: title === 'Credit card' ? 1 : 0
        }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        choosePayment(title);
                        {
                            title === 'PayPal' &&
                            Alert.alert('Notification', 'Do you want to go to paypal link?', 
                                [
                                    { 
                                        text: 'Yes',
                                        onPress: () => Linking.openURL('https://www.paypal.com/signin')
                                    },
                                    {
                                        text: 'No',
                                        onPress: () => {},
                                        style: 'cancel'
                                    }
                                ], { cancelable: false }
                            );
                        }
                    }}
                >
                    { !isSelect ?
                        <Icons 
                            name='ellipse-outline'
                            size={20}
                            color='#444'
                        /> :
                        <Icons 
                            name='ellipse'
                            size={20}
                            color='#444'
                        />
                    }
                </TouchableOpacity>
                <Text style={styles.textItemPayment}>{title}</Text>
            </View>
            <Image 
                source={{ uri: urlImage }}
                style={styles.imagePayment}
            />
        </View>
    );
}

export default class OrderTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dayBooking: {},
            total: 0,
            tour: {},
            selectPayment: null
        }
    }

    componentDidMount() {
        const { dayBooking, total, tour } = this.props.route.params;
        this.setState({
            dayBooking, total, tour
        });
    }

    _choosePayment = selectPayment => {
        this.setState({ selectPayment });
    }


    //credit card
    _onChange = (formData) => console.log(JSON.stringify(formData, null, ' '));
    _onFocus = (field) => console.log('focusing', field);

    render() {
        const { dayBooking, total, tour, selectPayment } = this.state;

        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
                <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>

                <ScrollView bounces={false}>
                    {/* phan gioi thieu tour */}
                    <View style={styles.containerTopOrder}>
                        <View style={styles.containerInfomationTourguide}>
                            <View style={styles.containerInformation}>
                                <Text style={styles.textTopOrderTitle}>{tour.name}</Text>
                                <Text style={styles.textTopOrderNameTourGuide}>
                                    {`With tour guide `}
                                    <Text style={styles.textName}>{tour.tourguideName}</Text>
                                </Text>
                                <Text style={styles.textTopOrderDay}>{`${dayBooking.time} - ${dayBooking.day} ${dayBooking.month}`}</Text>
                            </View>
                            <View style={styles.containerImage}>
                                <Image source={{ uri: tour.tourguideImage }} style={styles.image}/>
                            </View>
                        </View>
                    </View>
                    {/* tong gia tien */}
                    <View style={styles.containerMidOrder}>
                        <Text style={styles.textKidForFree}>Kids join for free</Text>
                        <Item title='Subtotal' money={total}/>
                        <Item title='Service fee' money={4.5}/>
                        <Item title='Total' money={total + 4.5}/>
                    </View>

                    {/* thanh toan online */}
                    <View style={styles.containerBottomOrder}>
                        <Item title='Pay online now:' money={total + 4.5}/>
                        <Text style={styles.titleSelectPayment}>Select payment</Text>
                        <View style={styles.containerTitlePayment}>
                            <Icons 
                                name='lock-closed-outline'
                                size={20}
                                color={colors.BACKGROUND_BLUEYONDER}
                            />
                            <Text style={styles.textTitlePayment}>
                                This checkout is encrypted and your information is always secure.
                            </Text>
                        </View>
                        <ItemPayment 
                            title='PayPal'
                            choosePayment={this._choosePayment}
                            selectPayment={selectPayment}
                            urlImage='https://withlocals-com-res.cloudinary.com/image/upload/w_104,h_26,c_fill,g_auto,q_auto,dpr_3.0,f_auto/better_paypal_logo_id6ln2'
                        />
                        {
                            selectPayment !== 'Credit card' ?
                            <ItemPayment 
                                title='Credit card'
                                choosePayment={this._choosePayment}
                                selectPayment={selectPayment}
                                urlImage='https://e7.pngegg.com/pngimages/739/826/png-clipart-logo-credit-card-payment-card-american-express-credit-card-text-display-advertising.png'
                            /> :
                            <Animatable.View 
                                animation='fadeIn'
                                style={[styles.containerItemPayment, {
                                    borderBottomWidth: 1,
                                    paddingVertical: 17
                                }]}
                            >
                                <LiteCreditCardInput
                                    blurOnSubmit={false}
                                    autoFocus
                                    onFocus={this._onFocus}
                                    onChange={this._onChange}
                                />
                            </Animatable.View>
                        }
                    </View>
                </ScrollView>
            </View>
            </KeyboardAvoidingView>
        );
    }
}