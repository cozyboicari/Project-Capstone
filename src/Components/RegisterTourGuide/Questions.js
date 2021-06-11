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
import ImagePicker from 'react-native-image-picker';

// question item
export const QuestionItem = ({ itemQuestion, step, root }) => {

    chooseFileImage = () => {
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
                root._setAnswer('data:image/jpeg;base64,' + response.data)
            }
        })
    }

    //render item few
    const _renderItem = ({ item }) => {
        const isActive = (root._getAnswer() === item.text);
        return(
            <TouchableOpacity
                onPress={() => root._setAnswer(item.text)}
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
    const _renderItemMore = ({ item }) => {
        const isActive = root._getItemAnswer(item.text);
        return(
            <TouchableOpacity
                onPress={() => {
                    if(!isActive) {
                        root._pushItemAnswer(item.text);
                    }
                    else {
                        root._removeItemAnswer(item.text);
                    }
                }}
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
                    <Text style={{ fontSize: 17, color: colors.BACKGROUND_BLUEYONDER }}>{step + 1}</Text>
                    <Icons name='arrow-forward-outline' size={15} color={colors.BACKGROUND_BLUEYONDER}/>
                </View>
                <View style={{ paddingRight: 47 }}>
                    <Text style={[styles.textQuestion, {
                        marginBottom: (step + 1) === 9 || ((step + 1 !== 9) && itemQuestion.ex) ? 7 : 30
                    }]}>
                        {`${itemQuestion.question}`}
                    </Text>
                    { 
                        (step + 1) === 9 && 
                        <Text style={{ marginBottom: 30, fontWeight: '300', color: '#666'}}>
                            {`${itemQuestion.ex}`}
                        </Text> ||
                        ((step + 1 !== 9) && itemQuestion.ex) &&
                        <Text style={{ marginBottom: 30, fontWeight: '300', color: '#666', color: colors.BACKGROUND_BLUEYONDER}}>
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
                        placeholder='Hãy nhập câu trả lời...'
                        autoCapitalize={(itemQuestion.keyboard === 'email-address') ? 'none' : 'sentences'}
                        placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                        value={root._getAnswer()}
                        onChangeText={text => root._setAnswer(text)}
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
                            renderItem={_renderItemMore}
                        />
                    ) ||
                    itemQuestion.type === 'select-picker' &&
                    (<RNPickerSelect 
                        value={root._getAnswer()}
                        onValueChange={value => root._setAnswer(value)}
                        items={itemQuestion.data}
                        placeholder={{
                            label: 'Hãy chọn một tuỳ chọn',
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
                    />) ||
                    itemQuestion.type === "choose-image" && 
                    (
                        <TouchableOpacity
                        onPress={this.chooseFileImage}>
                            <TextInput
                                style={styles.textInputQuestion}
                                keyboardType={itemQuestion.keyboard}
                                placeholder='Hãy cập nhật CMND của bạn...'
                                autoCapitalize={(itemQuestion.keyboard === 'email-address') ? 'none' : 'sentences'}
                                placeholderTextColor={colors.BACKGROUND_BLUEYONDER}
                                value={root._getAnswer()}
                                pointerEvents="none"
                            />
                        </TouchableOpacity>
                    )
                }
            </View>
        </Animatable.View>
    );
}