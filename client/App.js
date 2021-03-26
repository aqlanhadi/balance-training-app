import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';



import ExerciseStack from './app/routes/exerciseStack'
import ProgressStack from './app/routes/progressStack'
import DataStack from './app/routes/dataStack'
import LoginScreen from './app/screens/loginScreen'
import { ActivityIndicator, View } from 'react-native';
import { globalStyles } from './app/styles/global';
import {AuthContext} from './app/routes/context'
import HomeScreen from './app/screens/homeScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
    switch (action.type){
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
        }
      case 'LOGIN':
        return{
          ...prevState,
          userId:action.id,
          userToken: action.token,
        }
      case 'LOGOUT':
        return {
          ...prevState,
          userId:null,
          userToken: null,
        };
    }},
    {
      userId: null,
      isSignOut: true,
      userToken: null
    }
  )
  
  const authContext = React.useMemo(() => ({
    signIn: async data => {
      // In a production app, we need to send some data (usually username, password) to server and get a token
      // We will also need to handle errors if sign in failed
      // After getting token, we need to persist the token using `SecureStore`
      // In the example, we'll use a dummy token

      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
    signOut: () => dispatch({ type: 'LOGOUT' }),
    }
))

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

    return (
      <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* {state.userToken == null ? (
          <LoginScreen/>
        ):( */}
          <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                      if (route.name === 'Home') {
                          iconName = focused ? 'home' : 'home-outline';
                      } else if (route.name === 'Exercise') {
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
                      <Tab.Screen name="Home" component={HomeScreen} />
                      <Tab.Screen name="Exercise" component={ExerciseStack} />
                      <Tab.Screen name="Progress" component={ProgressStack} />
                      <Tab.Screen name="Data" component={DataStack} />
                  </Tab.Navigator>
      {/* )} */}
       </NavigationContainer>
      </AuthContext.Provider>
    );
}
  //   return (
  //     <NavigationContainer>
  //       <Tab.Navigator
  //         screenOptions={({ route }) => ({
  //           tabBarIcon: ({ focused, color, size }) => {
  //             let iconName;
  
  //           if (route.name === 'Home') {
  //               iconName = focused ? 'home' : 'home-outline';
  //           } else if (route.name === 'Exercise') {
  //           iconName = focused ? 'barbell' : 'barbell-outline';
  //           } else if (route.name === 'Progress') {
  //           iconName = focused ? 'hourglass' : 'hourglass-outline';
  //           } else if (route.name === 'Data') {
  //           iconName = focused ? 'bar-chart' : 'bar-chart-outline';
  //           }
  
  //             // You can return any component that you like here!
  //             return <Ionicons name={iconName} size={size} color={color} />;
  //           },
  //         })}
  //         tabBarOptions={{
  //           activeTintColor: 'royalblue',
  //           inactiveTintColor: 'gray',
  //         }}
  //       >
  //           <Tab.Screen name="Home" component={HomeScreen} />
  //           <Tab.Screen name="Exercise" component={ExerciseStack} />
  //           <Tab.Screen name="Progress" component={ProgressStack} />
  //           <Tab.Screen name="Data" component={DataStack} />
  //       </Tab.Navigator>
  //       </NavigationContainer>
  //   )
