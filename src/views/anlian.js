import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, } from 'react-native';
import { Text, Button, Icon, SearchBar, List, ListItem } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const contacts = [
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
        this.state = {
            friends: contacts,
        };
    }

    likeSomeone = (id) => {
        for (let person of contacts) {
            if (person.id === id) {
                person.isLike = true;
            }
        }
        this.setState({
            friends: contacts
        });
    }

    render() {
        const like = this.state.friends.filter((p) => p.isLike);
        const dislike = this.state.friends.filter((p) => !p.isLike);
        const likeCount = like.length;
        return (
            <ScrollView>
                <View style={{ flex: 1, }}>
                    <SearchBar round placeholder='搜索' lightTheme />
                    <Image
                        source={require('../images/heart.jpg')}
                        style={styles.image}
                    />
                </View>
                <View style={styles.view1}>
                    <Text style={styles.text1}>已选择的暗恋 ({likeCount})</Text>
                    <List containerStyle={styles.list_container}>
                        {
                            like.map((l, i) => (
                                <ListItem
                                    leftIcon={{ name: "heart", type: "entypo", color: 'red' }}
                                    key={i}
                                    title={l.name}
                                    hideChevron={true}
                                    containerStyle={styles.ListItem_container}
                                    titleStyle={{ fontSize: 15, }}
                                    titleContainerStyle={{ paddingLeft: 10 }}
                                />
                            ))
                        }
                    </List>
                    <View style={styles.view2}>
                        <Text style={{ paddingLeft: 10 }}>手机通讯录联系人</Text>
                        <List containerStyle={styles.list_container}>
                            {
                                dislike.map((l, i) => (
                                    <ListItem
                                        leftIcon={{ name: "heart", type: "entypo" }}
                                        key={i}
                                        title={l.name}
                                        hideChevron={true}
                                        containerStyle={styles.ListItem_container}
                                        titleStyle={{ fontSize: 15, }}
                                        titleContainerStyle={{ paddingLeft: 10 }}
                                        onPress={()=>this.likeSomeone(l.id)}
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

const styles = {
    image: {
        resizeMode: 'contain',
        width: SCREEN_WIDTH,
        height: 300,
        borderWidth: 1
    },

    view1: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#cbd2d9'
    },

    view2: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'white'
    },

    text1: {
        color: '#BB3D00',
        paddingLeft: 10
    },

    list_container: {
        marginTop: 30,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#cbd2d9'
    },

    ListItem_container: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginBottom: 20,
        marginTop: 0,
        marginLeft: 10,
    }
}

export default AnlianView;