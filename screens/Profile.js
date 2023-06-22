import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from "react-native";
// import PlayerData from '../components/PlayerData.js';

export default function ProfileScreen({ navigation }) {
  const [player, setPlayer] = useState({ name: 'TheThird0ne', health: 50, attack: 15, defense: 8});
   return (
<View style={styles.container}>
<Text style={{fontSize:18,fontWeight:'700', color: 'turquoise', alignItems: 'center'}}>Manage and Equip your gear here</Text>
<View style={{borderWidth: 2, borderColor: '#fff', borderRadius: 18,
borderColor: 'grey', top: 20}}>
<Text style={{fontSize:14,fontWeight:'700', color: 'yellow'}}>
   Here you can see your total stats granted by gear, heroes, and any other effects.</Text>
</View>

{/* <View style={{borderWidth: 2, borderColor: '#fff', borderRadius: 6, top: 40,
flexDirection: 'row', justifyContent: 'space-between'}}> */}
   {/* <View>
   <Text style={{fontSize:14,}}>   </Text>
   </View> */}
   <View style ={{textAlign: 'left'}}>
    <View>
    <Text style={{fontSize:18,fontWeight:'700', color: 'grey', top: 30}}>Player Name: {player.name}</Text>
    </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Max HP: {player.health}</Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Attack: {player.attack}</Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Defense: {player.defense}</Text>
   </View>
   {/* <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Evasion:     </Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>XP Gain:     </Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Crit Chance:     </Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Crit Damage:     </Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Stun chance:     </Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Extra earned money:     </Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:'700', color: 'yellow', top: 30}}>Rare item find:     </Text>
   </View> */}
   </View>

{/* </View> */}




   <View style={{top: 500, borderWidth: 2, borderColor: 'grey', borderRadius: 18,
backgroundColor: 'tan'}}>

   
     <Button onPress={() => navigation.navigate('TheGame')} title="Go back To Game"></Button>
   </View>
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

});