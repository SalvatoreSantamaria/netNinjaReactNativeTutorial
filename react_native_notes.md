

## Basics

Need to import components like text, view, stylesheet in order to use them

```
import { StyleSheet, Text, View } from 'react-native';
```

Then these components can be used:  
• `View` is like a `div`  
• Use `Text` whenever you have output text  
• Add the `style=` prop to the component to style. Sortof like a `class=`  
• Use camelCase for the stylesheet instead of hyphens in CSS. Styles are also not automatically inherited unless it's a child `<Text>` inside of a `<Text>`. 
```
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! :)></Text>
      <StatusBar style="auto" />
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
});

```
## Flexbox basics
`<View>` uses flexbox. You can add flex property to the style to increase size.
Use a  `flex` property to make it stretch all the way down.  
Everything inside a flex container becomes a flex item automatically.   
```
<View style={styles.container}>
  <Text style={styles.boxOne}>flex item one</Text>
  <Text style={styles.boxTwo}>flex item two</Text>
  <Text style={styles.boxThree}>flex item three</Text>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1, //make it stretch full available space - flex items will inheirit
    flexDirection: 'column', //default, can change to `row`
    justifyContent: 'flex-start', //how the elements should be spread out. flex start is default, but there is flex end, center, space between...
    alignItems: 'flex-end', //cross axis alignment settings. flex-start, flex-end, center... 
  }, 
  boxOne: {
    flex: 2, //get two of the section 'pie'
  }, 
  boxTwo: {
    flex: 1, //get one of the section 'pie'
  }
})
```
---

## State and Use State Hook
https://www.youtube.com/watch?v=1FiIYaRr148&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=4  
Output dynamic content with State.  
1 Import first with `import React, { useState } from 'react';`  
2 Wireup the useState hook with the `state` and `function`  
3 Output to page with `{state}`  
4 Set a clickHandler function that calls the useState() function  
5 Add the clickHandler function to a button on the page  

```
import React, { useState } from 'react';  //State 1: Import the useState hook

export default function App() {
  //Using State: pass in inital value of 'kuma' to the useState() hook
  const [stateIsCalledName, functionToUpdateState] = useState('kuma')//State 2: Wire up to useState
  const clickHandler = () => {// State 4: clickHandler function that calls functionToUPdateSate
    functionToUpdateState('this text will update name')
  }


  return (
    <View>
      <View>
        <Text>First Example</Text>
        <Text>My name is {stateIsCalledName}</Text> {/* State 3: Output*/}
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <View style={styles.buttonContainer}>
         <Button title='update state' onPress={clickHandler} />
      </View>
    </View>
  );
}
```
---

## Text Input
https://www.youtube.com/watch?v=c9Sg9jDitm8&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=5  
See https://reactnative.dev/docs/textinput 
_Remember you need to import useState hook_

```
const [stateName, setName] = useState('Kuma') //Text input 1: Set state and declare function
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
```
---

## Outputting State with Lists and ScrollView
https://www.youtube.com/watch?v=W-pg1r6-T0g&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=6
```
  // We need a key property, so React can keep track of the elements. 
  const [statePeople, setPeopleFunction] = useState([ //Lists 1: Set state to an array and declare function
    { name: 'Kuma', key: '1' },
    { name: 'Mona', key: '2' },
    { name: 'Raven', key: '3' },
    { name: 'Test', key: '4' },
    { name: 'Test', key: '5' },
    { name: 'Test', key: '6' },
    { name: 'Test', key: '7' },
  ])

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
```
---


## Routing  
https://www.youtube.com/watch?v=OmQCU-3KPms  

Using reactnavigation.org (same as theseus)
Stack navigation works by adding and removing screens to a 'stack'
There is also drawer navigation

