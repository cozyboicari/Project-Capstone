import React, { Component } from 'react';
import { View, Text, TouchableOpacity, 
    StatusBar, TouchableWithoutFeedback,
    Keyboard, FlatList, Animated } from 'react-native';

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
            next: 1,
            progress: 0,
            progressCount: 0,
            showSubmit: false,
            arrayFilter: [],
            answered: [],
            answer: '',
        }

        this.animated = new Animated.Value(0);
    }

    _pushAnswerd = (item) => {
        this.setState({
            answered: [
                ...this.state.answered,
                item
            ]
        })
    }

    _getAnswer = () => {
        return this.state.answer;
    }

    _setAnswer = answer => {
        this.setState({ answer });
    }
    
    _renderItem = ({ item }) => {
        return <QuestionItem itemQuestion={item} step={item.step} root={this}/>;
    }

    componentDidMount() {
        this.props._onGetQuestions();
    }

    render() {
        const { next, arrayFilter, showSubmit, progress, progressCount, answer, answered } = this.state;
        const { questions } = this.props;

        const WIDTH_BAR = 170;
        const HEIGHT_BAR = 6;
        const NUMBER_PROGRESS = WIDTH_BAR / 20;
 
        return(
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar barStyle='dark-content'/>
                    {/* view cau hoi */}
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <View>
                            <FlatList 
                                data={ next === 1 ? 
                                    questions.filter(item => item.step === next) : arrayFilter
                                }
                                keyExtractor={item => item.idQuestion}
                                renderItem={this._renderItem}
                                bounces={false}
                            />
                        </View>
                        {
                            showSubmit &&
                            <TouchableOpacity
                                onPress={() => {}}
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
                                    if( next - 1 !== 0 ) {
                                        this.setState({ 
                                            next: next - 1,
                                            arrayFilter: questions.filter(x => x.step === this.state.next - 1),
                                            showSubmit: false,
                                            progress: progress - NUMBER_PROGRESS,
                                            progressCount: progressCount - 5,
                                            answer: answered[next - 2].answer
                                        });

                                        Animated.timing(this.animated, {
                                            toValue: progress - NUMBER_PROGRESS,
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
                                    if(next + 1 <= questions.length) {
                                        this.setState({ 
                                            next: next + 1,
                                            arrayFilter: questions.filter(x => x.step === this.state.next + 1),
                                            progress: progress + NUMBER_PROGRESS,
                                            progressCount: progressCount + 5
                                        });
                                        
                                        console.log(answered);

                                        // push 
                                        if(answered.length === 0 || answered[next - 1].question !== arrayFilter[0].question) {
                                            const item = {
                                                question: next === 1 ? questions[0].question : arrayFilter[0].question,
                                                answer: answer,
                                            }
    
                                            this._pushAnswerd(item);
                                        } else {
                                            let answeredTemp = [...answered];
                                            answeredTemp[next - 1] = {...answeredTemp[next - 1], answer: answer};
                                            this.setState({ answered: answeredTemp });
                                        }



                                        Animated.timing(this.animated, {
                                            toValue: progress + NUMBER_PROGRESS,
                                            duration: 500,
                                            useNativeDriver: false
                                        }).start();
                                    }
                                    else if(next + 1 > questions.length) {
                                        this.setState({ 
                                            showSubmit: true,
                                            progress: progress + NUMBER_PROGRESS,
                                            progressCount: progressCount + 5
                                        });
                                        Animated.timing(this.animated, {
                                            toValue: progress + NUMBER_PROGRESS,
                                            duration: 500,
                                            useNativeDriver: false
                                        }).start();
                                    }
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