import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import getPlayerName from "../components/PlayerData";
import axios from "axios";
// import PlayerData from "../components/PlayerData.js";

export default function GetPlayerDataScreen({ navigation }) {
  const [player, setPlayer] = useState({ name: "TheThird0ne", health: 50, attack: 15, defense: 8});
  const [playerName, setPlayerName] = useState("");
  const [playerHealth, setPlayerHealth] = useState("");
  const [playerAttack, setPlayerAttack] = useState("");
  const [playerDefense, setPlayerDefense] = useState("");
  const Url = "http://10.0.0.58:8000/";
  const User = "TheThird0ne";

  // const https = require("https");
  // const agent = new https.Agent({  
  //   rejectUnauthorized: false
  // });

  function parseResponse(response) {


  }

  async function getStatsHandler() {
    console.log("Before Fetch");
    const response = await fetch("http://localhost:5294/player",
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
    // console.log(response.body);
    console.log("After Fetch");

    // const playerStats = JSON.parse(response.body);
    console.log(response);
    const content = await response.json();
    console.log(content);
    // player.name = playerStats.name;
    console.log(content.name);
    setPlayerName(content.name);
    setPlayerHealth(content.health);
    // setPlayerAttack(playerAttack + 1);
    // setPlayerDefense(playerDefense + 1);

  //   axios({
  //     method: "GET",
  //     url: "http://10.0.0.58:8000/playerStats/",
  //     // Url + "getPlayerStats",
  //     mode: "no-cors",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     data: { User }
  //   }).then(
  //     function (response) {
  //       const playerStats = JSON.parse(response.data);
  //       setPlayerName(playerStats.name);
  //       setPlayerHealth(playerStats.health);
  //       setPlayerAttack(playerStats.attack);
  //       setPlayerDefense(playerStats.defense);
  //     }
  //   ).catch(err => console.log(err))

  }

  async function serverShutdown() {
    // axios({
    //     method: "POST",
    //     url: Url + "shutdown",
    //     data: " ",
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //     // httpsAgent: agent
    // }).then(console.log("Server shut down: " + Url + "shutdown")).catch(err=>console.log(err));

    // axios.post( Url + "shutdown").then(console.log("Server shut down: " + Url + "shutdown")).catch(err=>console.log(err));

    // Alert.alert("10.0.0.58:8000/shutdown");

    // const testURL = "http://10.0.0.58:8000/shutdown";
    // const myInit = {
    //   method: "POST",
    //   mode: "no-cors",
    //   "Access-Control-Allow-Origin": "*",
    //   Accept: "text/json",
    //   "Content-Type": "text/json",
    // };

    // const myRequest = new Request(testURL, myInit);

    // fetch(myRequest).then(function (response) {
    //   return response;
    // }).then(function (response) {
    //   console.log(response);
    // }).catch(function (e) {
    //   console.log(e);
    // });


    const response = await fetch("http://10.0.0.58:8000/shutdown", {
      method: "POST",
      mode: "no-cors",
      headers: {
        // HOST: "localhost"
        
      },
      body: JSON.stringify({}),
    })
    // .then(console.log("This is the response: " + response))
    .catch(err => console.log("this is an error: " + err));

    // try {
    // const result = await response.json();
    // } catch (error) {
    //   console.error("Error: ",error);
    // }

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
   //   alignItems: "center",
   //   justifyContent: "center",
   //   height: 700,
   // borderWidth: 6,
   // borderColor: "#fff",
   // borderRadius: 4
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