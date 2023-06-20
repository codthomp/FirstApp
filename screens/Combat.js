import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Separator = () => <View style={styles.separator} />;

export default function CombatScreen({ navigation }) {
   return (
<View style={styles.container} >
    <LinearGradient
        // Background Linear Gradient
        // colors={['rgba(0,0,0,0.8)', 'transparent']}
        colors={['#000', 'transparent', '#FF0000']}
        style={styles.LinearGradient}
      />
<Text style={styles.TitleText}>Combat Screen</Text>
<Separator />
<Button onPress={() => 
    navigation.navigate('TheGame')} title="Go back To Game" color="#fff" justifyContent='flex-end'></Button>
    <View backgroundColor='#fff' justifyContent='flex-end'>
        <Button onPress={() => 
            navigation.navigate('TheGame')} title="Go back To Game" color="#000" ></Button>
    </View>
    <View style={styles.fixToText}>
        <Button
        style={{borderWidth: 6, borderColor: '#fff', borderRadius: 18}}
          title="Left button"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title=" or "
          onPress={() => Alert.alert('Hehe secret button')}
        />
        <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
</View>
   );


   
 }


 const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#000',
      alignItems: 'center',
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

});