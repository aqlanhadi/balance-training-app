import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'


import DataScreen from '../screens/dataScreen'

const Stack = createStackNavigator()

function DataStack(){
    return (
          <Stack.Navigator initialRouteName="Data">
            <Stack.Screen 
            name="Data" 
            component={DataScreen} 
            options={{title: null}}
            />
          </Stack.Navigator>
      );
    }

export default DataStack