import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, SafeAreaView } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function JackPotGambleScreen({ navigation }) {
//    const [name, setName] = useState('Cody');
//    const [person, setPerson] = useState({ name: 'Billy', age: 21, coffee: 'NA'})

//    const clickHandler = () => {
//       if (name === 'Cody') {
//       setName('cODY');
//       } else {
//          setName('Cody');
//       }
//    }

   return (
<SafeAreaView style={styles.container}>
    <View style={styles.fixToText}>
    <Text style={{fontSize:16,fontWeight:'700', color: 'turquoise'}}>Sign In Screen</Text>
    </View>
</SafeAreaView>
   );
 }


 const styles = StyleSheet.create({
   container: {
     flex: 1,
   //   alignItems: 'center',
   //   justifyContent: 'center',
   //   height: 700,
   // borderWidth: 6,
   // borderColor: '#fff',
   // borderRadius: 4
   },

   TitleText: {
       fontSize:20,
       fontWeight:'700',
       color: 'turquoise',
       justifyContent: 'flex-start'
   },

   Button: {
       color: '#fff',
       backgroundColor: '#fff',
       justifyContent: 'flex-end'
   },
   fixToText: {
       flexDirection: 'row',
       justifyContent: 'space-between',
     },
   separator: {
       marginVertical: 8,
       color: '#000',
       borderBottomColor: '#fff',
       borderBottomWidth: StyleSheet.hairlineWidth,
     },
     linearGradient: {
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 5,
       height: 200,
       width: 200,
     },
     Button:{
       marginRight:40,
       marginLeft:40,
       marginTop:10,
   },
   buttonContainer: {
      marginTop: 20,
      color: 'white',
   },
   input: {
      borderWidth: 1,
      borderColor: '#777',
      paggind: 8,
      margin: 10,
      width: 200,
   }

});