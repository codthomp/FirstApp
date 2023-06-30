import { StyleSheet, Button, ActivityIndicator } from 'react-native';
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './screens/Profile';
import TheGameScreen from './screens/TheGame';
import SettingsScreen from './screens/Settings';
import CombatScreen from './screens/Combat';
import ListPageScreen from './screens/ListPage';
import AreaSelectionScreen from './screens/AreaSelection';
import GetPlayerDataScreen from './screens/GetPlayerData';
import LoginScreen from './screens/Login';
import {AuthProvider, useAuth} from './components/AuthContext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const THEGAME = 'TheGame';
const LOGIN = 'Login';

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}
export const Layout = () => {
  const {authState} = useAuth();
  return (
    <NavigationContainer theme={DarkTheme}>
      {authState?.authenticated == true ? <DrawerNav></DrawerNav> : <AuthStack></AuthStack>}
      </NavigationContainer>
  )
}

export const DrawerNav = () => {
  const {onLogout} = useAuth();
  return (
    <Drawer.Navigator initialRouteName="TheGame"> 
        <Drawer.Screen name="TheGame" component={TheGameScreen} options={{headerRight: () => <Button onPress={onLogout} title="Sign Out"/>}}/>
        <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerRight: () => <Button onPress={onLogout} title="Sign Out"/>}}/>
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="ListPage" component={ListPageScreen} />
        <Drawer.Screen name="AreaSelection" component={AreaSelectionScreen} />
        <Drawer.Screen name="GetPlayerData" component={GetPlayerDataScreen} />
        <Drawer.Screen name="Combat" component={CombatScreen} options={{drawerItemStyle: { height: 0 }}}/>
    </Drawer.Navigator>
  );
}

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={DrawerNav} headerLeft={null} gestureEnabled={false} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
// export const Layout = () => {
// const {authState, onLogout} = useAuth();
// // const pressLogout = () => {
// //   onLogout;
// //   navigation.navigate('Login')
// // }
// return (
// <NavigationContainer theme={DarkTheme}>
// {console.log("Before Drawer: ")}
// {console.log(authState)}
//   <Drawer.Navigator initialRouteName={authState?.authenticated == true ? THEGAME : LOGIN}> 
//   {console.log("After Drawer: ")}
//     {authState?.authenticated == true ? (
//       <>
//       <Drawer.Screen name="TheGame" component={TheGameScreen} options={{headerRight: () => <Button onPress={onLogout} title="Sign Out"/>}}/>
//       <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerRight: () => <Button onPress={onLogout} title="Sign Out"/>}}/>
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="ListPage" component={ListPageScreen} />
//       <Drawer.Screen name="AreaSelection" component={AreaSelectionScreen} />
//       <Drawer.Screen name="GetPlayerData" component={GetPlayerDataScreen} />
//       <Drawer.Screen name="Combat" component={CombatScreen} options={{drawerItemStyle: { height: 0 }}}/>
//       <Drawer.Screen name="Login" component={LoginScreen} options={{drawerItemStyle: { height: 0 }}}/>
//       </>
//     ) : (
//       <Drawer.Screen name="Login" component={LoginScreen}/>
//     )}
//   </Drawer.Navigator>
// </NavigationContainer>
// )
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 700,
  },

});
