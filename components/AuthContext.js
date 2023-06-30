import React, { useState, useEffect, useContext } from 'react';
// import SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'my-jwt';
export const API_URL = '';
const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {
    const [authState, setAuthState] = useState({token: null, authenticated: false});

    useEffect(() => {
        async function loadToken() {
            // const token = await SecureStore.getItemAsync(TOKEN_KEY);
            const token = await AsyncStorage.getItem(TOKEN_KEY);
            // console.log("stored: ", token);
            if (token) {
              // console.log("Hello Theo");
                setAuthState({token: token, authenticated: true})
                // console.log("stored2: ", token);
            }
        }
        loadToken();
    }, [])

    const loginHandler = async (userName , password ) => {
        // console.log("Before Fetch");
        const response = await fetch("http://10.0.0.58:5294/authentication/Login",
          {
            method: "POST",
            headers: {"Accept": "application/json","Content-Type": "application/json"},
            body: JSON.stringify({
              username: userName,
              password: password
            })
          })
          .catch(err => console.log("this is an error: " + err));
        // console.log("After Fetch");
        const content = await response.json();
        // console.log(content);
        // console.log(undefined);
        if (content !== undefined && content.token !== undefined) {
          // console.log(content.token);
          // console.log('Login success')
          setAuthState({token: content.token, authenticated: true});
          // console.log(authState);
          // const options = { keychainAccessible: SecureStore.WHEN_UNLOCKED }
          // await SecureStore.setItemAsync(TOKEN_KEY, content.token);
          await AsyncStorage.setItem(TOKEN_KEY, content.token);

          return content;
        } else { console.log(content); return {error: true, msg: content}}
      }
    
      const registerHandler = async (userName, password) => {
        const response = await fetch("http://10.0.0.58:5294/authentication/Register",
          {
            method: "POST",
            headers: {"Accept": "application/json","Content-Type": "application/json"},
            body: JSON.stringify({
              username: userName,
              password: password
            })
          })
          .catch(err => console.log("this is an error: " + err));
        const content = await response.json();
        if (content !== undefined && content.token !== undefined) {
            // console.log(content.token);
            setAuthState({token: content.token, authenticated: true});
            // await SecureStore.setItemAsync(TOKEN_KEY, content.token);
            await AsyncStorage.setItem(TOKEN_KEY, content.token);
  
            return content;
          } else { console.log(content); return {error: true, msg: content}}
      }

      const logoutHandler = async () => {
        // await SecureStore.deleteItemAsync(TOKEN_KEY)
        await AsyncStorage.removeItem(TOKEN_KEY);
        setAuthState({token: null, authenticated: false})
        // navigation.navigate('Login');
      }

      const value = {
        onLogin: loginHandler,
        onRegister: registerHandler,
        onLogout: logoutHandler,
        authState
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
