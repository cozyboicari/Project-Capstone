import React, { Component } from 'react';
import { View, Text, TouchableOpacity, 
    TextInput, StatusBar, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';

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
            arrayFilter: [],
            showSubmit: false
        }
    }

    _renderItem = ({ item }) => {
        return <QuestionItem itemQuestion={item} step={item.step}/>;
    }

    componentDidMount() {
        this.props._onGetQuestions();
        const { questions } = this.props;
        const { next } = this.state;

        this.setState({
            arrayFilter: questions.filter(item => item.step === next)
        })
    }

    render() {
        const { next, arrayFilter, showSubmit } = this.state;
        const { questions } = this.props;
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
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if(next - 1 !== 0 ) {
                                        this.setState({ 
                                            next: next - 1,
                                            arrayFilter: questions.filter(x => x.step === this.state.next - 1),
                                            showSubmit: false
                                        })
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
                                        })
                                    } 
                                    else if(next + 1 === questions.length) {
                                        this.setState({ next: next + 1 })
                                    }
                                    else if(next + 1 > questions.length) {
                                        this.setState({ showSubmit: true })
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