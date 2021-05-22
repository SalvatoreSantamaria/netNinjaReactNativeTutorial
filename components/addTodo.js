import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'

      {/* Input Text 2: pass in the submitHandlerProp with input text up to app.js*/}
export default function AddTodo({ submitHandlerProp }) {

  //keep track of what the user types into the input field
  const [getText, setText] = useState()

  //pass inputValue
  const changeHandler = (inputValue) => {
    setText(inputValue)
  }

  return (
    <View>
      {/* when changeHandler fires, it automatically takes in the inputValue */}
      {/* can write it two ways */}

      {/* longhand */}
      {/* onChangeText={ (val) => changeHandler(val) } */}

      {/* shorthand: */}
      {/* onChangeText={changeHandler} */}
      <TextInput 
        style={StyleSheet.input}
        placeholder="new todo"
        onChangeText={changeHandler}
      />
      {/* Input Text 1: call the submitHandlerProp, passing in the text */}
      <Button onPress={() => submitHandlerProp(getText)} title='button text here' color='coral'/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
})