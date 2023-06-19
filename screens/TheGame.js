import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

export default function TheGameScreen() {
    const [timesPressed, setTimesPressed] = useState(0);

    let textLog = '';
    if (timesPressed >= 1) {
      textLog = 'Button pressed ' + timesPressed + ' times.';
    } else if (timesPressed == 0) {
      textLog = 'Press the button';
    }

   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Game Screen</Text>
       <Text style={{color: 'white'}}>Yo this is sick!</Text>
       <Text style={{color: 'red'}}>I just lost the game</Text>
       <Text style={{fontWeight: 'bold', color: 'green'}}>This is my first app
         <Text style={{fontStyle: 'italic', color: 'yellow'}}> and its cool
         </Text>
       </Text>
       <Text style={{color: 'white'}}>Yo this is ~sick~!</Text>
 
       <Pressable
         onPress={() => {setTimesPressed(current => current + 1);}}
           /* // [alert('You pressed a button.'),  */
           style={({pressed}) => [
           {
             backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
           },
           styles.wrapperCustom,
         ]}>
         {({pressed}) => (
           <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
         )}
       </Pressable>
 
       <View style={styles.logBox}>
         <Text style={{color: 'white'}} testID="pressable_press_console">{textLog}</Text>
       </View>
 
       <Pressable
         onPress={() => {setTimesPressed(0);}}
           /* // [alert('You pressed a button.'),  */
           style={({pressed}) => [
           {
             backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
           },
           styles.wrapperCustom,
         ]}>
         {({pressed}) => (
           <Text style={styles.text}>{'Reset'}</Text>
         )}
       </Pressable>
 
       <StatusBar style="auto" />
     </View>
   );
 }


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });