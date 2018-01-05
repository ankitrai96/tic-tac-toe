import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Cell = () => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={()=>alert("gotcha!")}>
                <View style={styles.placeholder}>
                    <Text style={styles.text}>X</Text>
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