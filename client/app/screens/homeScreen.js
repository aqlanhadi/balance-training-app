import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import { AuthContext} from '../routes/context'

function HomeScreen({navigation}) {
    // const { signOut } = React.useContext(AuthContext)

    return (
       <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Home</Text>
            <TouchableOpacity 
            onPress={() => {
                navigation.navigate('IMU')}}
            style={globalStyles.card}>
                <View style={globalStyles.cardContent}> 
                    <Text style={globalStyles.itemText}>
                        Sensor Information
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                navigation.navigate('User')}}
            style={globalStyles.card}>
                <View style={globalStyles.cardContent}> 
                    <Text style={globalStyles.itemText}>
                        User Information
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => {signOut()}}
            style={globalStyles.card}>
                <View style={globalStyles.cardContent}> 
                    <Text style={globalStyles.itemText}>
                        Sign Out
                    </Text>
                </View>
            </TouchableOpacity>
       </View>
    );
}

export default HomeScreen;