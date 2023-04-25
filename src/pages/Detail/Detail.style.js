import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:{
        flex:1,
        margin:5,
        backgroundColor:'#e0e0e0',
        
    },
    info_container:{
        flex:1,
        backgroundColor:'#e0e0e0',
        margin:5,
       
        borderRadius:5
    },
    header:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'gray',
        padding:5
    },
    location_container:{
        flexDirection:'row',
       
        padding:5 ,
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:'#e53935'
    },
    locations:{
        fontSize:15,
        fontWeight:'bold',
    },
    mid_header:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'gray',
    },
    html_container:{
        flex:1,
        backgroundColor:'white',
        margin:1,
    },
    button_container:{
       
     flexDirection:'row',
     justifyContent:'space-between',
     margin:5,
     padding:10
    },
    button:{
        backgroundColor:'red',
        height:35,
        width:150,
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    button_text:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        marginStart:5,
    },
    Icon:{
        color:'white',
        
    }

})