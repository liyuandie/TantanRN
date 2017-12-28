import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Setting_home from '../views/Setting_home.js'
import { Info, Authority, Message, Data, Safe } from '../views/Setting_details.js'


const settingView = ({ navigation }) => (
    <Setting_home navigation={navigation} />
);



const SettingScreen = StackNavigator({
    Setting: {
        screen: settingView,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '设置',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 90,
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
    Info: {
        screen: Info,
        path: '/setting/info',
        navigationOptions: ({ navigation }) => ({
            title: '个人信息',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 90,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Setting')}
                    color="white"
                />
            ),
        }),
    },
    authority: {
        screen: Authority,
        path: '/setting/authority',
        navigationOptions: ({ navigation }) => ({
            title: '隐私与权限',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 90,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Setting')}
                    color="white"
                />
            ),
        }),
    },
    message: {
        screen: Message,
        path: '/setting/message',
        navigationOptions: ({ navigation }) => ({
            title: '消息提醒与聊天',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 90,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Setting')}
                    color="white"
                />
            ),
        }),
    },
    data: {
        screen: Data,
        path: '/setting/data',
        navigationOptions: ({ navigation }) => ({
            title: '数据和缓存',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 90,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Setting')}
                    color="white"
                />
            ),
        }),
    },
    safe: {
        screen: Safe,
        path: '/setting/safe',
        navigationOptions: ({ navigation }) => ({
            title: '账号与安全',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 90,
                fontWeight: 'normal',
                fontSize: 20
            },
            headerLeft: (
                <Icon
                    name="chevron-left"
                    size={30}
                    type="entypo"
                    iconStyle={{ paddingLeft: 10 }}
                    onPress={() => navigation.navigate('Setting')}
                    color="white"
                />
            ),
        }),
    },
});

export default SettingScreen;