import React, { Component } from 'react';
import { Text, View, StatusBar, 
    TouchableOpacity, TextInput, 
    Dimensions, FlatList, Alert } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';
//file library
import ImagePicker from 'react-native-image-picker';
import { colors } from '../../ConfigGlobal';
//bien config
const { width, height } = Dimensions.get('window');

//firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';

const WIDTH_TEXTINPUT = width * 0.6;
const HEIGHT_TEXTINPUT = height * 0.045;

const ItemCreateTour = ({ title, data, typeInput, isButton, _chooseFileImage, _setText }) => {
    return(
        <View style={styles.containerItemCreateTour}>
            <Text style={styles.textItemCreateTour}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput 
                    style={[styles.textInputItemCreateTour, {
                        width: isButton ? WIDTH_TEXTINPUT : width * 0.89,
                        height: (title !== 'Introduce city' && title !== 'Introduce city detail') ? HEIGHT_TEXTINPUT : height * 0.2,
                    }]}
                    value={data}
                    editable={isButton ? false : true}
                    multiline={ (title !== 'Introduce city' && title !== 'Introduce city detail') ? false : true }
                    keyboardType={typeInput}
                    onChangeText={text => {
                        _setText(title, text);
                    }}
                />
                {isButton && <TouchableOpacity
                    onPress={_chooseFileImage}
                    style={styles.containerButtonChangeImage}
                >
                    <Text style={styles.textButtonChangeImage}>Change</Text>
                </TouchableOpacity>}
            </View>
        </View>
    );
}

const ItemCreateTourNumber = ({ title, data,  _setText }) => {
    return(
        <View style={styles.containerItemCreateTour}>
            <Text style={styles.textItemCreateTour}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TextInput 
                    value={data}
                    style={[styles.textInputItemCreateTour, {
                        width: width * 0.3,
                        height: HEIGHT_TEXTINPUT
                    }]}
                    keyboardType='numeric'
                    onChangeText={text => {
                        _setText(title, text);
                    }}
                />
            </View>
        </View>
    );
}

export default class CreateTours extends Component {
    constructor(props) {
        super(props);
        this.state = {
            schedule: [
                { name: '', detail: '' },
            ],
            imageTour: '',
            nameTour: '',
            introduceCity: '',
            introduceCityDetail: '',
            tourHours: '',
            numberOfTourists: '',
            tourCategory: '',
            languages: '',
            price: '',
        }
    }

    _setText = (key, value) => {
        switch(key) {
            case 'Name tour': return this.setState({ nameTour: value });
            case 'Introduce city': return this.setState({ introduceCity: value });
            case 'Introduce city detail': return this.setState({ introduceCityDetail: value});
            case 'Tour hours': return this.setState({ tourHours: value});
            case 'Number of tourists': return this.setState({ numberOfTourists: value});
            case 'Tour category': return this.setState({ tourCategory: value});
            case 'Languages': return this.setState({ languages: value });
            case 'Price ( ...$ / hour )': return this.setState({ price: value});
            default: return;
        }
    }

