import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';

//css
import styles from './Styles';

// file config
import { colors } from '../../ConfigGlobal';

// file component
import HeaderComponent from '../Header/Header';

// file library
import Icons from 'react-native-vector-icons/Ionicons';

const Item = ({ title, number, onAddPeople, onRemovePeople, getAdults, getChildren, getPeoples }) => {
    return(
        <View style={styles.containerItem}>
            <View style={{flex: 2}}>
                <Text style={styles.textItem}>{title}</Text>
                { title === 'Trẻ em' &&
                    <Text style={styles.exampleText}>từ 0 đến 10 tuổi</Text>
                }
            </View>
            <View style={styles.containerIconsItem}>        
               {
                   (title === 'Người trưởng thành' && getAdults <= 1) ||
                   (title === 'Trẻ em' && getChildren === 0) ?
                   <Icons 
                        name='remove-circle-outline' 
                        size={40} 
                        color='#ddd'
                    />
                   :
                   <TouchableOpacity
                        onPress={() => onRemovePeople(title)}
                    >
                        <Icons 
                            name='remove-circle-outline' 
                            size={40} 
                            color='#444'
                        />
                    </TouchableOpacity>
               }
                <Text style={[styles.textItem, {
                    marginHorizontal: 10
                }]}>
                    {number}
                </Text>
                {
                    (getChildren + getAdults) >= getPeoples ?
                    <Icons 
                        name='add-circle-outline' 
                        size={40} 
                        color='#ddd'
                    /> :
                    <TouchableOpacity
                        onPress={() => onAddPeople(title)}
                    >
                        <Icons 
                            name='add-circle-outline' 
                            size={40} 
                            color='#444'
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
}

export default class NumberOfPeople extends Component {
    constructor(props) {
        super(props);

        this.state = {
            adults: 1,
            children: 0,
            total: 0,
            price: 0,
            numberPeople: 0,
        }
    }

    componentDidMount() {
        const { numberPeople, price } = this.props.route.params.tour;
        this.setState({
            numberPeople,
            price,
            total: numberPeople * price,
        })
    }

    _addPeople = title => {
        const { adults, children, numberPeople, price } = this.state;
        switch(title) {
            case 'Adults': return this.setState({ 
                adults: adults + 1,
                total: ((numberPeople * price) / (adults + 1)).toFixed(2)
            })
            case 'Children': return this.setState({ 
                children: children + 1,
            })
            default:
                return;
        }
    }

    _removePeople = title => {
        const { adults, children, numberPeople, price } = this.state;
        switch(title) {
            case 'Người trưởng thành': return this.setState({ 
                adults: adults - 1,
                total: ((numberPeople * price) / (adults - 1)).toFixed(2)
            })
            case 'Trẻ em': return this.setState({ 
                children: children - 1,
            })
            default:
                return;
        }
    }


    render() {
        const { total, adults, children, numberPeople, price } = this.state;
        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>

                <View style={{ flex: 1 }}>
                    <View style={styles.containerTop}>
                        <Text style={styles.titleNumberOfPeople}>Số lượng khách tham gia</Text>
                        <View style={styles.containerMid}>
                            <Item 
                                title='Người trưởng thành' number={adults}
                                onAddPeople={this._addPeople}
                                onRemovePeople={this._removePeople}
                                getAdults={adults}
                                getChildren={children}
                                getPeoples={numberPeople}
                            />
                            <Item 
                                title='Trẻ em' number={children}
                                onAddPeople={this._addPeople}
                                onRemovePeople={this._removePeople}
                                getAdults={adults}
                                getChildren={children}
                                getPeoples={numberPeople}
                            />
                        </View>
                    </View>
                    <View style={styles.containerBottom}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.textBottom}>Giá của mỗi người là </Text>
                            <Text style={[styles.textBottom, {
                                color: colors.BACKGROUND_BLUEYONDER,
                                fontWeight: 'bold'
                            }]}>{`$${total}`}</Text>
                        </View>
                        <Text style={styles.textExampleBottom}>Miễn phí dành cho trẻ em</Text>
                    </View>
                </View>
                <View style={styles.containerNext}>
                    <TouchableOpacity
                        onPress={() => {
                            const { navigate } = this.props.navigation;
                            const { dayBooking, tour } = this.props.route.params;
                            navigate('Order Tour Screen', {
                                total: (numberPeople * price),
                                dayBooking,
                                tour
                            });
                        }}
                    >
                        <View style={styles.containerButtonNext}>
                            <Text style={styles.textButtonNext}>Tiếp theo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}