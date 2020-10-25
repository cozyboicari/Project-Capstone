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

// question item
export const QuestionItem = ({ itemQuestion, step, root }) => {
    const [ active_few, setActive_few ] = React.useState(''); // few

    //render item few
    const _setActive = (nameTick) => {
        setActive_few(nameTick);
    }

    const _renderItem = ({ item }) => {
        const isActive = (active_few === item.nameTick)
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

    // more
    const RenderItemMore = ({ item, index }) => {
        const [ active, setActive ] = React.useState(false);

        return(
            <TouchableOpacity
                onPress={() => { 
                    setActive(!active);
                }}
            >
                <View style={[styles.containerTick, {
                    borderWidth: active ? 2 : 1,
                    height: null,
                }]}>
                    <View style={[styles.containerNameTick, {
                        backgroundColor: active ? colors.BACKGROUND_BLUEYONDER : colors.BACKGROUND_CULTURE,
                    }]}>
                        <Text style={[styles.textNameTick, {
                            color: active ? colors.BACKGROUND_CULTURE : colors.BACKGROUND_BLUEYONDER
                        }]}>{item.nameTick}</Text>
                    </View>
                    <Text style={{ color: colors.BACKGROUND_BLUEYONDER, fontSize: 15, flex: 1, padding: 10 }}>{item.text}</Text>
                    { active ? 
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
        )
    }

    // question item render
    return(
        <Animatable.View 
            animation='flipInX'
            duration={800}
            style={styles.containerQuestion}
        >
            <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20 }}>
                <View style={{ flexDirection: 'row', paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={[styles.textQuestion, {
                        marginBottom: step === 9 ? 7 : 30
                    }]}>
                        {`${itemQuestion.question}`}
                    </Text>
                    { 
                        step === 9 && 
                        <Text style={{ marginBottom: 30, fontWeight: '300', color: '#666'}}>
                            {`${itemQuestion.ex}`}
                        </Text>
                    }
                </View>
            </View>
            <View style={{ paddingHorizontal: 40 }}>
                {
                    itemQuestion.type === 'text-input' &&
                    (<TextInput
                        multiline={true}
                        style={styles.textInputQuestion}
                        keyboardType={itemQuestion.keyboard}
                        placeholder='Type your answer here...'
                        placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                        onChangeText={answer => root._setAnswer(answer)}
                        value={root._getAnswer()}
                    />) ||
                    itemQuestion.type === 'flat-list' &&
                    (
                        itemQuestion.selected === 'few' ?
                        <FlatList 
                            bounces={false}
                            data={itemQuestion.data}
                            keyExtractor={item => item.nameTick}
                            renderItem={_renderItem}
                        /> :
                        <FlatList 
                            bounces={false}
                            data={itemQuestion.data}
                            keyExtractor={item => item.nameTick}
                            renderItem={({ item, index }) => <RenderItemMore item={item} index={index}/>}
                        />
                    ) ||
                    itemQuestion.type === 'select-picker' &&
                    (<RNPickerSelect 
                        value={root._getAnswer() === '' ? null : root._getAnswer()}
                        onValueChange={value => root._setAnswer(value)}
                        items={itemQuestion.data}
                        placeholder={{
                            label: 'Select an option',
                            value: '',
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
                    />)
                }
            </View>
        </Animatable.View>
    );
}