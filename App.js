stopped: https://www.youtube.com/watch?v=LH_SoXiu_Hk&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=11

import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/header'
import TodoItem from './components/todoitem' //3: Accessing Props Version 2: Import the file

export default function App() {

  const [todos, setTodos ] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'drink coffee', key: '2' },
    { text: 'buy more coffee', key: '3' },
  ])

  //creating function 
  //1: Passing a function thru as a prop. Creating the function so it can get passed thru into another component. 
  //4: Passing a function thru as a prop. Receive the key from the function, and filter it out
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key) 
    })
  }

  return (
    <View style={StyleSheet.container}>
      <Header></Header>
      <View style={styles.content}>  
        <View style={styles.list}>
          {/* FlatList automatically uses the key */}
          {/* 2: Accessing Props Version 2- it's the same, but I am accessing using destructuring */}
          {/* 2: Passing a function thru as a prop */}
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}  /> 
            )}
          />

          {/* Accessing Props Version 1
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              // <Text>{item.text}</Text> // Can access item.text this way
              //<TodoItem item={item} /> //2: Accessing Props Version 1
              <TodoItem item={thisIsGettingPassedThru} /> 
            )}
          /> */}

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },

});