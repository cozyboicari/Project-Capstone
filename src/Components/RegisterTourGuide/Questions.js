import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, 
    TextInput, FlatList,  } from 'react-native';

// file css
import styles from './Styles';

// file global
import { colors } from '../../ConfigGlobal';

//library
import * as Animatable from 'react-native-animatable';
import Icons from 'react-native-vector-icons/Ionicons';
import RNPickerSelect from 'react-native-picker-select';


const QuestionItem = ({ step, question, type}) => {

    //select picker
    const [ value, setValue ] = React.useState('');

    // chon 1
    const [ active1, setActive1 ] = React.useState('');

    const _setActive1 = nameTick => {
        setActive1(nameTick);
    }

    const _renderItem = ({ item }) => {
        const isActive = (active1 === item.nameTick)
        return(
            <TouchableOpacity
                onPress={() => _setActive1(item.nameTick)}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1,
                    height: null,
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15, flex: 1, padding: 10 }}>{item.text}</Text>
                    { isActive ? 
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View> :
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <View 
                            style={{ width: 25, height: 25 }}
                        />
                    </View> 
                    }
                </View>
        </TouchableOpacity>
        );
    }

    // chon nhieu
    const RenderItem = ({ item, index }) => {
        const [ active, setActive ] = React.useState(false);
    
        return(
            <TouchableOpacity
                onPress={() => { 
                    setActive(!active)
                    type.data[index].picked = !item.picked;
                }}
            >
                <View style={[styles.containerTick, {
                    borderWidth: active ? 2 : 1
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: active ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: active ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                    { active  && 
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                    {   type.nameType === 'flat-list' &&
                        <Text style={{ 
                            marginBottom: 30, 
                            color: colors.BACKGROUND_BLUEYONDER, 
                            fontWeight: '300'}}
                        >
                            Choose as many as you like
                        </Text>
                    }
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                {
                    (
                        type.nameType === 'text-input' &&
                        <TextInput
                            multiline={true}
                            keyboardType={type.typeKeyboard}
                            style={styles.textInputQuestion}
                            placeholder='Type your answer here...'
                            placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                        />
                    ) ||
                    (
                        type.nameType === 'flat-list'  && 
                            (
                                // chon 1
                                type.choice === 'a' ?
                                <FlatList 
                                    bounces={false}
                                    data={type.data}
                                    keyExtractor={item => item.nameTick}
                                    renderItem={_renderItem}
                                /> : 
                                <FlatList 
                                    data={type.data}
                                    keyExtractor={item => item.nameTick}
                                    renderItem={({ item, index }) => <RenderItem item={item} index={index}/>}
                                    bounces={false}
                                />
                            )
                    ) ||
                    (
                        type.nameType === 'select picker' &&
                        <RNPickerSelect 
                            onValueChange={value => setValue(value)}
                            items={cities}
                            placeholder={{
                                label: 'Select an option',
                                value: null,
                                color: '#999'
                            }}
                            style={{
                                inputIOS: {
                                    ...styles.textInputQuestion
                                },
                                inputAndroid: {
                                    ...styles.textInputQuestion
                                },
                                placeholder: {
                                    color: colors.BACKGROUND_BLUEYONDER,
                                    fontSize: 18,
                                },
                            }}
                            Icon={() => {
                                return(
                                    <Icons 
                                        name='chevron-down-outline'
                                        size={25}
                                        color={colors.BACKGROUND_BLUEYONDER}
                                    />
                                )
                            }}
                        />
                    )
                }
            </View>
        </Animatable.View>
    );
}

//question 1
export const Question_1 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 2
const cities = [
    {
        value: 'dalat',
        label: 'Đà Lạt'
    },
    {
        value: 'danang',
        label: 'Đà Nẵng'
    },
    {
        value: 'hanoi',
        label: 'Hà Nội'
    },
    {
        value: 'hochiminh',
        label: 'Hồ Chí Minh'
    },
    {
        value: 'nhatrang',
        label: 'Nha Trang'
    },
    {
        value: 'sapa',
        label: 'Sapa'
    },
    {
        value: 'vungtau',
        label: 'Vũng Tàu'
    },
];

export const Question_2 = ({ step, question, obj }) => {
    const [ value, setValue ] = React.useState('');
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <RNPickerSelect 
                    onValueChange={value => setValue(value)}
                    items={cities}
                    placeholder={{
                        label: 'Select an option',
                        value: null,
                        color: '#999'
                    }}
                    style={{
                        inputIOS: {
                            ...styles.textInputQuestion
                        },
                        inputAndroid: {
                            ...styles.textInputQuestion
                        },
                        placeholder: {
                            color: colors.BACKGROUND_BLUEYONDER,
                            fontSize: 18,
                        },
                    }}
                    Icon={() => {
                        return(
                            <Icons 
                                name='chevron-down-outline'
                                size={25}
                                color={colors.BACKGROUND_BLUEYONDER}
                            />
                        )
                    }}
                />
            </View>
        </Animatable.View>
    );
}

//question 3
const data_question_3 = [
    {nameTick: 'A', text: '0 - 2 years'},
    {nameTick: 'B', text: '2 - 5 years'},
    {nameTick: 'C', text: '5 - 10 years'},
    {nameTick: 'D', text: 'Longer than 10 years'},
    {nameTick: 'E', text: 'Born and raised'},
];

export const Question_3 = ({ step, question, obj }) => {
    const [active, setActive] = React.useState('');

    const _setActive = (nameTick) => {
        setActive(nameTick)
    }

    const _renderItem = ({ item }) => {
        const isActive = (active === item.nameTick);
        return(
            <TouchableOpacity
                onPress={() => _setActive(item.nameTick)}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                    { isActive && 
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    bounces={false}
                    data={data_question_3}
                    keyExtractor={item => item.nameTick}
                    renderItem={_renderItem}
                >

                </FlatList>
            </View>
        </Animatable.View>
    );
}

//question 4
const data_question_4 = [
    { nameTick: 'A', text: 'A1 - Can take part in basic, factual conversations.' },
    { nameTick: 'B', text: 'A2 - Can take part in ‘small talk’ and express simple opinions.' },
    { nameTick: 'C', text: 'B1 - Can take part in a casual conversation for a reasonable period of time' },
    { nameTick: 'D', text: 'B2 - Can take part in conversations on a range of topics. For example, conversations about events currently in the news.' },
    { nameTick: 'E', text: 'C1 - Can take part in conversations on a range of abstract topics with a good amount of fluency and a variety of expressions.' },
    { nameTick: 'F', text: 'C2 - A C2 level of English is essentially a native level.' },
]

export const Question_4 = ({ step, question, obj }) => {

    const [ active, setActive ] = React.useState('');

    const _setActive = nameTick => {
        setActive(nameTick);
    }

    const _renderItem = ({ item }) => {
        const isActive = (active === item.nameTick)
        return(
            <TouchableOpacity
                onPress={() => _setActive(item.nameTick)}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1,
                    height: null,
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15, flex: 1, padding: 10 }}>{item.text}</Text>
                    { isActive ? 
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View> :
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <View 
                            style={{ width: 25, height: 25 }}
                        />
                    </View> 
                    }
                </View>
        </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    data={data_question_4}
                    bounces={false}
                    keyExtractor={item => item.nameTick}
                    renderItem={_renderItem}
                />
            </View>
        </Animatable.View>
    );
}

//question 5
const data_question_5 = [
    { nameTick: 'A', language: 'Italian', picked: false },
    { nameTick: 'B', language: 'French', picked: false },
    { nameTick: 'C', language: 'German', picked: false },
    { nameTick: 'D', language: 'Spanish', picked: false },
    { nameTick: 'E', language: 'Chinese', picked: false },
    { nameTick: 'F', language: 'Korean', picked: false },
    { nameTick: 'G', language: 'Portuguese', picked: false },
    { nameTick: 'H', language: 'Dutch', picked: false },
    { nameTick: 'I', language: 'none of the above', picked: false },
]

export const Question_5 = ({ step, question, obj }) => {

    const RenderItemQ5 = ({ item, index }) => {
        const [ active, setActive ] = React.useState(false);
    
        return(
            <TouchableOpacity
                onPress={() => { 
                    setActive(!active)
                    data_question_5[index].picked = !item.picked;
                }}
            >
                <View style={[styles.containerTick, {
                    borderWidth: active ? 2 : 1
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: active ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: active ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.language}</Text>
                    { active  && 
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                    <Text style={{ 
                        marginBottom: 30, 
                        color: colors.BACKGROUND_BLUEYONDER, 
                        fontWeight: '300'}}
                    >
                            Choose as many as you like
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    renderItem={({ item, index }) => <RenderItemQ5 item={item} index={index}/>}
                    data={data_question_5}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                />
            </View>
        </Animatable.View>
    );
}

//question 6
export const Question_6 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 7

const data_question_7 = [
    { nameTick: 'A', text: 'YES' },
    { nameTick: 'B', text: 'NO' }
]

export const Question_7 = ({ step, question, obj }) => {

    const [active, setActive] = React.useState('');
    
    const _setActive = nameTick => {
        setActive(nameTick) 
    }

    const _renderItem = ({ item }) => {
        const isActive = (item.nameTick === active);
        return(
            <TouchableOpacity
                onPress={() => {
                    _setActive(item.nameTick);
                }}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                    { isActive  && 
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    data={data_question_7}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                    renderItem={_renderItem}
                />
            </View>
        </Animatable.View>
    );
}

//question 8

const data_question_8 = [
    { nameTick: 'A', text: 'History & Culture', picked: false },
    { nameTick: 'B', text: 'Food tour', picked: false },
    { nameTick: 'C', text: 'Off the beaten track', picked: false },
    { nameTick: 'D', text: 'Day trips', picked: false },
    { nameTick: 'E', text: 'Family Friendly Tours', picked: false },
]

const RenderItemQ8 = ({ item, index }) => {
    const [ active, setActive ] = React.useState(false);

    return(
        <TouchableOpacity
            onPress={() => { 
                setActive(!active)
                data_question_8[index].picked = !item.picked;
            }}
        >
            <View style={[styles.containerTick, {
                borderWidth: active ? 2 : 1
            }]}>
                <View style={[styles.containerNameTick, {
                    backgroundColor: active ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                }]}>
                    <Text style={[styles.textNameTick, {
                        color: active ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                    }]}>{item.nameTick}</Text>
                </View>
                <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                { active  && 
                <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                    <Icons 
                        name='checkmark-outline'
                        size={25}
                        color={colors.BACKGROUND_BLUEYONDER}
                    />
                </View>
                }
            </View>
        </TouchableOpacity>
    );
}

export const Question_8 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                    <Text style={{ 
                        marginBottom: 30, 
                        color: colors.BACKGROUND_BLUEYONDER, 
                        fontWeight: '300'}}
                    >
                            Choose as many as you like
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    renderItem={({ item, index }) => <RenderItemQ8 item={item} index={index}/>}
                    data={data_question_8}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                />
            </View>
        </Animatable.View>
    );
}

//question 9
export const Question_9 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                    <Text style={{ color: '#888', fontSize: 16, fontWeight: '300', marginBottom: 30 }}>
                        {`(e.g. Cooking class - I know how to cook local cuisine and I want to share it with travellers!)`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 10
const data_question_10 = [
    { nameTick: 'A', text: 'YES' },
    { nameTick: 'B', text: 'NO' }
]

export const Question_10 = ({ step, question, obj }) => {

    const [active, setActive] = React.useState('');
    
    const _setActive = nameTick => {
        setActive(nameTick) 
    }

    const _renderItem = ({ item }) => {
        const isActive = (item.nameTick === active);
        return(
            <TouchableOpacity
                onPress={() => {
                    _setActive(item.nameTick);
                }}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                    { isActive  && 
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    data={data_question_10}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                    renderItem={_renderItem}
                />
            </View>
        </Animatable.View>
    );
}

//question 11
const data_question_11 = [
    { nameTick: 'A', text: 'Only weekends, I have another full time job' },
    { nameTick: 'B', text: 'Weekends and Weekdays after 5, I have another full time job' },
    { nameTick: 'C', text: '2-3 week-days, and weekends, flexible hours' },
    { nameTick: 'D', text: 'Anytime, I am a freelancer or full time tour-guide' },
]

export const Question_11 = ({ step, question, obj }) => {

    const [ active, setActive ] = React.useState('');

    const _setActive = nameTick => {
        setActive(nameTick);
    }

    const _renderItem = ({ item }) => {
        const isActive = (active === item.nameTick)
        return(
            <TouchableOpacity
                onPress={() => _setActive(item.nameTick)}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1,
                    height: null,
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15, flex: 1, padding: 10 }}>{item.text}</Text>
                    { isActive ? 
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View> :
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <View 
                            style={{ width: 25, height: 25 }}
                        />
                    </View> 
                    }
                </View>
        </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
            <FlatList 
                data={data_question_11}
                keyExtractor={item => item.nameTick}
                bounces={false}
                renderItem={_renderItem}
            />
            </View>
        </Animatable.View>
    );
}

//question 12
const data_question_12 = [
    { nameTick: 'A', text: '1-2' },
    { nameTick: 'B', text: '3-4' },
    { nameTick: 'C', text: '5-6' },
]

export const Question_12 = ({ step, question, obj }) => {
    const [ active, setActive ] = React.useState('');

    const _setActive = nameTick => {
        setActive(nameTick);
    }

    const _renderItem = ({ item }) => {
        const isActive = (active === item.nameTick)
        return(
            <TouchableOpacity
                onPress={() => _setActive(item.nameTick)}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1,
                    height: null,
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15, flex: 1, padding: 10 }}>{item.text}</Text>
                    { isActive ? 
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View> :
                    <View style={{  alignItems: 'flex-end', paddingRight: 10 }}>
                        <View 
                            style={{ width: 25, height: 25 }}
                        />
                    </View> 
                    }
                </View>
        </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    data={data_question_12}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                    renderItem={_renderItem}
                />
            </View>
        </Animatable.View>
    );
}

//question 13
export const Question_13 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 14
const data_question_14 = [
    { nameTick: 'A', text: 'YES' },
    { nameTick: 'B', text: 'NO' },
]

export const Question_14 = ({ step, question, obj }) => {

    const [active, setActive] = React.useState('');
    
    const _setActive = nameTick => {
        setActive(nameTick) 
    }

    const _renderItem = ({ item }) => {
        const isActive = (item.nameTick === active);
        return(
            <TouchableOpacity
                onPress={() => {
                    _setActive(item.nameTick);
                }}
            >
                <View style={[styles.containerTick, {
                    borderWidth: isActive ? 2 : 1
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: isActive ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: isActive ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                    { isActive  && 
                    <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                        <Icons 
                            name='checkmark-outline'
                            size={25}
                            color={colors.BACKGROUND_BLUEYONDER}
                        />
                    </View>
                    }
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    data={data_question_14}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                    renderItem={_renderItem}
                />
            </View>
        </Animatable.View>
    );
}

//question 15
export const Question_15 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 16
export const Question_16 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    keyboardType='email-address'
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 17
export const Question_17 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    keyboardType='numeric'
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 18
const data_question_18 = [
    { nameTick: 'A', text: 'Facebook', picked: false },
    { nameTick: 'B', text: 'Instagram', picked: false },
    { nameTick: 'C', text: 'A friend', picked: false },
    { nameTick: 'D', text: 'Google', picked: false },
    { nameTick: 'E', text: 'Other', picked: false },
]

const RenderItemQ18 = ({ item, index }) => {
    const [ active, setActive ] = React.useState(false);

    return(
        <TouchableOpacity
            onPress={() => { 
                setActive(!active)
                data_question_18[index].picked = !item.picked;
                console.log(data_question_18);
            }}
        >
            <View style={[styles.containerTick, {
                borderWidth: active ? 2 : 1
            }]}>
                <View style={[styles.containerNameTick, {
                    backgroundColor: active ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                }]}>
                    <Text style={[styles.textNameTick, {
                        color: active ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                    }]}>{item.nameTick}</Text>
                </View>
                <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15 }}>{item.text}</Text>
                { active  && 
                <View style={{ flex: 1, alignItems: 'flex-end', paddingRight: 10 }}>
                    <Icons 
                        name='checkmark-outline'
                        size={25}
                        color={colors.BACKGROUND_BLUEYONDER}
                    />
                </View>
                }
            </View>
        </TouchableOpacity>
    );
}

export const Question_18 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                    <Text style={{ 
                        marginBottom: 30, 
                        color: colors.BACKGROUND_BLUEYONDER, 
                        fontWeight: '300'}}
                    >
                            Choose as many as you like
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <FlatList 
                    renderItem={({ item, index }) => <RenderItemQ18 item={item} index={index}/>}
                    data={data_question_18}
                    keyExtractor={item => item.nameTick}
                    bounces={false}
                />
            </View>
        </Animatable.View>
    );
}

//question 19
export const Question_19 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}

//question 20
export const Question_20 = ({ step, question, obj }) => {
    return(
        <Animatable.View 
            animation='fadeInUpBig'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={styles.textQuestion}>
                        {`${question}`}
                    </Text>
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                <TextInput
                    keyboardType='email-address'
                    multiline={true}
                    style={styles.textInputQuestion}
                    placeholder='Type your answer here...'
                    placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                    onChangeText={text => obj._setState(text)}
                    value={obj._getState()}
                />
            </View>
        </Animatable.View>
    );
}