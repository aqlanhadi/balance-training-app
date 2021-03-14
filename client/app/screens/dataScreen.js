import * as React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import {globalStyles} from '../styles/global'

export default function ProgressScreen() {
    return(
        <View style={globalStyles.cardContent}> 
            <Text style={globalStyles.titleText}>
                Data
            </Text>
        </View>
    );
}