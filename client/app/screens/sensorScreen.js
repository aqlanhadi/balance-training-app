import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

import {globalStyles}  from '../styles/global'

function SensorScreen() {
    return (
       <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>IMU Information</Text>
       </View>
    );
}

export default SensorScreen;