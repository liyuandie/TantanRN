import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import AnlianView from '../views/anlian';

const Anlian = ({ navigation }) => (
    <AnlianView navigation={navigation} />
  );

const AnlianScreen = StackNavigator({
    Buttons: {
        screen: Anlian,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '匿名暗恋表白',
            headerStyle:{
                backgroundColor:'#BB3D00'
            },
            headerTitleStyle:{
                color:'white',
                paddingLeft: 50,
                fontWeight:'normal',
                fontSize:20
            },
            headerLeft: (
                <Icon
                    name="menu"
                    size={30}
                    type="entypo"
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}
                    color="white"
                />
            ),
        }),
    },

});

export default AnlianScreen;