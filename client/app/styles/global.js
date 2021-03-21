import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
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
    },
    titleText:{
        fontSize: 30,
        textAlign:'center',
        marginHorizontal: 50,
        marginVertical: 20,
    },
    itemText:{
        fontSize: 25,
        flexWrap: 'wrap',
        flex: 1,
        paddingVertical: 13,
        marginLeft: 10,
    },
    image: {
        flex: 0.3,
        // resizeMethod: 'resize',
        resizeMode: 'contain',
    }
})