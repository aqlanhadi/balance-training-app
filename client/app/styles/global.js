import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText:{
        fontSize: 30,
        textAlign:'center',
        marginHorizontal: 50,
        marginVertical: 20,
    },
    itemText:{
        fontSize: 25,
        flex: 1,
        paddingTop: 17,
        // marginLeft: 20,

    },
    image: {
        flex: 0.3,
        resizeMode: 'cover'
    }
})