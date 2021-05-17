import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Header from './components/header'

export default function App() {

  const [todos, setTodos ] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'drink coffee', key: '2' },
    { text: 'buy more coffee', key: '3' },
  ])

  return (
    <View style={StyleSheet.container}>
      <Header></Header>
      <View style={styles.content}>  
      stopped:
      https://www.youtube.com/watch?v=SGEitne8N-Q&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=10
        <View style={styles.list}>
          {/* FlatList automatically uses the key */}
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
            )}
          />
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