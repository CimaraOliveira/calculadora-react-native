import React from 'react';
import{StyleSheet,Text,Dimensions, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    button  : {
        fontSize: 40,
        height:60,
        width:70,
        padding: 8,
        textAlign: 'center',
        backgroundColor: '#888',
        borderWidth: 2,
        borderColor: 'black',
        color:'#fff',    
        left: 1,
        borderRadius:10,
     
    },

    operationButton:{
        color:'#fff',
        backgroundColor:'#888',
        borderRadius:10,
       
    },

    buttonsesquerda:{
        fontSize: 40,
        height: 70,
        width: Dimensions.get('window').width / 5,   
        borderRadius:10, 
      
    },
  
    buttonDouble:{
      height: (Dimensions.get('window').width  /  5) *2,
      borderRadius:10,
    },

    buttonTriple:{          
        backgroundColor:'#ff7900',
        height:60,
        width:70,         
        borderRadius:10,
        marginRight:10,
        left: 280,
        fontSize:18,
        padding: 12      
         
    },

})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)
    if(props. buttonsesquerda) stylesButton.push(styles.buttonsesquerda)
   
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}> {props.label} </Text>
        </TouchableHighlight>
    )
}

