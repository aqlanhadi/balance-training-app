import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import HomeScreen from '../screens/homeScreen'
import SensorScreen from '../screens/sensorScreen'
import UserScreen from '../screens/userScreen'

const Stack = createStackNavigator()

function ExerciseStack(){
    return (
          <Stack.Navigator 
          initialRouteName="Category">
            <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{title: null}}
            />
            <Stack.Screen 
            name="IMU" 
            component={SensorScreen} 
            options={{title: null}}
            />
            <Stack.Screen 
            name="User" 
            component={UserScreen} 
            options={{title: null}}
            />
          </Stack.Navigator>
      );
    }

export default ExerciseStack