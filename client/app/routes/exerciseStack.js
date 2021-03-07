import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import CategoryScreen from '../screens/categoryScreen'
import ExerciseScreen from '../screens/exerciseScreen'

const Stack = createStackNavigator()

function ExerciseStack(){
    return (
          <Stack.Navigator initialRouteName="Category">
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Exercise" component={ExerciseScreen} />
          </Stack.Navigator>
      );
    }

export default ExerciseStack