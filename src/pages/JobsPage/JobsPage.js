import React from "react";
import { SafeAreaView,FlatList,Text, View } from "react-native";
import useFetch from "../../Hooks/UseFetch/UseFetch";


import style from './JobsPage.style'
import Loading from "../../Components/Loading/Loading";
import Error from "../../Components/Error/Error";
import JobsCard from "../../Components/Cards/JobsCard/JobsCard";
const Jobs = ({navigation})=>{
    const {loading,data,error}=useFetch('https://www.themuse.com/api/public/jobs?page=1');
   
   const goToDetail=(item)=>{
    navigation.navigate('Detail',{item});
   };

    const renderJobs = ({item}) =>(<JobsCard item={item} onSelect={()=>goToDetail(item)}/>);
    
if (loading){
   return <Loading />;
}
if(error){
    return <Error/>;
}


    return(
        <SafeAreaView style={style.container}>
     <FlatList 
     data={data.results}
     renderItem={renderJobs}
   
     />
     </SafeAreaView>
    )
}
export default Jobs;