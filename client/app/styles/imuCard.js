import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Switch } from 'react-native'

function imuCard (){
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
            <View style={styles.card}>
            <View style={styles.cardContent}>
                <Image 
                    style={styles.image}
                    source= {require('../assets/categoryImages/category-1.png')}
                    />
                <View style={styles.cardInfo}>
                <View style={styles.cardText}>
                    <Text style={styles.imuName}>
                        IMU 1
                    </Text>
                    <Text style= {styles.battery}> Battery icon and percentage </Text>
                </View>    
                    <Text style={styles.modelName}> A732-998 </Text>
                </View>
                <Switch
                    style={styles.switch}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
       </View>
    );
}

export default imuCard;

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#8DC6BF',
        marginHorizontal: 40,
        marginVertical: 20,
        height: 65,
    },
    cardContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        flex: 0.7,
        resizeMethod: 'resize',
        resizeMode: 'contain',
    },
    cardInfo: {
        flex: 2,
    },
    cardText: {
        flexDirection: 'row',
        flex: 1
    },
    imuName: {
        fontSize: 15,
        textAlign:'left',
        flex: 1,
        fontWeight: 'bold',
        textAlignVertical: 'bottom'
    },
    battery: {
        flex: 2,
    },
    modelName: {
        fontSize: 15,
        textAlign:'left',
        flex: 1,
    },
    switch: {
        alignSelf: 'center',
        marginRight: 10
    }
})