import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';  //State 1: Import the useState hook
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  //Using State 1: pass in inital value of 'kuma' to the useState() hook ------------------------------------------------
  const [stateIsCalledName, functionToUpdateState] = useState('kuma')//State 2: Wire up to useState
  const clickHandler = () => {// State 4: clickHandler function that calls functionToUPdateSate
    functionToUpdateState('this text will update name')
  }
  // End Using State 1 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  // Using State 2 ------------------------------------------------------------------------------------------------
  const [stateIsCalledName2, functionToUpdateState2] = useState({ name: "Kuma", age: 11})
  const clickHandler2 = (stateIsCalledName2) => {
    functionToUpdateState2({ name: "Kuma2", age: 2})
  }
  //End  Using State 2 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  // Using State with Text Inputs ------------------------------------------------------------------------------------------------
  const [stateName, setName] = useState('Kuma') //Text input 1: Set state and declare function
  const [stateAge, setAge] = useState('11')
  // End Using State with Text Inputs ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  

  // Using State with Lists and ScrollView ------------------------------------------------------------------------------------------------
  // We need a key property, so React can keep track of the elements. 
  const [statePeople, setPeopleFunction] = useState([ //Lists 1: Set state to an array and declare function
    { name: 'Kuma', key: '1' },
    { name: 'Mona', key: '2' },
    { name: 'Raven', key: '3' },
    { name: 'Test', key: '4' },
    { name: 'Test', key: '5' },
    { name: 'Test', key: '6' },
    { name: 'Test', key: '7' },
  ]) //

  // Using State with Lists and ScrollView ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
  

  
  
  return (
    <View style={styles.container}>
{/*    State Basics, Example 1    */}
      <View style={styles.header}>
        <Text>First Example</Text>
        <Text>My name is {stateIsCalledName}</Text> {/* State 3: Output*/}
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.buttonContainer}>
         <Button title='update state' onPress={clickHandler} /> {/* pass props to specify what is on button */}
      </View>
{/*    State Basics, Example 2    */}
      <View>
        <Text>Second Example</Text>
        <Text>My name is {stateIsCalledName2.name}</Text>
        <Text>My age is {stateIsCalledName2.age}</Text>
      </View>
      <View style={styles.buttonContainer}>
         <Button title='update state 2' onPress={clickHandler2} />
      </View>
      <StatusBar style="auto" />
{/* State: Using a text input field */}
      <View>
        {/* Text input 2: Text input takes input values and calls setName() */}
        <TextInput 
          style={styles.input} 
          placeholder='placeholder text'
          onChangeText={(inputValue) => setName(inputValue)}
        />
        {/* Text input 3: Output the stateName and stateAge */}
        <Text>name: {stateName} age: {stateAge}</Text> 
      </View>
{/* State: Outputting lists */}
      <View>
        <ScrollView>
          { statePeople.map((canCallThisWhateverIWant) => { //Lists 2: Iterate through the list with map. If it's in a scrollview scroll is added.
            //Lists 3: return JSX template for each item inside the array. Parent Component has to have a key prop 
            return (
              <View key={canCallThisWhateverIWant.key}>
                <Text>{canCallThisWhateverIWant.name}</Text>{/* Lists 4: output */}
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    margin: 10,
    width: 200,
  }
});
