import { Dimensions, StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        borderWidth:1,
        margin:5,
        padding:10,
        borderRadius:5,
        backgroundColor:'white',
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
    },
    company_name:{
        fontSize:15,
        fontWeight:'bold',
    },
    locations_container:{
        
        borderWidth:1,
        backgroundColor:'#e53935',
        borderRadius:10,
        alignItems:'center',
        borderColor: '#e53935',
        alignSelf: 'baseline',
        padding:5,
       
    },
    locations:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    },
    levels:{
        alignSelf:'flex-end',
        color:'#e53935',
        fontWeight:'bold',

    },
    remove_button:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#e53935',
        height:30,
        width:Dimensions.get('window').width*0.9,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    },
    button_text:{
        color:'white',
        fontWeight:'bold',
        margin:5
    }
})