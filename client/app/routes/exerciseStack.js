import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import CategoryScreen from '../screens/categoryScreen'
import ExerciseScreen from '../screens/exerciseScreen'

const Stack = createStackNavigator()

function ExerciseStack(){
    return (
          <Stack.Navigator 
          initialRouteName="Category">
            <Stack.Screen 
            name="Category" 
            component={CategoryScreen} 
            options={{title: null}}
            />
            <Stack.Screen 
            name="Exercise" 
            component={ExerciseScreen} 
            options={{title: null}}
            />
          </Stack.Navigator>
      );
    }

export default ExerciseStack