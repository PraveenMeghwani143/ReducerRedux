import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';

const Setting = ({navigation}) =>


{
    const navigations = () =>{
        navigation.navigate('Home')
       }
  return(
<View>
    <Text style = {{alignSelf:'center', marginTop : 100}}>Setting</Text>
    <TouchableOpacity
    onPress={navigations}
    >
     <Text>HOME</Text>

    </TouchableOpacity>
    </View>
  )


}
export default Setting;