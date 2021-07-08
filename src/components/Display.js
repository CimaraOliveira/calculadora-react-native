import React from 'react';
import{StyleSheet,Text,View,} from 'react-native'

const styles = StyleSheet.create({
    display:{
        flex:1,
        padding:20,
        backgroundColor:'#888',
        alignItems:'flex-end',          
        height:90,       
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
