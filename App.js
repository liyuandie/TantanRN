import React from 'react';
import { View, Text, Platform, Image } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { Button, Icon, Avatar } from 'react-native-elements';
import TantanScreen from './src/drawer/tantan.js';
import AnlianScreen from './src/drawer/anlian.js';
import SettingScreen from './src/drawer/setting.js';
import GuidanceScreen from './src/drawer/guidance.js';
import ShareScreen from './src/drawer/share.js';
import ProfileScreen from './src/views/profile.js';

const MainNavigator = DrawerNavigator({
  头像: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: '好啊那你抱紧啊',
      drawerIcon:
      <Avatar
        medium
        rounded
        source={require('./src/images/timg.jpg')}
      
      />
    }
  },
  探探: {
    screen: TantanScreen,
    navigationOptions: {
      drawerLabel: '探探',
      drawerIcon:
      <Icon
        name="users"
        color='white'
        size={20}
        type='feather'
        style={{
          width: 45,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    }
  },
  匿名暗恋表白: {
    screen: AnlianScreen,
    navigationOptions: {
      drawerLabel: '匿名暗恋表白',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="email-open"
          color='white'
          size={20}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          type="material-community"

        />
      ),
    }
  },
  设置: {
    screen: SettingScreen,
    navigationOptions: {
      drawerLabel: '设置',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name="settings"
          color='white'
          size={20}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          type="feather"

        />
      ),
    }
  },
  新手引导: {
    screen: GuidanceScreen,
    navigationOptions: {
      drawerLabel: '新手引导',
      drawerIcon:
      <Icon
        name="question-circle"
        color='white'
        size={20}
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        type="font-awesome"

      />
    }
  },
  推荐给好友: {
    screen: ShareScreen,
    navigationOptions: {
      drawerLabel: '推荐给好友',
      drawerIcon:
      <Icon
        name="share-alternative"
        color='white'
        size={20}
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        type="entypo"
      />
    }
  },

},
  {
    drawerBackgroundColor: 'black',
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#ffffff',
      labelStyle: {
        fontSize: 15,
        marginLeft: 5,
      },

    }
  },
);



export default MainNavigator;