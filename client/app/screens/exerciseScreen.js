import React, { useState } from 'react';
import { View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import Card from '../shared/card'

function ExerciseScreen(props) {
    const [exercise] = useState([
        { category: 'Arm Raises', id:'1'},
        { category: 'Compliant Surface', id:'2' },
        { category: 'Gait', id:'3' },
        { category: 'Static Standing', id:'4' },
        { category: 'Weight Shifting', id:'5' },
    ])

    return (
       <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Choose Exercise</Text>
        <FlatList
            data={exercise}
            renderItem={({item}) => (
                //<TouchableOpacity onPress={() => }
                <Card>
                    <Text style={globalStyles.itemText}>{item.category}</Text>
                </Card>
            )}
        />
       </View>
    );
}

export default ExerciseScreen;