    _chooseFileImage = () => {
        let options = {
            title: 'Select image avatar',
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({ imageTour: 'data:image/jpeg;base64,' + response.data });
            }
        })
    }

    //schedule detail item
    _renderItem = ({ item, index }) => {
        return(
            <View style={[styles.containerItemScheduleDetail, {
                marginHorizontal: 22,
                marginBottom: 10
            }]}>
                <View style={{ marginBottom: 10}}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.textItemScheduleDetail}>{`${index + 1}. Schedule name`}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                const { schedule } = this.state;
                                if(schedule.length > 1) {
                                    let array = [...schedule];
                                    array.splice(index, 1);
                                    this.setState({ schedule: array });
                                }
                            }}
                        >
                            <View style={styles.containerDeleteSchedule}>
                                <Text style={styles.textDeleteSchedule}>delete schedule</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TextInput 
                        style={[styles.textInputItemCreateTour, {
                            width: width * 0.5,
                            height: height * 0.04
                        }]}
                        value={item.name}
                        onChangeText={text => {
                            const updateText = this.state.schedule.slice();
                            updateText[index].name = text;
                            this.setState({ schedule: updateText })
                        }}
                        autoCorrect={false}
                    />
                </View>
                <View>
                    <Text style={styles.textItemScheduleDetail}>Schedule summary</Text>
                    <TextInput
                        onChangeText={text => {
                            const updateText = this.state.schedule.slice();
                            updateText[index].detail = text;
                            this.setState({ schedule: updateText })
                        }}
                        autoCorrect={false}
                        style={[styles.textInputItemCreateTour, {
                            height: height * 0.04
                        }]}
                        value={item.detail}
                    />
                </View>
            </View>
        );
    }

    componentDidMount() {
        this.props._onGetTourGuide(auth().currentUser.uid)
    }

    render() {
        const { schedule, imageTour, nameTour, 
            introduceCity, introduceCityDetail, tourHours,
            numberOfTourists, tourCategory, languages, price
        } = this.state;

        const { idCity, name, uID, picture } = this.props.tourGuide;

        return(
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <HeaderComponent {...this.props} isHome={false}/>
                <View style={styles.containerTitleCreateTour}>
                    <Text style={styles.textTitleCreateTour}>Create your tour</Text>
                    <TouchableOpacity
                        onPress={() => {
                            const newTour = {
                                avgRating: 0,
                                category: tourCategory,
                                description: introduceCityDetail,
                                introduce: introduceCity,
                                languages: languages,
                                name: nameTour,
                                numRatings: 0,
                                numberPeople: parseInt(numberOfTourists),
                                price: parseFloat(price),
                                time: parseFloat(tourHours),
                                tourguideID: uID,
                                tourguideImage: picture,
                                tourguideImageCover: imageTour,
                                tourguideName: name,
                                cityID: idCity,
                                scheduleDetail: schedule
                            };
                            Alert.alert('Notification', 'Would you like create your tour?', [
                                {
                                    text: 'OK',
                                    onPress: () => {
                                        this.props._onCreateTour(newTour);
                                        const { goBack } = this.props.navigation;
                                        goBack();
                                    }
                                },
                                {
                                    text: 'Cannel',
                                    onPress: () => {},
                                    style: 'cancel'
                                },
                                { cancelable: false }
                            ])     
                        }}
                        style={{ padding: 12}}
                    >
                        <View style={styles.containerSubmit}>
                            <Text style={[styles.textTitleCreateTour, {
                                color: colors.BACKGROUND_CULTURE,
                                fontWeight: 'bold',
                                fontSize: 17
                            }]}>
                                Submit your tour
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* item create tour */}
                <FlatList 
                    data={schedule}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View style={{ flex: 1}}>
                            <ItemCreateTour _setText={this._setText} data={imageTour} title='Image tour' typeInput='default' isButton={true} _chooseFileImage={this._chooseFileImage}/>
                            <ItemCreateTour _setText={this._setText} data={nameTour} title='Name tour' typeInput='default' isButton={false}/>
                            <ItemCreateTour  _setText={this._setText} data={introduceCity} title='Introduce city' typeInput='default' isButton={false}/>
                            <ItemCreateTour _setText={this._setText} data={introduceCityDetail} title='Introduce city detail' typeInput='default' isButton={false}/>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <ItemCreateTourNumber _setText={this._setText} data={tourHours} title='Tour hours' />
                                <ItemCreateTourNumber _setText={this._setText} data={numberOfTourists} title='Number of tourists' />
                            </View>
                            <ItemCreateTour _setText={this._setText} data={tourCategory} title='Tour category' typeInput='default' isButton={false}/>
                            <ItemCreateTour _setText={this._setText} data={languages} title='Languages' typeInput='default' isButton={false}/>
                            <ItemCreateTourNumber _setText={this._setText} data={price} title='Price ( ...$ / hour )' isButton={false}/>
                            {/* flatlist schedule */}
                            <Text style={[styles.textItemCreateTour, {
                                marginHorizontal: 22,
                                marginBottom: 10
                            }]}>Schedule detail</Text>
                        </View>
                    }
                    ListFooterComponent={
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    schedule: [...schedule, {
                                        name: '',
                                        detail: ''
                                    }]
                                })
                            }}
                        >
                            <View style={styles.containerButtonAddSchedule}>
                                <Text style={styles.textButtonAddSchedule}>
                                    Add schedule
                                </Text>
                            </View>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }
}