import React, { Component } from 'react';
import { Text, View, StatusBar, 
    TouchableOpacity, TextInput, 
    Dimensions, FlatList, Alert, KeyboardAvoidingView } from 'react-native';

// file css
import styles from './Styles';

// file component
import HeaderComponent from '../Header/Header';
//file library
import ImagePicker from 'react-native-image-picker';
import { colors } from '../../ConfigGlobal';
import RNPickerSelect from 'react-native-picker-select';
import Icons from 'react-native-vector-icons/Ionicons';
//bien config
const { width, height } = Dimensions.get('window');

//firebase
import { auth } from '../../Database/Firebase/ConfigGlobalFirebase';

const WIDTH_TEXTINPUT = width * 0.6;
const HEIGHT_TEXTINPUT = height * 0.045;

const ItemCreateTour = ({ title, data, typeInput, isButton, _chooseFileImage, _setText, dataArr }) => {
    
    return(
        <View style={styles.containerItemCreateTour}>
            <Text style={styles.textItemCreateTour}>{title}</Text>
            <View style={{ flexDirection: 'row' }}>
                { title !== 'Thể loại du lịch' ?
                    <TextInput 
                        style={[styles.textInputItemCreateTour, {
                            width: isButton ? WIDTH_TEXTINPUT : width * 0.89,
                            height: (title !== ' Giới thiệu về chuyến tham quan' && title !== 'Những gì chúng ta sẽ làm') ? HEIGHT_TEXTINPUT : height * 0.2,
                        }]}
                        value={data}
                        editable={isButton ? false : true}
                        multiline={ (title !== ' Giới thiệu về chuyến tham quan' && title !== 'Những gì chúng ta sẽ làm')  ? false : true }
                        keyboardType={typeInput}
                        onChangeText={text => {
                            _setText(title, text);
                        }}
                    /> :
                    <RNPickerSelect 
                        value={data}
                        onValueChange={value => _setText(title, value)}
                        items={dataArr}
                        placeholder={{
                            label: 'Hãy chọn thể loại du lịch...',
                            value: '',
                        }}
                        style={{
                            inputIOS: [styles.textInputItemCreateTour, {
                                width: isButton ? WIDTH_TEXTINPUT : width * 0.89,
                                height: (title !== ' Giới thiệu về chuyến tham quan' && title !== 'Những gì chúng ta sẽ làm') ? HEIGHT_TEXTINPUT : height * 0.2,
                            }],
                            inputAndroid: [styles.textInputItemCreateTour, {
                                width: isButton ? WIDTH_TEXTINPUT : width * 0.89,
                                height: (title !== ' Giới thiệu về chuyến tham quan' && title !== 'Những gì chúng ta sẽ làm') ? HEIGHT_TEXTINPUT : height * 0.2,
                                justifyContent: 'center'
                            }],
                            placeholder: {
                                color: '#aaa',
                                fontSize: 16
                            },
                        }}
                        Icon={() => {
                            return(
                                <Icons 
                                    name='chevron-down-outline'
                                    size={23}
                                    color='#444'
                                    style={{ padding: 5, paddingTop: 17 }}
                                />
                            )
                        }}
                    />
                }
                {isButton && <TouchableOpacity
                    onPress={_chooseFileImage}
                    style={styles.containerButtonChangeImage}
                >
                    <Text style={styles.textButtonChangeImage}>Thay đổi</Text>
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
            category: [
                {
                    label: 'Khám phá thành phố',
                    value: 'Khám phá thành phố'
                },
                {
                    label: 'Khám phá ẩm thực',
                    value: 'Khám phá ẩm thực'
                },
                {
                    label: 'Khám phá danh lam thắng cảnh',
                    value: 'Khám phá danh lam thắng cảnh'
                },
                {
                    label: 'Khám phá văn hoá, lịch sử',
                    value: 'Khám phá văn hoá, lịch sử'
                }
            ],
            imageTour: '',
            nameTour: '',
            introduceCity: '',
            introduceCityDetail: '',
            tourHours: '',
            numberOfTourists: '',
            tourCategory: undefined,
            languages: '',
            price: '',
            numberAccount: ''
        }
    }

    _setText = (key, value) => {
        switch(key) {
            case 'Tên chuyến du lịch': return this.setState({ nameTour: value });
            case ' Giới thiệu về chuyến tham quan': return this.setState({ introduceCity: value });
            case 'Những gì chúng ta sẽ làm': return this.setState({ introduceCityDetail: value});
            case 'Thời gian chuyến đi': return this.setState({ tourHours: value});
            case 'Số lượng khách': return this.setState({ numberOfTourists: value});
            case 'Thể loại du lịch': return this.setState({ tourCategory: value});
            case 'Ngôn ngữ': return this.setState({ languages: value });
            case 'Giá ($ / mỗi người)': return this.setState({ price: value});
            case 'Số tài khoản': return this.setState({ numberAccount: value})
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
                        <Text style={styles.textItemScheduleDetail}>{`${index + 1}. Điểm dừng chân`}</Text>
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
                                <Text style={styles.textDeleteSchedule}>Xoá lịch trình</Text>
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
                    <Text style={styles.textItemScheduleDetail}>Giải thích</Text>
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
        this.props._onGetTourGuide(auth().currentUser.uid);

        // get date tu params
        if(this.props.route.params) {
            const { tour } = this.props.route.params;
            this.setState({ 
                schedule: tour.schedule, 
                imageTour: tour.tourguideImageCover, 
                nameTour: tour.name, 
                introduceCity: tour.introduce, 
                introduceCityDetail: tour.description, 
                tourHours: tour.time.toString(),
                numberOfTourists: tour.numberPeople.toString(), 
                tourCategory: tour.category, 
                languages: tour.languages, 
                price: tour.price.toString(),
                numberAccount: tour.numberAccount
            })
        }
    }

    render() {
        const { schedule, imageTour, nameTour, 
            introduceCity, introduceCityDetail, tourHours,
            numberOfTourists, tourCategory, languages, price, numberAccount, category
        } = this.state;

        const { idCity, name, uID, picture } = this.props.tourGuide;

        return(
            <KeyboardAvoidingView style={styles.container} behavior='padding'>
                <View style={styles.container}>
                    <StatusBar barStyle='light-content'/>
                    <HeaderComponent {...this.props} isHome={false}/>
                    <View style={styles.containerTitleCreateTour}>
                        { !this.props.route.params ?
                            <Text style={{ fontSize: 16, fontWeight: '300', flex: 1}}>Hãy tạo một chuyến đi cho mình!</Text> :
                            <Text style={{ fontSize: 16, fontWeight: '300', flex: 1}}>Chỉnh sửa bài viết của bạn!</Text>
                        }
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
                                    scheduleDetail: schedule,
                                    numberAccount: numberAccount
                                };
                                
                                const tourUpdate = {
                                    category: tourCategory,
                                    description: introduceCityDetail,
                                    introduce: introduceCity,
                                    languages: languages,
                                    name: nameTour,
                                    numberPeople: parseInt(numberOfTourists),
                                    price: parseFloat(price),
                                    time: parseFloat(tourHours),
                                    tourguideImageCover: imageTour,
                                    scheduleDetail: schedule,
                                    numberAccount: numberAccount,
                                    id: this.props.route.params.tour.id
                                }

                                Alert.alert(
                                'Thông báo',
                                !this.props.route.params ? 'Bạn có muốn tạo chuyến đi này?' : 'Bạn có muốn cập nhật lại tour?',
                                [
                                    {
                                        text: 'Xác nhận',
                                        onPress: () => {
                                            
                                            if(this.props.route.params) {
                                                this.props._onUpdateTour(tourUpdate);
                                                Alert.alert('Thông báo!', 'Cập nhật thành công!');
                                            } else {
                                                this.props._onCreateTour(newTour);
                                                Alert.alert('Thông báo!', 'Chuyến đi của bạn đã được gửi lên, chúng tôi sẽ xem xét và duyệt sớm nhất, cảm ơn!');
                                            }
                                            
                                            const { goBack } = this.props.navigation;
                                            goBack();
                                        }
                                    },
                                    {
                                        text: 'Huỷ',
                                        onPress: () => {},
                                        style: 'cancel'
                                    },
                                    { cancelable: false }
                                ])     
                            }}
                            style={styles.containerSubmit}
                        >
                            <Text style={[styles.textTitleCreateTour, {
                                color: colors.BACKGROUND_CULTURE,
                                fontWeight: 'bold',
                                fontSize: 17
                            }]}>
                                { this.props.route.params ? 'Chỉnh sửa' : 'Tạo chuyến đi' }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* item create tour */}
                    <FlatList
                        data={schedule}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                        showsVerticalScrollIndicator={false}
                        ListHeaderComponent={
                            <View style={{ flex: 1, marginTop: 20 }}>
                                <ItemCreateTour _setText={this._setText} data={imageTour} title='Ảnh của chuyến đi' typeInput='default' isButton={true} _chooseFileImage={this._chooseFileImage}/>
                                <ItemCreateTour _setText={this._setText} data={nameTour} title='Tên chuyến du lịch' typeInput='default' isButton={false}/>
                                <ItemCreateTour  _setText={this._setText} data={introduceCity} title=' Giới thiệu về chuyến tham quan' typeInput='default' isButton={false}/>
                                <ItemCreateTour _setText={this._setText} data={introduceCityDetail} title='Những gì chúng ta sẽ làm' typeInput='default' isButton={false}/>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ItemCreateTourNumber _setText={this._setText} data={tourHours} title='Thời gian chuyến đi' />
                                    <ItemCreateTourNumber _setText={this._setText} data={numberOfTourists} title='Số lượng khách' />
                                </View>
                                <ItemCreateTour _setText={this._setText} dataArr={category} data={tourCategory} title='Thể loại du lịch' typeInput='default' isButton={false}/>
                                <ItemCreateTour _setText={this._setText} data={languages} title='Ngôn ngữ' typeInput='default' isButton={false}/>
                                <ItemCreateTourNumber _setText={this._setText} data={price} title='Giá ($ / mỗi người)' isButton={false}/>
                                <ItemCreateTour _setText={this._setText} data={numberAccount} title='Số tài khoản' typeInput='numeric' isButton={false}/>
                                {/* flatlist schedule */}
                                <Text style={[styles.textItemCreateTour, {
                                    marginHorizontal: 22,
                                    marginBottom: 5
                                }]}>Lịch trình cụ thể</Text>
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
                                        Thêm lịch trình
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}