import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

import {globalStyles}  from '../styles/global'
import {CategoryList, List} from '../assets/list/list'
import ExerciseScreen from './exerciseScreen';
import RatingScreen from './ratingScreen';

function CategoryScreen({navigation}) {
    const pressHandler = () => {
        navigation.navigate('Exercise')
    }
    return (
        <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Choose Category</Text>
        <FlatList
            data={CategoryList}
            renderItem={({item}) => (
                <TouchableOpacity 
                onPress={pressHandler}
                style={globalStyles.card}>
                    <View style={globalStyles.cardContent}> 
                        <Image 
                            source={require=('../assets/categoryImages/category-${item.id}.png')}
                            style={globalStyles.image}
                        />
                        <Text style={globalStyles.itemText}>
                            {item.category}
                        </Text>
                    </View>
                </TouchableOpacity>
            )}
        />
       </View>
    );
}

export default CategoryScreen;