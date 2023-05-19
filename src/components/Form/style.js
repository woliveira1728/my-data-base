import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:10,
        padding:10,
    },
    formLabel:{
        color:"#000000",
        fontSize:18,
        textAlign:"center",
        paddingLeft:20,
        fontWeight:"bold",
    },
    input:{
        width:"90%",
        borderRadius:50,
        borderColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10,
    },
    buttonCad:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#4B0082",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:5,
    },
    textButtonCad:{
        fontSize:20,
        color:"#ffffff",
    }
  });

  export default styles