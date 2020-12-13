import React, { Component } from 'react';
import { View, Text, StatusBar, ScrollView, 
    TouchableOpacity, Image } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';

// file library
import Icons from 'react-native-vector-icons/Ionicons';

// file global
import { colors } from '../../ConfigGlobal';

// firebase
import { auth, firestore } from '../../Database/Firebase/ConfigGlobalFirebase';

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

    componentDidMount() {
        this.props._onGetTraveler();
    }

    render() {
        //check user va tour guide

        let uid = !this.props.route.params ? auth().currentUser.uid : this.props.route.params.idTourGuide;
 
        const { picture, name, title, 
        passions, languages, imageProfile, idCity, description, uID } = this.props.tourGuide;
        
        if(!title || !passions || !languages || !imageProfile || !description) {
            this.props._onGetTourGuide(uid);
        }

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>

                {/* phan top */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.containerAvatarAndInformation}>
                        <View style={styles.containerAvatar}>
                            <Image 
                                style={styles.avatar}
                                source={{ uri: picture }}
                            />
                        </View>
                        <View style={styles.containerName}>
                            <Text style={[styles.name, {
                                fontSize: 27,
                                fontWeight: '700'
                            }]}>{name}</Text>

                            <Text style={[styles.name, {
                                fontSize: 24,
                                fontWeight: '500'
                            }]}>{title === '' ? '(Chưa có tiêu đề)' : `(${title})`}</Text>
                        </View>
                    </View>
                    {(uid === auth().currentUser.uid) && <TouchableOpacity
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            navigate('Edit Profile Detail Screen', {
                                title: title,
                                languages: languages,
                                passions: passions,
                                imageProfile: imageProfile,
                                description: description,
                            });
                        }}
                    >
                        <View style={{ 
                            alignItems: 'flex-end', marginRight: 20
                        }}>
                            <Text style={{ 
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: colors.BACKGROUND_BLUEYONDER
                            }}>
                                Chỉnh sửa hồ sơ
                            </Text>
                        </View>
                    </TouchableOpacity>}
                    {/* phan mid */}
                    <View style={styles.containerInfoDetail}>
                        <ItemDetail 
                            text='Tôi có thể nói được'
                            data={languages === '' ? '*Bạn chưa có ngôn ngữ nào*' : languages}
                            nameIcon='globe-outline'
                        />
                        <ItemDetail 
                            text='Niềm đam mê của tôi là'
                            data={passions === '' ? '*Hãy nhập sở thích của bạn*' : passions}
                            nameIcon='heart'
                        />

                        {/* phan gioi thieu */}
                        <View style={styles.containerIntroduce}>
                            <Text style={styles.textIntroduce}>Xin chào! rất vui được gặp bạn</Text>
                            {   imageProfile === '' ?
                                <View style={[styles.avatarIntroduce, {
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }]}>
                                    <Text style={{
                                        fontSize: 17,
                                        color: colors.BACKGROUND_CULTURE
                                    }}>
                                        Chưa có ảnh cho hồ sơ
                                    </Text>
                                </View> :
                                <Image 
                                    source={{ uri: imageProfile }}
                                    style={styles.avatarIntroduce}
                                />
                            }
                            <View style={styles.containerDescription}>
                                <Text style={styles.description}>{
                                    description === '' ? '*you have no description*' : description
                                }</Text>
                            </View>
                            <ItemDetail_2 
                                text='Tôi đang sống tại'
                                data={idCity}
                                nameIcon='location'
                            />
                            <ItemDetail_2 
                                text='Xác nhận'
                                data='Hướng dẫn viên'
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
                {(uid !== auth().currentUser.uid) && <View style={styles.containerBottom}>
                    <TouchableOpacity
                        onPress={() => {
                            let check = false;
                            firestore()
                                .collection('threads')
                                .get()
                                .then(querySnapshot => {
                                    let tempItem = {};
                                    querySnapshot.docs.forEach(item => {
                                        const idUser1 = item.data().user_1._id;
                                        const idUser2 = item.data().user_2._id;
                                        if(uid === idUser1 && this.props.traveler.uID === idUser2) {
                                            check = true;
                                            tempItem = item;
                                            return;
                                        }
                                    });

                                    if(check) {
                                        const { navigate } = this.props.navigation;
                                        navigate('Chat User Screen', {
                                            thread: tempItem,
                                            imageUser: tempItem.data().user_1 === uid ? tempItem.data().user_1.image : tempItem.data().user_2.image
                                        });
                                        return;
                                    }

                                    // kiem tra khong trung thi push vao
                                    firestore().collection('threads')
                                    .add({
                                        latestMessage: {
                                            text: '',
                                            createdAt: new Date().getTime()
                                        },
                                        // add them id, image, nameUser cua 2 user
                                        user_1: {
                                            _id: uID,
                                            nameUser: name,
                                            image: picture
                                        },
                                        user_2: {
                                            _id: this.props.traveler.uID,
                                            nameUser: this.props.traveler.name,
                                            image: this.props.traveler.picture
                                        },
                                    })
                                    .then(docRef => {
                                        docRef.collection('messages').add({
                                            text: `Please enter something...!`,
                                            createdAt: new Date().getTime(),
                                            system: true
                                        })

                                        const { navigate } = this.props.navigation;
                                        navigate('Trò chuyện');
                                    })
                                });
                        }}
                    >
                        <View style={styles.containerButtonContact}>
                            <Text style={styles.textButtonContact}>Liên lạc với tôi</Text>
                        </View>
                    </TouchableOpacity>
                </View>}
            </View>
        );
    }
}