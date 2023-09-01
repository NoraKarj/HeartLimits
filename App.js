import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const[age,setAge] = useState(0)
  const[lowerHR,setLowerHR] = useState(0)
  const[upperHR,setUpperHR] = useState(0)

  const calculate = (age) => {
    setAge(age)
    setLowerHR((220 - age) * 0.65)
    setUpperHR((220 - age) * 0.85)
  }

  return (
    <View style={styles.container}>
      <Text>Age:</Text>
      <TextInput 
      placeholder='Enter your age'
      keyboardType='decimal-pad'
      value = {age}
      onChangeText={text => setAge(text)}
      />
      <Text>Hr limits:</Text>
      <Text>{lowerHR.toFixed(0)}-{upperHR.toFixed(0)}</Text>
      <Button title='Show hr limits' onPress={calculate}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 10,
    marginRight:10,

  },
  field: {
    marginBottom:10,

  }
});