import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

const Guidance = () => (
    <Text>新手指导页面</Text>
);


const GuidanceScreen = StackNavigator({
    Buttons: {
        screen: Guidance,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '新手引导',
            headerStyle:{
                backgroundColor:'#BB3D00'
            },
            headerTitleStyle:{
                color:'white',
                paddingLeft: 75,
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

export default GuidanceScreen;