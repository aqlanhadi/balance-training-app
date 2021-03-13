import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import {ArmRaiseList, SurfaceList, GaitList, StandingList, WeightShiftingList, List} from '../assets/list/list'

function ExerciseScreen({route, navigation}) {
    const { category }  = route.params
    //console.log(category)
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Choose Exercise</Text>
        <FlatList
            data={List.filter(item => item.category === category)}
            renderItem={({item}) => (
                <TouchableOpacity 
                // onPress={pressHandler}
                onPress={() => {
                    navigation.navigate('Rating')
                }}
                style={globalStyles.card}>
                    <View style={globalStyles.cardContent}>    
                        <Text style={globalStyles.itemText}>{item.exercise}</Text>
                        </View>
                </TouchableOpacity>
                
            )}
        />
       </View>
    );
}

export default ExerciseScreen;