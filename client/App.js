import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


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
//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//     switch (action.type){
//       case 'RESTORE_TOKEN':
//         return {
//           ...prevState,
//           userToken: action.token,
//           isLoading: false,
//         }
//       case 'LOGIN':
//         return{
//           ...prevState,
//           userId:action.id,
//           userToken: action.token,
//           isLoading: false,
//         }
//       case 'LOGOUT':
//         return {
//           ...prevState,
//           userId:null,
//           userToken: null,
//           isLoading: false,
//         };
//     }},
//     {
//       isLoading: true,
//       userId: null,
//       userToken: null
//     }
//   )
  
//   const authContext = React.useMemo(() => ({
//     signIn: (userId) => {
//       let userToken;
//       userId = null
//       if (userId === '123'){
//         userToken ='abc'
//       }
//       dispatch({type: 'LOGIN', id: userId, token: userToken})
//     },
//     signOut: () => {
//       setUserToken(null)
//       setIsLoading(false)
//     }
//   }))

//   useEffect(() => {
//     setTimeout(() => {
//       dispatch({type: 'RETRIEVE_TOKEN', token: 'def'})}, 1000)
//   }, [])

//   if(action().isLoading){
//     return (
//       <View style={globalStyles.container}>
//         <ActivityIndicator size="large"/>
//       </View>
//     )
//   }
    // return (
    //   <AuthContext.Provider value={authContext}>
    //   <NavigationContainer>

    //     <Tab.Navigator>
    //         <Tab.Screen name="Home" component={HomeStack} />
    //         <Tab.Screen name="Exercise" component={ExerciseStack} />
    //         <Tab.Screen name="Progress" component={ProgressStack} />
    //         <Tab.Screen name="Data" component={DataStack} />
    //     </Tab.Navigator>
    //    )
    //    :
    //      <LoginScreen/> */}
    //    </NavigationContainer>
    //   </AuthContext.Provider>
    // );

    return (
      <NavigationContainer>
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
        </NavigationContainer>
    )
  }

  