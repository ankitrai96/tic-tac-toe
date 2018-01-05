import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Cell = ({token, boardTap, cellIdentity}) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={()=>boardTap(cellIdentity)}>
                <View style={styles.placeholder}>
                    <Text style={styles.text}>{token}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = {
    wrapper: {
        backgroundColor : '#FFE381',
        alignItems : 'center',
        justifyContent: 'center',
        flex:1
    },
    text: {
        fontWeight: 'bold',
        fontSize: 28
    },
    placeholder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30
    }
}
export default Cell;