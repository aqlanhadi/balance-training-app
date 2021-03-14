import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import ProgressScreen from '../screens/progressScreen'

const Stack = createStackNavigator()

function ProgressStack(){
    return (
          <Stack.Navigator initialRouteName="Progress">
            <Stack.Screen 
            name="Progress" 
            component={ProgressScreen}
            options={{title: null}} />
          </Stack.Navigator>
      );
    }

export default ProgressStack