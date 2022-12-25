import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'
import React, { Component } from 'react'

export default class Body extends Component {
  render() {
    return (
    <ScrollView>
      <View style={styles.bigview}>

       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img1.jpeg')} />
       </View>
       
       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img1.jpeg')} />
       </View>


         {/* // IMAGE 2 // */}   
    <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img2.jpeg')} />
       </View>
       
    <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img2.jpeg')} />
       </View>


           {/* // IMAGE 3 // */}
       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img3.jpeg')} />
       </View>

       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img3.jpeg')} />
       </View>


       {/* // IMAGE 4 // */}
       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/profilepic.jpeg')} />
       </View>

       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/profilepic.jpeg')} />
       </View>



             {/* // IMAGE 5 // */}
           <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img4.jpeg')} />
       </View>

       <View style={styles.smallview}>
        <Image
        style={styles.myimage}
     source={require('../img/img4.jpeg')} />
       </View>

     </View>
    </ScrollView>
    );
  }
} 

const styles = StyleSheet.create({
    bigview: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },

    smallview: {
        margin: 2,
        height: 100,
        width: (Dimensions.get('window').width/2)-4,
    },

    myimage: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }
});