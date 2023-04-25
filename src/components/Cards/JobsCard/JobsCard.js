import React from "react";
import {Text,View,TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './JobsCard.style'
const JobsCard = ({item,onSelect,remove})=>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
       <Text style={styles.name}>{item.name}</Text>  
       <Text style={styles.company_name}>{item.company.name}</Text>
       <View style={styles.locations_container}>
       <Text style={styles.locations}>{item.locations[0].name}</Text>
       </View>
        
       <Text style={styles.levels}>{item.levels[0].name}</Text>
        {remove && 
        <TouchableOpacity style={styles.remove_button} onPress={remove}>
            <Icon name='archive-remove-outline' size={25}  color='white'/>
             <Text style={styles.button_text}>Remove</Text>
            </TouchableOpacity>}
        </View>
        </TouchableWithoutFeedback>
    )
}
export default JobsCard;