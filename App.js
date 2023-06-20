import { StyleSheet, Text, View, Pressable, Button, appearance } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import ProfileScreen from './screens/Profile';
import TheGameScreen from './screens/TheGame';
import SettingsScreen from './screens/Settings';
import CombatScreen from './screens/Combat';
// import { LinearGradient } from 'expo-linear-gradient';


const Drawer = createDrawerNavigator();

// function MyDrawer({ navigation }) {
//   return (
//     <Drawer.Navigator initialRouteName="TheGame">
//       <Drawer.Screen
//         name="TheGame"
//         component={TheGameScreen}
//         options={{ drawerLabel: 'TheGame' }}
//       />
//       <Drawer.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{ drawerLabel: 'Profile', color: '#fff'}}
//       />
//       <Drawer.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{ drawerLabel: 'Settings' }}
//       />
//       <Drawer.Screen
//         name="Combat"
//         component={CombatScreen}
//         options={{ drawerLabel: 'Fight Stuff' }}
//       />
//     </Drawer.Navigator>
//   );
// }


export default function App() {
  return (

<NavigationContainer theme={DarkTheme}>
<Drawer.Navigator initialRouteName="TheGame"> 
  <Drawer.Screen name="TheGame" component={TheGameScreen} />
  <Drawer.Screen name="Profile" component={ProfileScreen} />
  <Drawer.Screen name="Settings" component={SettingsScreen} />
  <Drawer.Screen name="Combat" component={CombatScreen} />
</Drawer.Navigator>
</NavigationContainer>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 700,
  },

});
