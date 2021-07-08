import React from 'react';
import{StyleSheet,Text,Dimensions, TouchableHighlight} from 'react-native'

const styles = StyleSheet.create({
    button  : {
        fontSize: 40,
        height: Dimensions.get('window').width  /  5,
        width: Dimensions.get('window').width / 5,
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
        width: Dimensions.get('window').width / 1,       
        fontSize: 40,
        color:'#fff', 
        backgroundColor:'#FF8C00',
        padding: 10,
        
         
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

