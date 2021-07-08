import { StatusBar } from 'react-native';
import React, {Component} from 'react';
 import {View, StyleSheet} from 'react-native';
 import Button from './src/components/Button';
 import Display from './src/components/Display'; 
 import { tsParenthesizedType } from '@babel/types';

 const initialState = {
   displayValue: '0',
   clearDisplay:false,
   operation:null,
   values:[0, 0],
   current:0,
 }

 export default class App extends Component{
   state =  { ...initialState }

   addDigit = n => {
     const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

     if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')){
       return
     }

     const currentValue = clearDisplay ? ' ' : this.state.displayValue
     const displayValue = currentValue + n
     this.setState({ displayValue, clearDisplay: false})

     if (n !== ' . '){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({ values })
     }

   }

   clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    if (this.state.current === 0) {
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = 
          eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      })
    }
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.box}>
            <Display  value={this.state.displayValue}/>
           </View>
           <Button label='CE/C' triple onClick={this.clearMemory} />
           <View>

           </View>
          <View style={styles.buttons}>
              <View style={styles.botoes}>           
                <Button label='7'   onClick={() => this.addDigit(7)} />
                <Button label='4'   onClick={() => this.addDigit(4)} />
                <Button label='1'   onClick={() => this.addDigit(1)} />
                <Button label='0'   onClick={() => this.addDigit(0)} />
            </View>
            <View style={styles.botoes}>    
              <Button label='8'   onClick={() => this.addDigit(8)} />
              <Button label='5'  onClick={() => this.addDigit(5)} />
              <Button label='2'   onClick={() => this.addDigit(2)} />
              <Button label='00'   operation  onClick={() =>this.addDigit('00')} />
            </View>
            <View style={styles.botoes}>
              <Button label='9'   onClick={() => this.addDigit(9)} />
              <Button label='6'   onClick={() => this.addDigit(6)} />
              <Button label='3'   onClick={() => this.addDigit(3)} />
              <Button label='.'   operation  onClick={() =>this.addDigit('.')} />
            </View>
            <View style={styles.botoes}>
              <Button label='%'   onClick={() => this.addDigit('%')} />
              <Button label='x'  operation onClick={() => this.setOperation('*')} />
              <Button label='+'    double onClick={() => this.setOperation('+') } />
            </View>
            <View style={styles.botoes}>
               <Button label='>'   onClick={() => this.addDigit('>')} />         
              <Button label='÷'  operation onClick={() => this.setOperation('/')} />
              <Button label='-'  operation onClick={() => this.setOperation('-')} />              
              <Button label='='  onClick={this.setOperation} />
            </View>
            </View>
      </View>   
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#000000'
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box:{  
    height:100,
    margin:30,   
    top:10, 
    left: 1,
    marginTop: 10,
    borderRadius:20,
    backgroundColor: '#fffaf0',
    justifyContent: 'center',
    width:314,  

  },

  botoes:{
    height:280,
    width:70,
    justifyContent: 'space-evenly',
  },

});