import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const Setting = () => (
    <Text>设置页面</Text>
);


const SettingScreen = StackNavigator({
    Buttons: {
        screen: Setting,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '设置',
            headerStyle:{
                backgroundColor:'#BB3D00'
            },
            headerTitleStyle:{
                color:'white',
                paddingLeft: 85,
                fontWeight:'normal',
                fontSize:23
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

export default SettingScreen;