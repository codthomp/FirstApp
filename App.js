import { StyleSheet, Text, View, Pressable, Button, appearance, ActivityIndicator } from 'react-native';
import React, {useState, useEffect} from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import ProfileScreen from './screens/Profile';
import TheGameScreen from './screens/TheGame';
import SettingsScreen from './screens/Settings';
import CombatScreen from './screens/Combat';
import ListPageScreen from './screens/ListPage';
import AreaSelectionScreen from './screens/AreaSelection';
import GetPlayerDataScreen from './screens/GetPlayerData';

import { AuthContext } from './components/context';

const Stack = createNativeStackNavigator();
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

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('wekgfkb');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('wekgfkb');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    } ,1000)
  }  , []);

  if ( isLoading ) {
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
        <ActivityIndicator size = 'large'/>
      </View>
    )
  };
  return (
<AuthContext.Provider value ={authContext}>
<NavigationContainer theme={DarkTheme}>
  <Drawer.Navigator initialRouteName="TheGame"> 
    {/* <Stack.Navigator> */}
      <Drawer.Screen name="TheGame" component={TheGameScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="ListPage" component={ListPageScreen} />
      <Drawer.Screen name="AreaSelection" component={AreaSelectionScreen} />
      <Drawer.Screen name="GetPlayerData" component={GetPlayerDataScreen} />
      <Drawer.Screen name="Combat" component={CombatScreen} options={{drawerItemStyle: { height: 0 }}}/>
    {/* </Stack.Navigator> */}
  </Drawer.Navigator>
</NavigationContainer>
</AuthContext.Provider>

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
