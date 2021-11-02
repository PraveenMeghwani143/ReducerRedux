import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as pageActions from './src/actions/pageList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from './src/components/Setting'

import Home from './src/components/Home'
import DasgBoard from './src/components/DasgBoard'
import profile from './src/components/profile'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class App extends Component {


  incrementCount() {
    let { actions } = this.props;
    actions.getPageList();
  }
  MyTabs() {
    return (
      <Tab.Navigator>
        {/* <Tab.Screen name="Home" component={Home} /> */}
        <Tab.Screen name="DasgBoard" component={DasgBoard} />
        <Tab.Screen name="Setting" component={Setting} />
        <Tab.Screen name="profile" component={profile} />



      </Tab.Navigator>
    );
  }
  render() {
    const { pageList } = this.props;
    console.log(pageList);
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="tabs">
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          {/* <Stack.Screen name="DasgBoard" component={DasgBoard} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} />

          <Stack.Screen name="tabs" component={this.MyTabs} options={{ headerShown: false }} />


        </Stack.Navigator>


      </NavigationContainer>



    );

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  pageList: state.pageList.pageList,
});

const ActionCreators = Object.assign(
  {},
  pageActions,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)