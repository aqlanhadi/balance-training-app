import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

import {globalStyles} from '../styles/global'
import {AuthContext} from '../routes/context'

function LoginScreen({navigation}) {
    const [userId, setUserId] = useState('');

    const { signIn } = React.useContext(AuthContext);

    return (
       <View style={styles.screen}>
        <Text style={globalStyles.titleText}>Welcome!</Text>
            <TextInput 
            style={styles.input}
            placeholder="User ID"
            onChangeText={setUserId}
            />
                <TouchableOpacity 
                onPress={() => signIn()}
                style={globalStyles.card}>
                    <View style={globalStyles.cardContent}> 
                        <Text style={styles.text}>
                            Log In
                        </Text>
                    </View>
                </TouchableOpacity>
       </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
    },

    input:{
        alignItems: 'center',
        textAlign: 'left',
        height: 65,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 8,
        marginHorizontal: 40,
        marginVertical: 20,
        paddingLeft: 20,
        fontSize: 25
    },
    text:{
        fontSize: 25,
        flex: 1,
        paddingTop: 17,
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'        
    }
})