import React from "react";
import {SafeAreaView,Text,FlatList} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import JobsCard from "../../Components/Cards/JobsCard/JobsCard";
const FavoriteJobs =({navigation})=>{
   const list = useSelector(s => s.favoriteList);
   const dispatch=useDispatch();
   const removeFav=(item)=>{
    dispatch({type:'REMOVE_FAV',payload:{itemRemove:item}})
   }
   const handlePress = item => {
    navigation.navigate('Detail', {item});
  };
 const renderItem=({item})=><JobsCard item={item} remove={()=>removeFav(item)} onSelect={()=>handlePress(item)} />
    return(
        <SafeAreaView>

            <FlatList data={list}  renderItem={renderItem}/>
            
           
        </SafeAreaView>
    )
}
export default FavoriteJobs;