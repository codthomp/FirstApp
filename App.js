// import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import ProfileScreen from './screens/Profile';
import TheGameScreen from './screens/TheGame';
import SettingsScreen from './screens/Settings';
import DrawerItems from './constants/DrawerItems';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="TheGame">
      <Drawer.Screen
        name="TheGame"
        component={TheGameScreen}
        options={{ drawerLabel: 'TheGame' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ drawerLabel: 'Profile' }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ drawerLabel: 'Settings' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <Pressable
    //     onPress={() => {Drawer.openDrawer()}}
    //       /* // [alert('You pressed a button.'),  */
    //       style={({pressed}) => [
    //       {
    //         backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
    //       },
    //       styles.wrapperCustom,
    //     ]}>
    //     {({pressed}) => (
    //       <Text style={styles.text}>{'Open Menu'}</Text>
    //     )}
    //   </Pressable>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', }}>
    <Text style={{fontSize:16,fontWeight:'700', color: 'red'}}>Profile Screen</Text>
    <Button style ={{fontsize:16, color: 'white'}} onPress={() => Drawer.openDrawer()} title="Open Menu"></Button>
  </View>

  );

//     <NavigationContainer>
//     <Drawer.Navigator
//        drawerType="front"
//        initialRouteName="TheGame"
//        drawerContentOptions={{
//          activeTintColor: '#e91e63',
//          itemStyle: { marginVertical: 10 },
//        }}

// >
//        {
//          DrawerItems.map(drawer=><Drawer.Screen
//            key={drawer.name}
//            name={drawer.name}
//            options={{
//            drawerIcon:({focused})=>
//             drawer.iconType==='Material' ?
// <MaterialCommunityIcons
//                  name={drawer.iconName}
//                  size={24}
//                  color={focused ? "#e91e63" : "black"}
//              />
//            :
//            drawer.iconType==='Feather' ?
// <Feather
//                name={drawer.iconName}
//                size={24}
//                color={focused ? "#e91e63" : "black"}
//              />
//            :
// <FontAwesome5
//                name={drawer.iconName}
//                size={24}
//                color={focused ? "#e91e63" : "black"}
//              />
//            ,
//                headerShown:true,
//                header: ({ scene }) => {
//                  const { options } = scene.descriptor;
//                  const title =
//                    options.headerTitle !== undefined
//                      ? options.headerTitle
//                      : options.title !== undefined
//                      ? options.title
//                      : scene.route.name;

//                  return (
// <Header screen={title}/>
//                  );
//                }

//            }}
//            component={
//              drawer.name==='TheGame' ? TheGameScreen
//                : drawer.name==='Profile' ? ProfileScreen
//                  : SettingsScreen
//            }
//          />)
//        }
// </Drawer.Navigator>
//     </NavigationContainer>
    //  );

  // return (
  //   <NavigationContainer>
  //   <Drawer.Navigator initialRouteName="Home">
  //     <Drawer.Screen name="TheGame" component={TheGameScreen} />
  //     <Drawer.Screen name="Profile" component={ProfileScreen} />
  //     <Drawer.Screen name="Settings" component={SettingsScreen} />
  //   </Drawer.Navigator>
  // </NavigationContainer>
  //    );




  // const [timesPressed, setTimesPressed] = useState(0);

  // let textLog = '';
  // if (timesPressed >= 1) {
  //   textLog = 'Button pressed ' + timesPressed + ' times.';
  // } else if (timesPressed == 0) {
  //   textLog = 'Press the button';
  // }

  // return (
  //   <View style={styles.container}>
  //     <Text style={{color: 'white'}}>Yo this is sick!</Text>
  //     <Text style={{color: 'red'}}>I just lost the game</Text>
  //     <Text style={{fontWeight: 'bold', color: 'green'}}>This is my first app
  //       <Text style={{fontStyle: 'italic', color: 'yellow'}}> and its cool
  //       </Text>
  //     </Text>
  //     <Text style={{color: 'white'}}>Yo this is ~sick~!</Text>

  //     <Pressable
  //       onPress={() => {setTimesPressed(current => current + 1);}}
  //         /* // [alert('You pressed a button.'),  */
  //         style={({pressed}) => [
  //         {
  //           backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
  //         },
  //         styles.wrapperCustom,
  //       ]}>
  //       {({pressed}) => (
  //         <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
  //       )}
  //     </Pressable>

  //     <View style={styles.logBox}>
  //       <Text style={{color: 'white'}} testID="pressable_press_console">{textLog}</Text>
  //     </View>

  //     <Pressable
  //       onPress={() => {setTimesPressed(0);}}
  //         /* // [alert('You pressed a button.'),  */
  //         style={({pressed}) => [
  //         {
  //           backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
  //         },
  //         styles.wrapperCustom,
  //       ]}>
  //       {({pressed}) => (
  //         <Text style={styles.text}>{'Reset'}</Text>
  //       )}
  //     </Pressable>

  //     <StatusBar style="auto" />
  //   </View>
  // );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // buttonContainer: {
  //   width: 320,
  //   height: 68,
  //   marginHorizontal: 20,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   padding: 3,
  // },
  // button: {
  //   borderRadius: 10,
  //   width: '100%',
  //   height: '100%',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   flexDirection: 'row',
  // },
  // buttonIcon: {
  //   paddingRight: 8,
  // },
  // buttonLabel: {
  //   color: '#fff',
  //   fontSize: 16,
  // },
});
