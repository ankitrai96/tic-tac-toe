import React from 'react';
import {Text, View} from 'react-native';

const Banner = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textual}>{props.children}</Text>
        </View>
    )
}

const styles = {
    container: {
        backgroundColor : '#FB6107',
        justifyContent: 'center',
        alignItems: 'center',
        height : 60,
        width : 360,
        paddingTop : 5,
        shadowColor: '#000',
        shadowOffset : {width:0,height:4},
        shadowOpacity : 0.4,
        elevation : 4,
        position : 'relative'
    },
    textual : {
        fontSize : 25,
        color: '#fffce8',
        fontWeight: 'bold'
    }
}

export default Banner;