import * as React from 'react';
import { View, Text, Button } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default function ProfileScreen({ Drawer }) {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:16,fontWeight:'700'}}>Profile Screen</Text>
<Button onPress={() => Drawer.goBack()} title="Go back home"></Button>
</View>
   );
 }