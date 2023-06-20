import * as React from 'react';
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function SettingsScreen({ navigation }) {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
<Text style={{fontSize:16,fontWeight:'700', color: 'turquoise'}}>Settings Screen</Text>
<Button onPress={() => navigation.navigate('TheGame')} title="Go back To Game"></Button>
</View>
   );
 }