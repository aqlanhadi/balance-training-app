import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import {ArmRaiseList, SurfaceList, GaitList, StandingList, WeightShiftingList, List} from '../assets/list/list'

function ExerciseScreen({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Rating')
    }
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Choose Exercise</Text>
        <FlatList
            data={SurfaceList}
            renderItem={({item}) => (
                <TouchableOpacity 
                onPress={pressHandler}
                style={globalStyles.card}>
                    <View style={globalStyles.cardContent}>    
                        <Text style={globalStyles.itemText}>{item.category}</Text>
                        </View>
                </TouchableOpacity>
                
            )}
        />
       </View>
    );
}

export default ExerciseScreen;