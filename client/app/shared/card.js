import React from 'react';
import {StyleSheet, View} from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}> 
            { props.children }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#8DC6BF',
        marginHorizontal: 40,
        marginVertical: 20,
        height: 65
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
})