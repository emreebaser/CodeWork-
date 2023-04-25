import React from 'react';
import {FlatList,View,Text} from 'react-native';
import Config from 'react-native-config';

import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import { useDispatch, useSelector } from 'react-redux';


const Products = ({navigation}) => {
const user =useSelector(s=>s.user)
  const {loading, data, error} = useFetch(Config.API_PRODUCT_URL); //custom Hook yapısı
 
  const handleProductSelect = (id) => {
    navigation.navigate('DetailPage',{id}); //detay sayfasına yönlendirme ve id parametresini gönderdik
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={()=>handleProductSelect(item.id)} /> //parametreyi geçirmek için 
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  
  return(
    <View>
      <Text> Hello {user.username} </Text>
      <FlatList data={data} renderItem={renderProduct}  />
    </View>
  )  
 
   
  
};
export default Products;
