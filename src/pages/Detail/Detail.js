import React from 'react';
import {SafeAreaView, View, Text, ScrollView,useWindowDimensions,TouchableOpacity, Linking} from 'react-native';
import RenderHTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './Detail.style';
import { useDispatch } from 'react-redux';

const Detail = ({route}) => {
    const {item} = route.params
    const { width } = useWindowDimensions();
    const handleSubmit =()=>{
        Linking.openURL(item.refs.landing_page)
    };
    const dispatch=useDispatch();
    const AddFavorite=()=>{
      dispatch({type:'ADD_FAV',payload:{item:item}})
    }


  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.info_container}>
        <Text style={styles.header}>Implementation Consultant</Text>
        <View style={styles.location_container}>
          <Text style={styles.text}>Locations: </Text>
          <Text style={styles.locations}>{item.locations[0].name}</Text>
        </View>
        <View style={styles.location_container}>
            <Text style={styles.text}>Job Level: </Text>
            <Text style={styles.locations}>{item.levels[0].name}</Text>
        </View>
        <Text style={styles.mid_header}>JOB DETAIL</Text>
      </View>
      <View style={styles.html_container}>
      <RenderHTML source={{html:item.contents}}  contentWidth={width}/>
      </View>
      <View style={styles.button_container}> 
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Icon name='login' size={20} style={styles.Icon}/>
        <Text style={styles.button_text}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={AddFavorite}>
      <Icon name='cards-heart' size={20} style={styles.Icon}/>
        <Text style={styles.button_text}>Favorite Job</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Detail;
