import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import {CategoryList, List} from '../assets/list/list'
import ExerciseScreen from './exerciseScreen';

function CategoryScreen({navigation}) {
    return (
       <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Choose Category</Text>
        <FlatList
            data={CategoryList}
            renderItem={({item}) => (
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Exercise', {category:item.category})
                }}
                style={globalStyles.card}>
                    <View style={globalStyles.cardContent}> 
                        <Image 
                        style={globalStyles.image}
                        source={require(`../assets/categoryImages/category-${item.id}.png`)}
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