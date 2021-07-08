import React from 'react';
import{StyleSheet,Text,View,} from 'react-native'

const styles = StyleSheet.create({
    display:{
        padding:20,
        backgroundColor:'#888',
        alignItems:'flex-end',          
         borderRadius:10, 
            
    },
    displayValue:{
        fontSize:50,
        color:'#FFFFFF',


    }
})

export default props =>
         <View style={styles.display}>
             <Text style={styles.displayValue}
                   numberOfLines={1}>{props.value}</Text>
        </View>
