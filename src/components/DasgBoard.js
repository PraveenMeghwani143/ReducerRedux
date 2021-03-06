import AsyncStorage from '@react-native-community/async-storage';
import React, { Component, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';


const DasgBoard = () => {
  useEffect(() => {
    valueGet()
  }, [])
  const valueGet = async () => {
    const p = await AsyncStorage.getItem('praveen')
    setTimeout(() => {
      console.log('p', p)
    }, 500);
  }
  
  return (
    <View>
      <Text style={{ alignSelf: 'center', marginTop: 100 }}>DasgBoard</Text>
      <CardStack  style={styles.content} ref={swiper => { swiper = swiper }}>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>A</Text></Card>
        <Card style={[styles.card, styles.card2]} onSwipedLeft={() => alert('onSwipedLeft')}><Text style={styles.label}>B</Text></Card>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>C</Text></Card>
        <Card style={[styles.card, styles.card2]}><Text style={styles.label}>D</Text></Card>
        <Card style={[styles.card, styles.card1]}><Text style={styles.label}>E</Text></Card>
      </CardStack>

    </View>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:200
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
  },
  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  }
});
export default DasgBoard;