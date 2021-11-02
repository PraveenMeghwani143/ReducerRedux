import React, { Component ,useState , useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const Home = ({ navigation }) => {
  const[email , setemail] = useState('')
  const[password , setpassword] = useState('')

  // useEffect(()=>{
  //   setemail('praveenmeghwani@gmail.com')
  // },[])
  const navigations = () => {
    if(email == '')
    {
      Alert.alert('enter email')
    }
    else if(password == '') {
     Alert.alert('Please Enter Password')
    }
    else{
      // AsyncStorage.setItem('praveen', 10)

      navigation.navigate('DasgBoard')

    }
  }
  return (
    <View>
      <Text style={{ alignSelf: 'center', marginTop: 100 }}>Home</Text>
      <TouchableOpacity
        onPress={navigations}
      >
        <Text>button</Text>

      </TouchableOpacity>

      <TextInput
        style={{ borderWidth: 1, width: '50%', height: '10%', alignSelf: 'center',padding:1 }}
        placeholder='email'
        placeholderTextColor='#000'
        onChangeText = {(email)=>setemail(email)}


      />

      <TextInput
        style={{ borderWidth: 1, width: '50%', height: '10%', alignSelf: 'center',marginTop:15, padding:1}}
        placeholder='password'
        placeholderTextColor='#000'
        onChangeText={(password)=>setpassword(password)}
        secureTextEntry={true}


      />
    </View>
  )


}
export default Home;