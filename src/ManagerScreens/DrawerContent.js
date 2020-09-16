import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

//thu vien ben ngoai
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Drawer, Text, Button } from 'react-native-paper';
import Icons from 'react-native-vector-icons/Ionicons';

//file css
import styles from './Styles';

//informartion user
const HeaderInfomationItem = props => {
    return(
        <View style={styles.containerItemHeader}>
            <Avatar.Image 
                source={{uri: props.avatar}}
                size={50}
            />
            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Jennie</Title>
                <Caption style={styles.caption}>@jennierubyjane</Caption>
            </View>
        </View>
    );
}

export default class DrawerContent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            avatar: "https://i.pinimg.com/564x/8e/ee/0d/8eee0de2cdfd08bf19f5153ebd1f6953.jpg",
        }
    }

    _returnData = newAvatar => {
        this.setState({ avatar: newAvatar });
    }
    
    render() {
        const { avatar } = this.state;
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.drawerContainer}>
                <DrawerContentScrollView {...this.props}>
                    <View style={styles.drawerContent}>

                        {/* phan header information */}
                        <View style={styles.userInfoSection}>
                            <HeaderInfomationItem avatar={avatar} />
                        </View>

                        {/* phan hien thi cac chuc nang */}
                        <View style={styles.row}/>
                        <Drawer.Section 
                            style={styles.drawerSection}
                        >
                            <DrawerItem
                                icon={
                                    ({size, color}) => <Icons name="home-outline" size={size} color={color}/> 
                                }
                                label="Home"
                                onPress={() => {
                                    navigate('Home');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({size, color}) => <Icons name="notifications-outline" size={size} color={color}/> 
                                }
                                label="Notification"
                                onPress={() => {
                                    navigate('Notification');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({size, color}) => <Icons name="bookmarks-outline" size={size} color={color}/>
                                }
                                label="Wish list"
                                onPress={() => {
                                    navigate('Wish list');
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({size, color}) => <Icons name="chatbubbles-outline" size={size} color={color}/> 
                                }
                                label="Conversation"
                                onPress={() => {
                                    navigate('Conversation')
                                }}
                            />
                            <DrawerItem
                                icon={
                                    ({size, color}) => <Icons name="settings-outline" size={size} color={color}/> 
                                }
                                label="Settings"
                                onPress={() => {
                                    navigate('Settings')
                                }}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>

                {/* phan logout */}
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => <Icons name="exit-outline" color={color} size={size}/>}
                        label="Sign Out"
                        onPress={() => {
                            //logout
                        }}
                    />
                </Drawer.Section>
            </View>
        );
    }
}