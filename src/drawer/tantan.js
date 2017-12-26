import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';


const HomeScreen = () => (
    <Button
        title="Go to 设置aaaa"
    />
);

const Tantan = StackNavigator({
    tantan: {
        screen: HomeScreen,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '探探',
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

});

export default Tantan;