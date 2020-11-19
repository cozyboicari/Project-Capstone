import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity, FlatList } from 'react-native';

//file css
import styles from './Styles';

//file global
import { colors } from '../../ConfigGlobal';

//library
import { CalendarList } from 'react-native-calendars';

//file component
import HeaderComponent from '../Header/Header';
import { color } from 'react-native-reanimated';

export default class Booking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date().toISOString().slice(0,10),
            getHours: new Date().getHours(),
            isToday: true,
            times: [
                { time: 7, text: '07:00', },
                { time: 8.3, text: '08:30', },
                { time: 10, text: '10:00', },
                { time: 11.3, text: '11:30', },
                { time: 13, text: '13:00', },
                { time: 14.3, text: '14:30', },
                { time: 16, text: '16:00', },
                { time: 17.3, text: '17:30', },
                { time: 19, text: '19:00', },
                { time: 20.3, text: '20:30', },
                { time: 22, text: '22:00', },
            ],
            selectedItem: null,
            time: ''
        }
    }

    componentDidMount() {
        const { times, getHours } = this.state;
        if(getHours < 22) {
            this.setState({ 
                selectedItem: times.filter(time => time.time > getHours)[0].time,
                time: times.filter(time => time.time > getHours)[0].text
            });
        }
    }

    _choosen = selectedItem => {
        this.setState({ 
            selectedItem: selectedItem.time,
            time: selectedItem.text
        });
    }


    _renderItem = ({ item }) => {
        const { selectedItem } = this.state;
        const isSelected = (selectedItem === item.time);

        return(
            <TouchableOpacity
                onPress={() => {
                    this._choosen(item);
                }}
            >
                <View style={[styles.containerItemTime, {
                    backgroundColor: isSelected ? colors.BACKGROUND_BLUEYONDER : color.BACKGROUND_CULTURE
                }]}>
                    <Text style={[styles.textItemTime, {
                        color: isSelected ? colors.BACKGROUND_CULTURE : '#444'
                    }]}>{item.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _getDateTime = (date, time) => {
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const month = monthNames[new Date(date).getMonth()];
        const day = new Date(date).getDate();

        return {
            month,
            day,
            time
        }
    }

    render() {
        const { selectedDate, times, 
            getHours, isToday, time } = this.state;

        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <HeaderComponent {...this.props}/>
                {/* show lich chon ngay */}
                <View style={{ flex: 1 }}>
                    <CalendarList
                        minDate={new Date()}
                        futureScrollRange={20}
                        pastScrollRange={0}
                        onDayPress={ day => {
                            const getDay = new Date().toISOString().slice(0,10);
                            if(day.dateString !== getDay) {
                                this.setState({ 
                                    selectedDate: day.dateString, 
                                    isToday: false,
                                    selectedItem: times[0].time,
                                    time: times[0].text
                                });
                            } else if(day.dateString === getDay) {
                                this.setState({ 
                                    selectedDate: day.dateString, 
                                    isToday: true,
                                    selectedItem: getHours < 22 && times.filter(time => time.time > getHours)[0].time,
                                    time: getHours < 22 && times.filter(time => time.time > getHours)[0].text
                                });
                            }
                        }}
                        markedDates={{
                            [selectedDate]: {selected: true, selectedColor: colors.BACKGROUND_BLUEYONDER }
                        }}
                    />
                </View>
                {/* picker time */}
                <View style={styles.containerBottom}>
                    <Text style={styles.textSelectTime}>Select time</Text>
                    <FlatList 
                        data={isToday ? times.filter(time => time.time > getHours) : times}
                        keyExtractor={item => item.text}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={this._renderItem}
                        style={{ marginRight: 25, flex: 1, }}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            const dayBooking = this._getDateTime(selectedDate, time);
                            navigate('Number of People Screen', {
                                dayBooking,
                                tour: this.props.route.params.tour
                            });
                        }}
                        style={{ flex: 2, paddingHorizontal: 20 }}
                    >
                        <View style={styles.containerButton}>
                            <Text style={styles.textSelect}>Select</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}