import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExerciseStack from './app/routes/exerciseStack'
import ProgressStack from './app/routes/progressStack'
import DataStack from './app/routes/dataStack'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Exercise" component={ExerciseStack} />
          <Tab.Screen name="Progress" component={ProgressStack} />
          <Tab.Screen name="Data" component={DataStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }