import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native';
const profileDetail = [{
    name: 'praveen',
    age: 24,
    email: 'praveen@gmail.com',
    gender: 'Male'
}]
const profile = ({ navigation }) => {
    const navigations = () => {
        navigation.navigate('DasgBoard')
    }
    return (
        <View>
            <Text style={{ alignSelf: 'center', marginTop: 100 }}>Profile</Text>
            <FlatList
            style={{backgroundColor:'red'}}
                data={profileDetail}
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.age}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.gender}</Text>
                    </View>


                }
                ItemSeparatorComponent={this.renderSeparator}
            />
        </View>
    )


}
export default profile;