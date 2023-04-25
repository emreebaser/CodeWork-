import React from "react";
import {View,Text,Image} from 'react-native';
import styles from './Detail.style'
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Loading from "../../components/Loading";
import Error from '../../components/Error'
const Detail =({route})=>{ //stack yapısında olduğu için parametreyi almak için 
    const {id} =route.params;
    const {loading,error,data} = useFetch(`${Config.API_PRODUCT_URL}/${id}  `); //custom hooks yapısını kullanarak elimde bulunan API nin sonuna id ekleyerek ürünlere tek tek ulşatım 
    
    if(loading){
        return <Loading />
    }
    if(error){
        return <Error />
    }
    return(
       <View style={styles.container}>
         <Image style={styles.image} source={{uri:data.image}} />
         <View style={styles.body_container}>
         <Text style={styles.title}>{data.title}</Text>
         <Text style={styles.description}>{data.description}</Text>
         <Text style={styles.price}>{data.price} TL</Text>
         <Text>{data.rate}</Text>

         </View>
       </View>
     
       
    )
}
export default Detail;