import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
import shareView from '../views/Share.js'

const ShareScreen = StackNavigator({
    share: {
        screen: shareView,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '推荐给好友',
            headerStyle: {
                backgroundColor: '#BB3D00'
            },
            headerTitleStyle: {
                color: 'white',
                paddingLeft: 67,
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
})

export default ShareScreen;