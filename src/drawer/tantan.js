import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';


const HomeScreen = () => (
    <Button
        title="Go to 设置"
    />
);

const Tantan = StackNavigator({
    Buttons: {
        screen: HomeScreen,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '探探',
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

export default Tantan;