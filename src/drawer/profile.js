import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Profile from '../views/profile.js';
import Profile_setting from '../views/profile_setting'


const ProfileScreen = StackNavigator({
    profile: {
        screen: Profile,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '个人资料',
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
            headerRight: (
                <Icon
                    name="pencil"
                    size={25}
                    type="material-community"
                    iconStyle={{ paddingRight: 10 }}
                    onPress={() => navigation.navigate('profile_setting')}
                    color="white"
                />
            ),
        }),
    },
    profile_setting: {
        screen: Profile_setting,
        path: '/profile/profile_setting',
        navigationOptions: ({ navigation }) => ({
            title: '编辑个人资料',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 50,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('profile')}
                    color="white"
                />
            ),
        }),
    },
});
export default ProfileScreen;