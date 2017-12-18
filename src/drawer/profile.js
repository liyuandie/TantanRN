import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


const Profile = () => (
    <Text>your profiles</Text>
)
const ProfileScreen = StackNavigator({
    Buttons: {
        screen: Profile,
        path: '/',
        navigationOptions: ({ navigation }) => ({
            title: '个人资料',
            headerStyle:{
                backgroundColor:'#BB3D00'
            },
            headerTitleStyle:{
                color:'white',
                paddingLeft: 75
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
export default ProfileScreen;