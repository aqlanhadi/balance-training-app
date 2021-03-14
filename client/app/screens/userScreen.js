import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'

import {globalStyles}  from '../styles/global'

function UserScreen() {
    return (
       <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>User Information</Text>
       </View>
    );
}

export default UserScreen;