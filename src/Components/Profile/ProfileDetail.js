import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file library
import Icons from 'react-native-vector-icons/Ionicons';

// file global
import { colors } from '../../ConfigGlobal';


const ItemDetail = ({ text, data, nameIcon }) => {
    return(
        <View style={styles.containerItemDetail}>
            <View style={{ flexDirection: 'row' }}>
                <Icons name={nameIcon} size={22} color='#444'/>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View>
                <Text style={styles.data}>{data}</Text>
            </View>
        </View>
    );
}

const ItemDetail_2 = ({ text, data, nameIcon }) => {
    return(
        <View style={[styles.containerItemDetail, { marginBottom: 15 }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icons name={nameIcon} size={23} color='#444'/>
                <Text style={[styles.text, { marginLeft: 5, fontSize: 17 }]}>{text}</Text>
                <Text style={[styles.data, { 
                    marginTop: 0, 
                    textTransform: 'uppercase',
                    fontWeight: '700'
                }]}>{data}</Text>
            </View>
        </View>
    );
}



export default class ProfileDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>

                {/* phan top */}
                <ScrollView>
                    <View style={styles.containerAvatarAndInformation}>
                        <View style={styles.containerAvatar}>
                            <View style={styles.avatar}/>
                        </View>
                        <View style={styles.containerName}>
                            <Text style={[styles.name, {
                                fontSize: 27,
                                fontWeight: '700'
                            }]}>Phong Le</Text>

                            <Text style={[styles.name, {
                                fontSize: 24,
                                fontWeight: '500'
                            }]}>The Cosmopolitan Foodie</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <View style={{ 
                            alignItems: 'flex-end', marginRight: 20
                        }}>
                            <Text style={{ 
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: colors.BACKGROUND_BLUEYONDER
                            }}>
                                Edit profile tour guide
                            </Text>
                        </View>
                    </TouchableOpacity>
                    {/* phan mid */}
                    <View style={styles.containerInfoDetail}>
                        <ItemDetail 
                            text='I speak'
                            data='Français, English, Español, Português'
                            nameIcon='globe-outline'
                        />
                        <ItemDetail 
                            text='My passions are'
                            data='Movies, Local history, Dining out'
                            nameIcon='heart'
                        />

                        {/* phan gioi thieu */}
                        <View style={styles.containerIntroduce}>
                            <Text style={styles.textIntroduce}>Hi there! Nice to meet you</Text>
                            <View style={[styles.avatarIntroduce, {
                                alignItems: 'center',
                                justifyContent: 'center'
                            }]}>
                                <Text style={{
                                    fontSize: 17,
                                    color: colors.BACKGROUND_CULTURE
                                }}>no picture for profile yet</Text>
                            </View>
                            <View style={styles.containerDescription}>
                                <Text style={styles.description}>
                                    {`I'm an experienced guide working with Withlocals for 3 years now. I'm studying part-time to become a licence guide in Paris.

I live in Paris for 16 years now, and I’m passionate about my city.

I grew up in Marseille in the south of France (also I was born in Paris) and every summer my parents and I would travel through Europe in a camping car.

When I was 21, I moved to London for 3 years and studied photojournalism while doing every kind of jobs possible from selling French food, to Brazilian underwear, or baby clothes...

Back in Paris I’ve worked in journalism but behind a computer and I lived in the 10th, 18th, and now the 19th arrondissement.

The 19th is very successful among Parisian as it is less touristy and it is surprisingly green compare to the center of Paris with some interesting wildlife. The area is worth a visit with The Paris Philharmonic designed by Jean Nouvelle, the Parc de la Villette, a science museum for kids called la cité des sciences and don’t miss another very different parc: les Buttes Chaumont while you are here!

My other passion is cinema, and Paris is a great city where a lots of movies festivals are happening, and I’ll probably sneak in some of these things in our tour. By the way all movies theatres show movies in their original language here. The Quartier Latin houses at least 6 independent cinemas where you can always watch a Hitchcock movie (the French here don’t talk or don’t eat during the film!).

Also, I used to be a big pop-rock music amateur and I could take you to the top 10 best vinyl stores in Paris and advise you about the concert in town and around. My favourite bands are the Smiths, The Cure, Sonic Youth and Elliott Smith.

One more thing, I am volunteering in a local version of Parc Slope: La Louve and participate in my community garden where I grew tomatoes and roses.

And of course, I take care of my adorable cat!

You can ask me for a personalized offer at any time, and I will get back to you with an answer on the same day.`}
                                </Text>
                            </View>
                            <ItemDetail_2 
                                text='I live in'
                                data='paris'
                                nameIcon='location'
                            />
                            <ItemDetail_2 
                                text='Verified'
                                data='tour guide'
                                nameIcon='ribbon'
                            />
                        </View>
                        {/* flat list view tours */}
                        {/* <View style={styles.containerViewTours}>
                            <Text style={styles.textIntroduce}>Some of my tours that you can book</Text>
                        </View> */}
                    </View>
                </ScrollView>
                {/* phan bottom */}
                <View style={styles.containerBottom}>
                    <TouchableOpacity
                        onPress={() => {}}
                    >
                        <View style={styles.containerButtonContact}>
                            <Text style={styles.textButtonContact}>Contact me</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}