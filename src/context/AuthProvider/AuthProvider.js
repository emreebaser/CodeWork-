import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useState,useEffect} from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducers from "./reducer";
const AuthProvider =({children})=>{
const [user,setUser]=useState(null);
const [isAuthLoading,setAuthLoading]=useState(true)
useEffect(()=>{
    
 AsyncStorage.getItem('@USER').then(userSession =>{
userSession && setUser(JSON.parse(userSession));
setAuthLoading(false);
 });
},[]);

const store = legacy_createStore(reducers,{user,isAuthLoading})
return <Provider store={store}>{children}</Provider>
};
export default AuthProvider;