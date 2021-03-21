import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
// import {Card} from 'native-base'

import {globalStyles}  from '../styles/global'
import { AuthContext} from '../routes/context'

function HomeScreen({navigation}) {
    // const { signOut } = React.useContext(AuthContext)

    return (
       <View style={styles.container}>
        <Text style={globalStyles.titleText}>Home</Text>
            <View 
            style={styles.card}>
                <Image style={styles.image}>
                    {/* put picture source */}
                </Image>
                <Text style={styles.imuName}>
                    Sensor Information
                </Text>
                <Text style={styles.modelName}></Text>

            </View>

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
        paddingTop: 20
    },
    card: {
        borderRadius: 8,
        elevation: 4,
        backgroundColor: '#8DC6BF',
        marginHorizontal: 40,
        marginVertical: 20,
        height: 65,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
})