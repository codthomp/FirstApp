import * as React from 'react';
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
   return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000'}}>
<Text style={{fontSize:16,fontWeight:'700', color: 'turquoise'}}>Profile Screen</Text>
<Button onPress={() => navigation.navigate('TheGame')} title="Go back To Game"></Button>
</View>
   );
 }