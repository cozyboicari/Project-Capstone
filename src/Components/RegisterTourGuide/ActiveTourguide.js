import React, { Component } from 'react';
import { View, Text, TouchableOpacity, 
    StatusBar, TouchableWithoutFeedback,
    Keyboard, FlatList, Animated, Alert } from 'react-native';

// file css
import styles from './Styles';

// file global
import { colors } from '../../ConfigGlobal';

//library
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Ionicons';

// file component
import { QuestionItem } from './Questions';

export default class ActiveTourGuide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            next: 0,
            progress: 0,
            progressCount: 0,
            showSubmit: false,
            answer: '',
            answerd: [],
            listAnswer: [],
        }

        this.animated = new Animated.Value(0);
    }

    _getItemAnswer = text => {
        const { listAnswer } = this.state;
        let result = '';
        result = listAnswer.find(item => item === text);
        return result;
    }

    _pushItemAnswer = text => {
        const { listAnswer } = this.state;
        this.setState({
            listAnswer: [
                ...listAnswer,
                text
            ]
        });
    }

    _removeItemAnswer = text => {
        const { listAnswer } = this.state;
        let arrTemp = [...listAnswer];
        
        if(arrTemp.length > 0) {
            arrTemp = arrTemp.filter(item => item !== text);
        }

        this.setState({
            listAnswer:  arrTemp
        })
    }

    _getAnswer = () => {
        return this.state.answer;
    }

    _setAnswer = answer => {
        this.setState({ answer })
    }

    _pushAnswer = (newAnswer) => {
        const { answerd } = this.state;
        this.setState({
            answerd: [
                ...answerd,
                newAnswer
            ],
        })
    }

    _updateAnswer = (answerUpdate, position) => {
        let arrTemp = [...this.state.answerd];
        arrTemp[position] = { ...arrTemp[position], answer: answerUpdate };
        this.setState({ answerd: arrTemp });
    }
    
    _renderItem = ({ item }) => {
        return <QuestionItem next={this.state.next} itemQuestion={item} step={item.step} root={this}/>;
    }

    _filterAwnser = array => {
        let result = [];
        array.data.filter(item => {
            const getText = this._getItemAnswer(item.text);

            if(getText) {
                result.push(getText);
            }
        });
        console.log(result);
        return result;
    }

    componentDidMount() {
        this.props._onGetQuestions();
    }

    render() {
        const { next, showSubmit, progress, 
            progressCount, answer, answerd, } = this.state;
        const { questions, _onPushQuestions } = this.props;

        const WIDTH_BAR = 170;
        const HEIGHT_BAR = 6;
        const NUMBER_PROGRESS = WIDTH_BAR / 20;

        const arrayFilter = questions.filter(x => x.step === next);
 
        return(
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar barStyle='dark-content'/>
                    {/* view cau hoi */}
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View>
                            <FlatList
                                data={arrayFilter}
                                keyExtractor={item => item.idQuestion}
                                renderItem={this._renderItem}
                                bounces={false}
                            />
                        </View>
                        {
                            showSubmit &&
                            <TouchableOpacity
                                onPress={() => {
                                    Alert.alert('Notification', 'Do you want submit questions?', [
                                        {
                                            text: 'Canncel',
                                            onPress: () => {},
                                            style: 'cancel'
                                        },
                                        {
                                            text: 'Submit',
                                            onPress: () => {
                                                _onPushQuestions(answerd);
                                                Alert.alert('Notification', 'Your questions have been sent to us, and please wait for a review and we will get back to you via email !');
                                                const { goBack } = this.props.navigation;
                                                goBack();
                                            }
                                        }
                                    ], { cancelable: false});
                                }}
                            >
                                <Animatable.View
                                    animation='fadeInUpBig'
                                    duration={800}
                                    style={styles.containerButtonSubmit}
                                >
                                    <Text style={styles.textSubmit}>Submit</Text>
                                </Animatable.View>
                            </TouchableOpacity>
                    }
                    </View>

                    {/* phan next prev cau hoi */}
                    <View style={styles.containerBottomQuestion}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                            <Text style={styles.textProgressBar}>{`${progressCount}% completed`}</Text>
                            <View style={styles.containerProgressBar}>
                                {/* thanh bar o duoi */}
                                <View style={{
                                    backgroundColor: colors.BACKGROUND_CULTURE,
                                    width: WIDTH_BAR,
                                    height: HEIGHT_BAR,
                                    borderRadius: (WIDTH_BAR + HEIGHT_BAR) / 2,
                                }}/>
                                {/* thanh bar o tren */}
                                <Animated.View style={{
                                    backgroundColor: '#57A3A8',
                                    position: 'absolute',
                                    width: this.animated,
                                    height: HEIGHT_BAR,
                                    borderRadius: (WIDTH_BAR + HEIGHT_BAR) / 2,
                                }}/>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if( next !== 0 ) {
                                        this.setState({ 
                                            next: next - 1,
                                            showSubmit: false,
                                            progress: next === questions.length - 1 ? (progress - (NUMBER_PROGRESS * 2)) : (progress - NUMBER_PROGRESS),
                                            progressCount: next === questions.length - 1 ? (progressCount - 10) : (progressCount - 5),
                                            answer: answerd[next - 1].answer !== '' ? answerd[next - 1].answer : '',
                                        });
                                        
                                        // push anwser dau tien hoac anwser moi
                                        if(!answerd[next] && answer === '') {
                                            let filter = [];
                                            if(arrayFilter[0].type === 'flat-list' && arrayFilter[0].selected === 'more') {
                                                filter = this._filterAwnser(arrayFilter[0]);
                                            }
                                            this._pushAnswer({
                                                question: arrayFilter[0].question,
                                                answer: filter.length === 0 ? answer : filter
                                            });
                                        } // kiem tra xem co update k?
                                        else if(answerd[next]) {
                                            let filter = [];
                                            if(arrayFilter[0].type === 'flat-list' && arrayFilter[0].selected === 'more') {
                                                filter = this._filterAwnser(arrayFilter[0]);
                                            }
                                            this._updateAnswer(filter.length === 0 ? answer : filter, next);
                                        }
                                        
                                        Animated.timing(this.animated, {
                                            toValue: next === questions.length - 1 ? (progress - (NUMBER_PROGRESS * 2)) : (progress - NUMBER_PROGRESS),
                                            duration: 500,
                                            useNativeDriver: false
                                        }).start();
                                    }
                                }}
                            >
                                <Icons 
                                    name='chevron-up-circle-outline'
                                    size={33}
                                    color={colors.BACKGROUND_CULTURE}
                                    style={{ marginRight: 3 }}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity 
                                onPress={() => {
                                    
                                    //cau cuoi
                                    if(next === questions.length - 1) {
                                        this.setState({
                                            showSubmit: true,
                                            progress: progress + NUMBER_PROGRESS,
                                            progressCount: progressCount + 5,
                                        })
                                        if(!answerd[next]) {
                                            this._pushAnswer({
                                                question: arrayFilter[0].question,
                                                answer:  answer
                                            });
                                        }
                                        Animated.timing(this.animated, {
                                            toValue: progress + NUMBER_PROGRESS,
                                            duration: 500,
                                            useNativeDriver: false
                                        }).start();

                                        return;
                                    }

                                    this.setState({ 
                                        next: next + 1,
                                        progress: progress + NUMBER_PROGRESS,
                                        progressCount: progressCount + 5,
                                        answer: answerd[next + 1] ? answerd[next+ 1].answer : '',
                                    });
                                    
                                    // push anwser dau tien hoac anwser moi
                                    if(answerd.length === 0 || !answerd[next]) {
                                        let filter = [];
                                        if(arrayFilter[0].type === 'flat-list' && arrayFilter[0].selected === 'more') {
                                            filter = this._filterAwnser(arrayFilter[0]);
                                        }
                                        this._pushAnswer({
                                            question: arrayFilter[0].question,
                                            answer: filter.length === 0 ? answer : filter
                                        });
                                    }  // kiem tra xem co update k?
                                    else if(answerd[next]) {
                                        let filter = [];
                                        if(arrayFilter[0].type === 'flat-list' && arrayFilter[0].selected === 'more') {
                                            filter = this._filterAwnser(arrayFilter[0]);
                                        }
                                        this._updateAnswer(filter.length === 0 ? answer : filter, next);
                                    }


                                    Animated.timing(this.animated, {
                                        toValue: progress + NUMBER_PROGRESS,
                                        duration: 500,
                                        useNativeDriver: false
                                    }).start();
                                }}
                            >
                                <Icons 
                                    name='chevron-down-circle-outline'
                                    size={33}
                                    color={ colors.BACKGROUND_CULTURE }
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}