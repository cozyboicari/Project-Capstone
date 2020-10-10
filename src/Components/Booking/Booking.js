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
                { time: 7, text: '07:00', picked: false },
                { time: 8.3, text: '08:30', picked: false },
                { time: 10, text: '10:00', picked: false },
                { time: 11.3, text: '11:30', picked: false },
                { time: 13, text: '13:00', picked: false },
                { time: 14.3, text: '14:30', picked: false },
                { time: 16, text: '16:00', picked: false },
                { time: 17.3, text: '17:30', picked: false },
                { time: 19, text: '19:00', picked: false },
                { time: 20.3, text: '20:30', picked: false },
                { time: 22, text: '22:00', picked: false },
            ],
            selectedItem: null
        }
    }

    componentDidMount() {
        const { times, getHours } = this.state;
        this.setState({ selectedItem: times.filter(time => time.time > getHours)[0].time });
    }

    _choosen = selectedItem => {
        this.setState({ selectedItem });
    }

    _renderItem = ({ item }) => {
        const isSelected = (this.state.selectedItem === item.time);
        return(
            <TouchableOpacity
                onPress={() => this._choosen(item.time)}
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

    render() {
        const { selectedDate, times, getHours, isToday, selectedItem } = this.state;
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
                                    selectedItem: times[0].time
                                });
                            } else if(day.dateString === getDay) {
                                this.setState({ 
                                    selectedDate: day.dateString, 
                                    isToday: true,
                                    selectedItem: times.filter(time => time.time > getHours)[0].time
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
                        onPress={() => {}}
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