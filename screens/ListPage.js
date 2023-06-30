import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, RefreshControl, TouchableHighlight } from "react-native";
import { useIsFocused } from '@react-navigation/native';
// import CombatScreen from './Combat';

export default function ListPageScreen({ navigation }) {
    const [player, setPlayer] = useState({ name: 'TheThird0ne', health: 50, attack: 15, defense: 8});

    var pageLimit = 10;

    const isFocused = useIsFocused();

    const [enemyType, setEnemyType] = useState([
        { name: 'Crow', health: 5, attack: 11, defense: 7, key: 1},
        { name: 'Wolf', health: 15, attack: 30, defense: 23, key: 2},
        { name: 'Bat', health: 3, attack: 7, defense: 2, key: 3},
        { name: 'Zombie', health: 50, attack: 23, defense: 17, key: 4}
       ]);

   const [enemies3, setEnemies3] = React.useState([]);

 const [refreshing, setRefreshing] = React.useState(false);

 const onRefresh = React.useCallback(() => {
    fillPage();
   setRefreshing(true);
   setTimeout(() => {
     setRefreshing(false);
   }, 20);
 }, []);

    function getRandomInt() { //(min, max) {
      min = 1; //Math.ceil(min);
      max = 4; //Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
     }


     function fillPage() {
        enemies3.length = 0;
         for (var i=0;i < pageLimit;i++) {
            enemies3.push(enemyType[getRandomInt()])
          };
    }

    React.useEffect(()=>{
      if(isFocused){
        fillPage();
      }
     },[isFocused])

   return (
    useEffect(() => {fillPage()}, []),
    <View style={styles.container}>
        <Text style={{fontSize:16,fontWeight:'700', color: 'turquoise'}}>Enemies List</Text>
        <Text style={{fontSize:8,fontWeight:'700', color: 'yellow'}}>drag down to refresh</Text>

        <ScrollView scrollIndicatorInsets={{ right: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        >
        { enemies3.map((item) => (
                <View>
                    <TouchableHighlight onPress={() => navigation.navigate(
                        {name: 'Combat', params: {enemyName: item.name, enemyHealth: item.health, enemyAttack: item.attack, enemyDefense: item.defense}, merge: true}
                        )}>
                        <Text style={styles.itemProp}>{item.name} HP: {item.health} Att: {item.attack} Def: {item.defense}</Text>
                    </TouchableHighlight>
                </View>   
            )
        )}
        </ScrollView>

    </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },

  TitleText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'turquoise',
    justifyContent: 'flex-start'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Button: {
    marginRight: 5,
    marginLeft: 5,
    marginTop: 1,
    color: 'grey',
    backgroundColor: 'grey',
  },
  buttonContainer: {
    marginTop: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    paggind: 8,
    margin: 10,
    width: 200,
  },
  whiteText: {
    color: 'white',
  },
  itemProp: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'grey',
    fontSize: 20
  }

});