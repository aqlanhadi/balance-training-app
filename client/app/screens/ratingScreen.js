import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import {RatingList,List} from '../assets/list/list'

function RatingScreen({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Exercise')
    }
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Rate your balance during exercise</Text>
        <FlatList
            style={{flexDirection: 'column', numColumns: 2}}
            data={RatingList}
            renderItem={({item}) => (
                <TouchableOpacity 
                    onPress={pressHandler}
                    style={globalStyles.card}>
                        <View style={globalStyles.cardContent}>    
                            <Image 
                                source={{uri:'https://picsum.photos/100'}}
                                style={globalStyles.image}
                                // source={require=('../assets/emojis/happy-4.png')}
                            />
                            <Text style={globalStyles.itemText}>{item.category}</Text>
                        </View>
                </TouchableOpacity>
                
            )}
        />
       </View>
    );
}

export default RatingScreen;