import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import {RatingList,List} from '../assets/list/list'

function RatingScreen({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Category')
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
                    style={{
                            borderRadius: 8,
                            elevation: 4,
                            backgroundColor: item.backgroundColor,
                            marginHorizontal: 40,
                            marginVertical: 20,
                            height: 65
                            }}>
                        <View style={styles.cardContent}>    
                            <Text style={styles.text}>{item.category}</Text>
                        </View>
                </TouchableOpacity>
                
            )}
        />
       </View>
    );
}

export default RatingScreen;

const styles = StyleSheet.create ({
    text: {
        fontSize: 18,
        flexWrap: 'wrap',
        flex: 1,
        paddingVertical: 10,
        paddingLeft : 5,
        textAlignVertical: 'center'
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
})