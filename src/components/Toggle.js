import React, {Component} from 'react';
import {Switch, View, Text} from 'react-native';

export default class Toggle extends Component {
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.kid}>
                    <Switch
                        tintColor="#474747"
                        onTintColor="#FB6107"
                        thumbTintColor="#fff"
                        value = {this.props.ghost}
                        onValueChange = {()=>this.props.ghostMode()}
                    />
                    <Text style={styles.textual}>Ghost</Text>
                </View>
                <View style={styles.kid}>
                    <Switch
                        disabled = {!this.props.ghost}
                        tintColor="#474747"
                        onTintColor="#FB6107"
                        thumbTintColor="#fff"
                        value = {this.props.difficulty}
                        onValueChange = {()=>this.props.proMode()}
                    />
                    <Text style={styles.textual}>Pro</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    container : {
        flexDirection: "row",
    },
    kid : {
        alignSelf: "center",
        padding : 45,
        justifyContent: "center",
        alignItems: "center"
    },
    textual : {
        color: "#474747",
        fontSize: 16
    }
}