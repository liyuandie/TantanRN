import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, } from 'react-native';
import { Text, Button, Icon, SearchBar, List, ListItem } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Contacts = [
    {
        name: '刘诗睿',
        id: 1,
        isLike: true
    },
    {
        name: '严杰',
        id: 2,
        isLike: true
    },
    {
        name: '李雪强',
        id: 3,
        isLike: false
    },
    {
        name: '何国贵',
        id: 4,
        isLike: false
    },
    {
        name: '周磊',
        id: 5,
        isLike: false
    },
    {
        name: '梁昕韬',
        id: 6,
        isLike: false
    },
    {
        name: '袁鹏',
        id: 7,
        isLike: false
    },
    {
        name: '唐乙',
        id: 8,
        isLike: false
    },
]


class AnlianView extends Component {
    constructor(props) {
        super(props);
        const contacts = Contacts;
        this.state = {
            friends: Contacts,
        };
    }

    LikeSomeone = (id) => {
        for (let person of Contacts) {
            if (person.id === id) {
                person.isLike = true;
            }
        }
        this.setState({
            friends: Contacts
        });
    }

    render() {
        const like = this.state.friends.filter((p) => p.isLike);
        const dislike = this.state.friends.filter((p) => !p.isLike);
        const likeCount = like.length;
        return (
            <ScrollView>
                <View>
                    <View style={{ flex: 1, }}>
                        <SearchBar
                            round
                            placeholder='搜索'
                            lightTheme
                        />
                        <Image
                            source={require('../images/heart.jpg')}
                            style={{
                                resizeMode: 'contain',
                                width: SCREEN_WIDTH,
                                height: 300,
                                borderWidth: 1
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        paddingTop: 20,
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        borderTopColor: '#cbd2d9'
                    }}>
                        <Text style={{ color: '#BB3D00', paddingLeft: 10 }}>已选择的暗恋 ({likeCount})</Text>
                        <List
                            containerStyle={{
                                marginTop: 30,
                                borderTopWidth: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#cbd2d9'
                            }}
                        >
                            {
                                like.map((l, i) => (
                                    <ListItem
                                        leftIcon={{ name: "heart", type: "entypo", color: 'red' }}
                                        key={i}
                                        title={l.name}
                                        hideChevron='true'
                                        containerStyle={{
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0,
                                            marginBottom: 20,
                                            marginTop:0,
                                            marginLeft:10
                                        }}
                                        titleStyle={{
                                            fontSize:15,
                                        }}
                                        titleContainerStyle={{
                                            paddingLeft:10
                                        }}
                                    />
                                ))
                            }
                        </List>
                    </View>
                    <View style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}>
                        <Text style={{ paddingLeft: 10 }}>手机通讯录联系人</Text>
                        <List
                        containerStyle={{
                                marginTop: 30,
                                borderTopWidth: 0,
                                borderBottomWidth: 1,
                                borderBottomColor: '#cbd2d9'
                            }}
                        >
                            {
                                dislike.map((l, i) => (
                                    <ListItem
                                        leftIcon={{ name: "heart", type: "entypo" }}
                                        key={i}
                                        title={l.name}
                                        hideChevron='true'
                                        containerStyle={{
                                            borderTopWidth: 0,
                                            borderBottomWidth: 0,
                                            marginBottom: 20,
                                            marginTop:0,
                                            marginLeft:10,
                                        }}
                                        titleStyle={{
                                            fontSize:15,
                                        }}
                                        titleContainerStyle={{
                                            paddingLeft:10
                                        }}
                                        
                                    />
                                ))
                            }
                        </List>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

export default AnlianView;