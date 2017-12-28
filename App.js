import React from 'react';
import { View, Text, Platform, Dimensions, Image } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';
import { Button, Icon, Avatar } from 'react-native-elements';
import TantanScreen from './src/drawer/Tantan.js';
import AnlianScreen from './src/drawer/Anlian.js';
import SettingScreen from './src/drawer/Setting.js';
import GuidanceScreen from './src/drawer/Guidance.js';
import ShareScreen from './src/drawer/Share.js';
import ProfileScreen from './src/drawer/Profile.js';


const SCREEN_WIDTH = Dimensions.get('window').width;

const ProfileDrawerItem = props => (
  <View style={{ flex: 1, }}>
    <View
      style={{
        marginTop: 20,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Avatar
        large
        rounded
        source={require('./src/images/eason.png')}
      />
      <Text style={{ color: 'white', lineHeight: 40, fontSize: 20, }}>好啊那你抱紧啊</Text>
      <Text style={{ color: 'white', lineHeight: 20, fontSize: 15, }}>点击查看/编辑</Text>
    </View>
  </View>
);


const MainNavigator = DrawerNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      drawerLabel: ProfileDrawerItem,
    }
  },
  Tantan: {
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
  Anlian: {
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
  Setting: {
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
  Guidence: {
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
  Share: {
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
    initialRouteName: 'Tantan',
    drawerWidth: SCREEN_WIDTH * 0.83,
    contentOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#ffffff',
      itemStyle: {
        marginTop: 15,
        paddingLeft:15,
      },
      labelStyle: {
        fontSize: 18,
        marginLeft: 5,
        fontWeight: 'normal',
      },
    },
  },
);






export default MainNavigator;