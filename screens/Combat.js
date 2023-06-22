import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useRoute, useIsFocused  } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import PlayerData from '../components/PlayerData';
import { setStatusBarBackgroundColor } from 'expo-status-bar';

import AnimatedBar from "react-native-animated-bar";

// const Separator = () => <View style={styles.separator} />;

export default function CombatScreen({ navigation, route }) {
  // const eName = navigation.getParam('enemyName');
  // console.warn(navigation.route.params)
  const Route = useRoute();
  const [player, setPlayer] = useState({ name: 'TheThird0ne', health: 5, attack: 15, defense: 30});

  const [playerHealthProgress, setPlayerHealthProgress] = React.useState(player.health);
  const [enemyHealthProgress, setEnemyHealthProgress] = React.useState(Route.params.enemyHealth);
  var MaxpotionCount = 3;
  const [currentPotionCount, setCurrentPotionCount] = React.useState(MaxpotionCount);
  var damageDealt = 0;
  const isFocused = useIsFocused();

  function usePotionHandler() {
    if (currentPotionCount > 0){
      setCurrentPotionCount(currentPotionCount - 1);
      if (playerHealthProgress + 10 > player.health) {
      setPlayerHealthProgress(player.health);
    } else {
      setPlayerHealthProgress(playerHealthProgress + 10);
    }


    } else {
      Alert.alert('No potions left')
    }
  }
  function attackhandler() {
    damageDealt = 0;
    damageDealt = Math.round((player.attack * 100)/(Route.params.enemyDefense + 100));
    if (enemyHealthProgress - damageDealt >= 0) {
    setEnemyHealthProgress(enemyHealthProgress - damageDealt);
    enemyAttackhandler();
    } else {
      setEnemyHealthProgress(0);
      Alert.alert('Enemy defeated!');
      navigation.navigate('ListPage');
    }
  }

  function enemyAttackhandler() {
    damageDealt = 0;
    damageDealt = Math.round((Route.params.enemyAttack * 100)/(player.defense + 100));
    if (playerHealthProgress - damageDealt >= 0) {
    setPlayerHealthProgress(playerHealthProgress - damageDealt);
    } else {
      setPlayerHealthProgress(0);
      Alert.alert('You have been defeated!');
      navigation.navigate('ListPage');
    }
  }

  React.useEffect(()=>{
    if(isFocused){
      setPlayerHealthProgress(player.health);
      setEnemyHealthProgress(Route.params.enemyHealth);
      setCurrentPotionCount(MaxpotionCount);
    }
   },[isFocused])

  return (
    
<View style={styles.container}>
<Text style={styles.TitleText}>Combat Screen</Text>

<View style={styles.fixToText}>
<View>
  <Text style={styles.StatsText}>Player Name: {player.name}</Text>
  <Text style={styles.StatsText}>Player Health: {player.health}</Text>
  <Text style={styles.StatsText}>Player Attack: {player.attack}</Text>
  <Text style={styles.StatsText}>Player Defense: {player.defense}</Text>
</View>
<View>
    <Text>             </Text>
</View>
<View>
  <Text style={styles.StatsText}>Enemy Name: {Route.params.enemyName}</Text>
  <Text style={styles.StatsText}>Enemy Health: {Route.params.enemyHealth}</Text>
  <Text style={styles.StatsText}>Enemy Attack: {Route.params.enemyAttack}</Text>
  <Text style={styles.StatsText}>Enemy Defense: {Route.params.enemyDefense}</Text>
</View>
</View>

<View style={styles.fixToText}>
<View>
  <Text style={{fontSize:13, fontWeight:'700', color: 'yellow'}}>             HP: {playerHealthProgress}            </Text>
<AnimatedBar
            progress={playerHealthProgress/player.health}
            height={20}
            borderColor="#DDD"
            fillColor="tomato"
            barColor="green"
            borderRadius={1}
          />
</View>

<Text>                 </Text>

<View>
<Text style={{fontSize:13, fontWeight:'700', color: 'yellow'}}>             HP: {enemyHealthProgress}            </Text>
<AnimatedBar
            progress={enemyHealthProgress/Route.params.enemyHealth}
            height={20}
            borderColor="#DDD"
            fillColor="tomato"
            barColor="green"
            borderRadius={1}
          />
</View>

</View>

<View style={styles.fixToText}>
<View backgroundColor='grey'>
  <Button onPress={() => 
    attackhandler()} title="Attack" color="#fff" justifyContent='flex-end'/>
</View>

<Text>           </Text>

<View backgroundColor='grey'>
  <Button onPress={() => 
    usePotionHandler()} title={"Use potion: "+JSON.stringify(currentPotionCount) + "/" + JSON.stringify(MaxpotionCount)} color="#fff" justifyContent='flex-end'/>
</View>



</View>



{/* <Separator /> */}
{/* <Button onPress={() => 
    navigation.navigate('TheGame')} title="Go back To Game" color="#fff" justifyContent='flex-end'></Button> */}
    <View backgroundColor='#fff' justifyContent='flex-end'>
        <Button onPress={() => 
            navigation.navigate('TheGame')} title="Go back To Game" color="#000" ></Button>
    </View>
    {/* <View style={styles.fixToText}>
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
      </View> */}
      {/* <View style={{borderWidth: 6, borderColor: '#fff', borderRadius: 6}}>
      <Button
          title=""
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View> */}
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
    StatsText: {
      fontSize:13,
      fontWeight:'700',
      color: 'orange'
      // justifyContent: 'flex-start'
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
        color: 'white',
        borderBottomColor: 'white',
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