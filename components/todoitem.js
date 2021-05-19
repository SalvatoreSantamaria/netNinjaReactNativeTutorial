import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

//1: Accessing Props Version 1
// export default function TodoItem(props) {
//   props.item 
// }

//Using destructuring to pull the prop "item" we need directly
//3: Passing a function thru as a prop. Receive and destructure the pressHandler function prop
export default function TodoItem({ item, pressHandler }) {
  //3: Passing a function thru as a prop. Call the pressHandler function with the item.key
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16, 
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  }
})
