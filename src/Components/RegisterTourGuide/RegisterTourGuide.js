import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';

// file css
import styles from './Styles';

//file component
import HeaderComponent from '../Header/Header';

//file global
import { colors } from '../../ConfigGlobal';

//library
import Icons from 'react-native-vector-icons/Ionicons';

const ItemBenefit = ({ nameIcon, title, text }) => {
    return (
        <View style={styles.containerItemBenefit}>
            <Icons name={nameIcon} size={40} color='#444'/>
            <Text style={styles.titleBenefit}>{title}</Text>
            <Text style={styles.textBenefit}>{text}</Text>
        </View>
    );
}

const ItemStep = ({ step, title, text }) => {
    return (
        <View style={styles.containerItemStep}>
            <Text style={styles.step}>{step}</Text>
            <View style={{ position: 'absolute' }}>
                <Text style={styles.titleStep}>{title}</Text>
                <Text style={styles.textStep}>{text}</Text>
            </View>
        </View>
    )
}

const ItemOffer = ({ title, text }) => {
    return(
        <View style={styles.containerItemOffer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icons name='checkmark-outline' size={27} color={colors.COLOR_HEART}/>
                <Text style={styles.textOfferItem}>{title}</Text>
            </View>
            <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
                <Text style={styles.textOffterItemBotom}>{text}</Text>
            </View>
        </View>
    );
}

export default class RegisterTourGuide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props}/>

                {/* phan gioi thieu va bat dau */}
                <ScrollView>
                    <View style={styles.containerIntroduceAndStart}>
                        {/* image get started */}
                        <View style={styles.containerImageTop}>
                            <Image 
                                source={{ uri: 'https://i.pinimg.com/564x/2c/c0/a3/2cc0a30a088805e9fcd06776effa6be9.jpg'}}
                                style={styles.imageTop}
                            />
                            <View style={styles.layoutImageTop}>
                                <Text style={[styles.textLayoutImageTop, { marginTop: 50 }]}>Make money doing what</Text>
                                <Text style={[styles.textLayoutImageTop, { marginBottom: 7 }]}>you love</Text>
                                <Text style={styles.textLayoutImageTopBottom}>
                                    Share your passion and love for your city on a
                                </Text>
                                <Text style={styles.textLayoutImageTopBottom}>
                                    Yourtour experience
                                </Text>
                            </View>
                            {/* what is your tour */}
                            <View style={styles.containerWhatIsYourtour}>
                                <Text style={styles.textWhatIsYourtour}>What is Yourtour</Text>
                                <Text style={styles.textWhatIsYourtourBottom}>
                                    It’s a free platform that empowers locals, like you, to earn money by hosting a private tour or experience in their city.
                                </Text>
                            </View>
                            {/* image mid */}
                            <View style={styles.containerImageMid}>
                                <Image 
                                    source={{ uri: 'https://i.pinimg.com/564x/f7/f8/6a/f7f86a04d89a90611d007f1979e10d3a.jpg' }}
                                    style={styles.imageMid}
                                />
                            </View>
                            {/* benefit cua hdv */}
                            <View style={styles.containerBenefitTourguide}>
                                <Text style={styles.textBenefitTourguide}>Benefits of being a Withlocals tour guide</Text>
                                <ItemBenefit 
                                    nameIcon='cash-outline' 
                                    title='Earn money doing what you love'
                                    text='If you love your city why not share it with the rest of the world? Even better, why not make some money while doing so. Here, you set up your own price.'
                                />
                                <ItemBenefit 
                                    nameIcon='globe-outline' 
                                    title='Worldwide connection with people like you'
                                    text='Meet people from all over the world that share the same passions and interests as you. Create memories for a lifetime and new connections.'
                                />
                                <ItemBenefit 
                                    nameIcon='heart' 
                                    title='Share your passion, in your own way!'
                                    text='What better way to show a city than through the eyes of a local! Create a one of a kind experience, from a cooking class to an off the beaten path tour or a dance workshop. The choice is yours!'
                                />
                            </View>
                            {/* thu tu thuc hien */}
                            <View style={styles.containerSteps}>
                                <Text style={styles.titleSteps}>Steps to become a tour guide</Text>
                                <ItemStep 
                                    step="1" 
                                    title="Create your Yourtour account"
                                    text="Sign up and set up your profile. Already have an account? Then, let’s get started with your host application."
                                />
                                <ItemStep 
                                    step="2" 
                                    title="Answer a simple questionnaire"
                                    text="We want to know more from you. It will help us get an idea of what you are really passionate about."
                                />
                                <ItemStep 
                                    step="3" 
                                    title="We’ll be in touch"
                                    text="Submit your questionnaire and that’s it! Once we review your application, our team will reach out to you."
                                />
                            </View>
                            {/* offer for u */}
                            <View style={styles.containerOfferForU}>
                                <Text style={styles.textTitleOffer}>
                                    What Yourtour can offer to you
                                </Text>
                                <ItemOffer 
                                    title={`Free platform & marketing tools`}
                                    text='An easy to use platform to show your offers and manage your bookings. Promoting your offer on the platform is free and our marketing experts take care of all the professional promotion.'
                                />
                                <ItemOffer 
                                    title={`Excellent host support`}
                                    text='Our team is here for you anytime during office hours and weekends. We’ve got a team full of customer care, data and travel experts who are all here to help boost your hosting experience.'
                                />
                                <ItemOffer 
                                    title={`Payment guaranteed`}
                                    text='We make safe and trusted payment possible guaranteeing your payment, even with late cancellations and no shows.'
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                {/* phan get started */}
                <View style={styles.containerButtonStarted}>
                    <Text style={styles.textStarted}>Start making money doing what you love!</Text>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Active Tour Guide Screen');
                        }}
                        style={{ flex: .8 }}
                    >
                        <View style={styles.containerButton}>
                            <Text style={styles.textButton}>Get started!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}