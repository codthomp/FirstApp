import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function SettingsScreen({ navigation }) {
   const [name, setName] = useState('Cody');
   const [person, setPerson] = useState({ name: 'Billy', age: 21, coffee: 'NA'})

   const clickHandler = () => {
      if (name === 'Cody') {
      setName('cODY');
      } else {
         setName('Cody');
      }
   }

   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
<Text style={{fontSize:16,fontWeight:'700', color: 'turquoise'}}>Settings Screen</Text>
<Text style={{color: 'white'}}>My name is {name}</Text>
<View style={StyleSheet.buttonContainer}>
<Button title='Update Name' onPress={clickHandler}/>
</View>

<Text style={{color: 'white'}}>Enter Name:</Text>
<TextInput style={styles.input} placeholder='John Doe' returnKeyType= 'done' defaultValue='' onChangeText={(val) => setPerson({name:val, age:person.age, coffe:person.coffee})}/>
<Text style={{color: 'white'}}>Enter Age:</Text>
<TextInput style={styles.input} placeholder='47' returnKeyType= 'done' keyboardType='numeric' onChangeText={(val) => setPerson({name:person.name, age:val, coffe:person.coffee})}/>
<Text style={{color: 'white'}}>Enter Favorite Coffee:</Text>
<TextInput style={styles.input} placeholder='Some coffee name idk' returnKeyType= 'done' onChangeText={(val) => setPerson({name:person.name, age:person.age, coffee:val})}/>

<Text style={{color: 'white'}}>Name: {person.name}, Age: {person.age}, Coffee: {person.coffee}</Text>

<Button onPress={() => navigation.navigate('TheGame')} title="Go back To Game"></Button>
</View>
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