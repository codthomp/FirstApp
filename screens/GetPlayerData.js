import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";

export default function GetPlayerDataScreen({ }) {
  const [player, setPlayer] = useState({ name: "TheThird0ne", health: 50, attack: 15, defense: 8});
  const [playerName, setPlayerName] = useState("");
  const [playerHealth, setPlayerHealth] = useState("");
  const [playerAttack, setPlayerAttack] = useState("");
  const [playerDefense, setPlayerDefense] = useState("");
  const Url = "http://10.0.0.58:8000/";
  const User = "TheThird0ne";

  function parseResponse(response) {

  }

  async function getStatsHandler() {
    console.log("Before Fetch");
    const response = await fetch("http://10.0.0.58:5294/player",
      {
        method: "POST",
        // mode: "no-cors",
        headers: {"Accept": "application/json","Content-Type": "application/json"},
        body: JSON.stringify({
          id: 13,
          name: "Theo",
          health: 502
        })
      })
      .catch(err => console.log("this is an error: " + err));
    // console.log("After Fetch");
    // console.log(response);
    const content = await response.json();
    // console.log(content);
    // console.log(content.name);
    setPlayerName(content.name);
    setPlayerHealth(content.health);
  }

  async function serverShutdown() {
    const response = await fetch("http://10.0.0.58:8000/shutdown", {
      method: "POST",
      mode: "no-cors",
      headers: {
        // HOST: "localhost"
        
      },
      body: JSON.stringify({}),
    })
    .catch(err => console.log("this is an error: " + err));

  }
// return line *****************************************************************************************************
   return (
<View style={styles.container}>
<Text style={{fontSize:18,fontWeight:"700", color: "turquoise", alignItems: "center"}}>Manage and Equip your gear here</Text>
<View style={{borderWidth: 2, borderColor: "#fff", borderRadius: 18,
borderColor: "grey", top: 20}}>
<Text style={{fontSize:14,fontWeight:"700", color: "yellow"}}>
   Here you can see your total stats granted by gear, heroes, and any other effects.</Text>
</View>

   <View style ={{textAlign: "left"}}>
    <View>
    <Text style={{fontSize:18,fontWeight:"700", color: "grey", top: 30}}>Player Name: {playerName}</Text>
    </View>
   <View>
   <Text style={{fontSize:14,fontWeight:"700", color: "yellow", top: 30}}>Max HP: {playerHealth}</Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:"700", color: "yellow", top: 30}}>Attack: {playerAttack}</Text>
   </View>
   <View>
   <Text style={{fontSize:14,fontWeight:"700", color: "yellow", top: 30}}>Defense: {playerDefense}</Text>
   </View>
   </View>

   <View style={{top: 100, borderWidth: 2, borderColor: "grey", borderRadius: 18,
    backgroundColor: "tan"}}>
     <Button onPress={() => getStatsHandler()} title="Load Stats"></Button>
   </View>
   <View style={{top: 100, borderWidth: 2, borderColor: "grey", borderRadius: 18,
    backgroundColor: "tan"}}>
     <Button onPress={() => serverShutdown()} title="Shut down Server"></Button>
   </View>
   <View style={{top: 450, borderWidth: 2, borderColor: "grey", borderRadius: 18,
    backgroundColor: "tan"}}>
     <Button onPress={() => navigation.navigate("TheGame")} title="Go back To Game"></Button>
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
       fontWeight:"700",
       color: "turquoise",
       justifyContent: "flex-start"
   },

   Button: {
       color: "#fff",
       backgroundColor: "#fff",
       justifyContent: "flex-end"
   },
   fixToText: {
       flexDirection: "row",
       justifyContent: "space-between",
     },
   separator: {
       marginVertical: 8,
       color: "#000",
       borderBottomColor: "#fff",
       borderBottomWidth: StyleSheet.hairlineWidth,
     },
     linearGradient: {
       alignItems: "center",
       justifyContent: "center",
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