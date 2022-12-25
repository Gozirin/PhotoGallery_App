import { Text, View, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.midcontainer}>
    <View style={[styles.outerview, styles.leftbar]}>
            <Text style={styles.textone}>75+</Text>
            <Text style={styles.texttwo}>Images</Text>
        </View>
        
        <View style={styles.outerview}>
        <Text style={styles.textone}>100+</Text>
        <Text style={styles.texttwo}>Subscribers</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    midcontainer: {
        flexDirection: 'row',
        backgroundColor: '#cf000f',
        borderTopWidth: 10,
        borderTopColor: '#fff',
        
    },

    outerview: {
        flex: 1,
        padding: 20,
        alignItems: 'center'

    },

    textone: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

    },
    texttwo:{
        color: '#fff',
        fontSize: 14,
        marginTop: 5
    },
    leftbar: {
        borderRightWidth: 4,
        borderRightColor: '#fff',
    }
});