import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';

import {globalStyles}  from '../styles/global'
import { AuthContext} from '../routes/context'
import { IMUList } from "../assets/list/list";

function HomeScreen({navigation}) {
    // const { signOut } = React.useContext(AuthContext)
    const [isEnabled, setIsEnabled] = useState(false);

    return (
       <View style={styles.container}>
        <Text style={globalStyles.titleText}>Home</Text>
        <FlatList
            style= {styles.flatlist}
            data={IMUList}
            renderItem={({item}) => (
            <View style={styles.card}>
                <View style={styles.cardContent}>
                    <Image 
                        style={styles.image}
                        source= {require('../assets/categoryImages/category-1.png')}
                    />
                    <View style={styles.cardInfo}>
                    <View style={styles.cardText}>
                        <Text style={styles.imuName}>
                            Model {item.id}
                        </Text>
                        <Text style= {styles.battery}> {item.battery} </Text>
                    </View>    
                        <Text style={styles.modelName}> {item.model}</Text>
                    </View>
                    <Switch
                        style={styles.switch}
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        onValueChange={() => setIsEnabled(previousState => !previousState)}
                        value={isEnabled}
                    />
                </View>
            </View>
       )}
        />

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    card: {
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#8DC6BF',
        marginHorizontal: 40,
        marginVertical: 20,
        height: 65,
    },
    flatlist: {
        height: 1,
        flexGrow: 150
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
        flex: 2,
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