import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, } from 'react-native';
import { Text, Button, Icon, SearchBar, List, ListItem } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Questions = [
    {
        title: '探探怎么玩？',
        answer: "A1"
    },
    {
        title: '怎样让更多人喜欢我，怎样得到更多配对？',
        answer: "A2"
    },
    {
        title: '我没有配对，或喜欢数长期不长？',
        answer: "A3"
    },
    {
        title: '聊不起来，或打招呼没人理！',
        answer: "A4"
    },
    {
        title: '刷不到人怎么办？只能看到异性吗？',
        answer: "A5"
    },
    {
        title: '手滑刷错了能反悔吗？',
        answer: "A6"
    },
    {
        title: '卡片上灰色和红色的图标是什么意思？',
        answer: "A7"
    },
    {
        title: '怎么改资料？',
        answer: "A8"
    },


]

class Guidance extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View style={{ flex: 1, }}>
                    <Image
                        source={require('../images/man.jpg')}
                        style={{
                            resizeMode: 'cover',
                            width: SCREEN_WIDTH,
                            height: 200,
                            borderWidth: 1
                        }}
                    />
                    <List
                        containerStyle={{
                            marginTop: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            backgroundColor: 'white'
                        }}
                    >
                        {
                            Questions.map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={l.title}
                                    containerStyle={{
                                        borderTopWidth: 0,
                                        borderBottomWidth: 0.2,
                                        borderBottomColor: '#cbd2d9',
                                        marginLeft: 10,
                                        height: 75
                                    }}
                                    titleStyle={{
                                        fontSize: 15,
                                        fontWeight: '300'
                                    }}
                                    onPress={() => navigation.navigate(l.answer)}

                                />
                            ))
                        }
                    </List>
                </View>
            </ScrollView>
        )
    }
}

export default Guidance;