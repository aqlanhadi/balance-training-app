import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import Card from '../shared/card'

function CategoryScreen({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Exercise')
    }

    const [category] = useState([
        { category: 'Arm Raise', id:'1'},
        { category: 'Compliant Surface', id:'2'},
        { category: 'Gait',id:'3' },
        { category: 'Static Standing', id:'4' },
        { category: 'Weight Shifting',id:'5' },
    ])

    return (
       <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Choose Category</Text>
        <FlatList
            data={category}
            renderItem={({item}) => (
                //how to extract key to value
                <TouchableOpacity onPress={pressHandler}>
                    <Card>
                        <Image 
                        style={globalStyles.image}
                        source={require('../assets/categoryImages/category-' + '1.2' + '.png')}
                        />
                        {/* <Text style={globalStyles.blub}> blub</Text> */}
                        <Text style={globalStyles.itemText}>
                            {item.category}
                        </Text>
                    </Card>
                </TouchableOpacity>
            )}
        />
       </View>
    );
}

export default CategoryScreen;