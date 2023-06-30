import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from "react-native";

export default function ProfileScreen({ }) {
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
    </View>
  );
}


 const styles = StyleSheet.create({
   container: {
     flex: 1,
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
     Button:{
       marginRight:40,
       marginLeft:40,
       marginTop:10,
   },

});