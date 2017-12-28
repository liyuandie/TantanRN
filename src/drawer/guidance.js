import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Guidance from '../views/Guidance.js'
import { A1, A2, A3, A4, A5, A6, A7, A8 } from '../views/answers.js'

const GuidanceView = ({ navigation }) => (
    <Guidance navigation={navigation} />
);



const GuidanceScreen = StackNavigator({
    Guidance: {
        screen: GuidanceView,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="menu"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('DrawerOpen')}
                    color="white"
                />
            ),
        }),
    },
    A1: {
        screen: A1,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A2: {
        screen: A2,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A3: {
        screen: A3,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A4: {
        screen: A4,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A5: {
        screen: A5,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A6: {
        screen: A6,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStylee={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A7: {
        screen: A7,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    iconStyle="entypo"
                    style={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },
    A8: {
        screen: A8,
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 75,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Guidance')}
                    color="white"
                />
            ),
        })
    },

});

export default GuidanceScreen;