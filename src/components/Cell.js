import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

const Cell = ({token, boardTap, cellIdentity}) => {
    fillImage = ()=> {
        if(token=='O'){
            return (
                <Image 
                    source={require('../../assets/poop.png')}
                    style = {styles.visual}
                />
            )
        } else if(token=='X') {
            return (
                <Image 
                    source={require('../../assets/ghost.png')}
                    style = {styles.visual}
                />
            )
        }
    }
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={()=>boardTap(cellIdentity)}>
                <View style={styles.placeholder}>{fillImage()}</View>
            </TouchableOpacity>
        </View>
    )
}
const styles = {
    wrapper: {
        backgroundColor : '#b8b42d',
        alignItems : 'center',
        justifyContent: 'center',
        flex:1
    },
    visual: {
        height: 38,
        width: 38
    },
    placeholder: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: 55
    }
}
export default Cell;