import React, { useState } from 'react';


export default function PlayerData({ navigation }) {
const [player, setPlayer] = useState({ name: 'TheThird0ne', health: 50, attack: 15, defense: 8});
<playerContext.Provider value={player}/>
function getPlayerName() {
    return player.name;
}
function getPlayerHealth() {
    return player.health;
}
function getPlayerAttack() {
    return player.attack;
}
function getPlayerDefense() {
    return player.defense;
}
module.exports = {
    functions: getPlayerName, getPlayerHealth, getPlayerAttack, getPlayerDefense
  };
}

