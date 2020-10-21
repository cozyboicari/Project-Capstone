import React, { Component } from 'react';
import { View, Text, TouchableOpacity, 
    TextInput, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';

// file css
import styles from './Styles';

// file global
import { colors } from '../../ConfigGlobal';

//library
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Ionicons';

// file component
import { 
    Question_1, Question_10, Question_11, Question_12, Question_13 ,Question_14, Question_15, Question_16, Question_17,
    Question_18, Question_19, Question_2, Question_20, Question_3, Question_4, Question_5, Question_6, Question_7, Question_8,
    Question_9,
} from './Questions';

export default class ActiveTourGuide extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            next: 1,
        }
    }

    _setState = (text) => {
        this.setState({ text });
    }

    _getState = () => {
        return this.state.text;
    }


    render() {
        const { next } = this.state;
        return(
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <StatusBar barStyle='dark-content'/>
                    {/* view cau hoi */}
                    {
                        (next === 1 && <Question_1 step={next} question='Please fill in your first name and last name:' obj={this} />) ||
                        (next === 2 && <Question_2 step={next} question='What city do you live in? (If you cannot find it in the list, select none and press enter go to the next question)' obj={this} />) ||
                        (next === 3 && <Question_3 step={next} question='For how many years have you been living in your city?' obj={this} />) ||
                        (next === 4 && <Question_4 step={next} question='How would you rate your English level?' obj={this} />) ||
                        (next === 5 && <Question_5 step={next} question={`Most tours you'll guide as a Yourtour host are in English. In which other languages could you provide a guided tour?`} obj={this} />) ||
                        (next === 6 && <Question_6 step={next} question='If you speak another language, which was not between the options above, please mention it here.' obj={this} />) ||
                        (next === 7 && <Question_7 step={next} question='Do you have a Tour Guide License?' obj={this} />) ||
                        (next === 8 && <Question_8 step={next} question='What type of tours would you like to offer as a Yourtour tour guide?' obj={this} />) ||
                        (next === 9 && <Question_9 step={next} question='Do you already have an idea of a specific tour you’d like to offer? If yes, please describe it briefly:' obj={this} />) ||
                        (next === 10 && <Question_10 step={next} question='Do you have experience creating tours?' obj={this} />) ||
                        (next === 11 && <Question_11 step={next} question='What days of the week are you available to do Yourtour tours?' obj={this} />) ||
                        (next === 12 && <Question_12 step={next} question='How many Yourtour tours would you like to guide on average during a week?' obj={this} />) ||
                        (next === 13 && <Question_13 step={next} question='What is your hourly fee for guiding tours (in your local currency)?' obj={this} />) ||
                        (next === 14 && <Question_14 step={next} question='Do you have a car and would you be interested to offer day-trips near your city?' obj={this} />) ||
                        (next === 15 && <Question_15 step={next} question='Please describe yourself (personality, background and experience) so we can get an idea of who you are :) The more you tell us the better!' obj={this} />) ||
                        (next === 16 && <Question_16 step={next} question='Please share your email address where we can get in touch with you:' obj={this} />) ||
                        (next === 17 && <Question_17 step={next} question='Please let us know your phone number so we could easily get in touch in case we have any extra questions:' obj={this} />) ||
                        (next === 18 && <Question_18 step={next} question='Where did you find out about us?' obj={this} />) ||
                        (next === 19 && <Question_19 step={next} question='What made you apply? Please mention the trigger that made you fill in this form and think about becoming a Yourtour tour guide' obj={this} />) ||
                        (next === 20 && <Question_20 step={next} question='Do you have any friends (living in the same city) who you think would be also interested? Please mention their email addresses. (We will just send them 1 email but promise to not spam)' obj={this} />) 
                    }           
                    {/* phan next prev cau hoi */}
                    <View style={styles.containerBottomQuestion}>
                        <View style={{ flexDirection: 'row', marginRight: 20 }}>
                            <TouchableOpacity
                                onPress={() => {
                                    if(next - 1 !== 0 ) {
                                        this.setState({ next: next - 1 })
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
                                    if(next + 1 <= 20) {
                                        this.setState({ next: next + 1 })
                                    }
                                }}
                            >
                                <Icons 
                                    name='chevron-down-circle-outline'
                                    size={33}
                                    color={ next !== 20 ? colors.BACKGROUND_CULTURE : '#aaa'}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}