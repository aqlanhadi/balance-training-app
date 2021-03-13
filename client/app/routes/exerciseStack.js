import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import CategoryScreen from '../screens/categoryScreen'
import ExerciseScreen from '../screens/exerciseScreen'
import LoginScreen from '../screens/loginScreen'
import RatingScreen from '../screens/ratingScreen'

const Stack = createStackNavigator()

function ExerciseStack(){
    return (
          <Stack.Navigator 
          initialRouteName="Login">
            <Stack.Screen 
            name="Category" 
            component={CategoryScreen} 
            options={{title: null}}
            />
            <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{title: null}}
            />
            <Stack.Screen 
            name="Rating" 
            component={RatingScreen} 
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