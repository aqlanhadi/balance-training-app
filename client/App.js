import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import ExerciseStack from './app/routes/exerciseStack'
import ProgressStack from './app/routes/progressStack'
import DataStack from './app/routes/dataStack'
import LoginScreen from './app/screens/loginScreen'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Exercise') {
                iconName = focused ? 'barbell' : 'barbell-outline';
              } else if (route.name === 'Progress') {
                iconName = focused ? 'hourglass' : 'hourglass-outline';
              } else if (route.name === 'Data') {
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'royalblue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Exercise" component={ExerciseStack} />
          <Tab.Screen name="Progress" component={ProgressStack} />
          <Tab.Screen name="Data" component={DataStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }