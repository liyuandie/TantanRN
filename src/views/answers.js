import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, } from 'react-native';
import { Text, Card } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;


export class A1 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 15 }}>
                    <Text style={{ color: '#BB3D00', fontSize: 30, }}>探探怎么玩？</Text>
                </View>
                <View>
                    <Card
                        title="喜欢向右！"
                        containerStyle={{
                            backgroundColor: '#fffafa'
                        }}
                        titleStyle={{
                            fontSize: 20
                        }}
                    >
                        <Image
                            source={require('../images/like.jpg')}
                            style={{
                                resizeMode: 'contain',
                                width: SCREEN_WIDTH * 0.82,
                                height: 250,
                            }}
                        />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 15 }}>
                        <Text style={{ fontSize: 18 }}>喜欢Ta可以点赞或向右滑动照片。</Text>
                        <Text style={{ fontSize: 18 }}>右滑或赞都是匿名的，对方也赞你时才能彼此看到。</Text>
                    </View >
                </View>
                <View>
                    <Card
                        title="无感向左！"
                        containerStyle={{
                            backgroundColor: '#fffafa'
                        }}
                        titleStyle={{
                            fontSize: 20
                        }}
                    >
                        <Image
                            source={require('../images/dislike.jpg')}
                            style={{
                                resizeMode: 'contain',
                                width: SCREEN_WIDTH * 0.82,
                                height: 250,
                            }}
                        />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 15 }}>
                        <Text style={{ fontSize: 18 }}>对Ta无感可以点叉或向左滑动照片跳过。</Text>
                        <Text style={{ fontSize: 18 }}>左滑和跳过也都是匿名的，跳过不能反悔，请慎重操作。</Text>
                    </View >
                </View>
                <View>
                    <Card
                        title="相互喜欢配对成功！"
                        containerStyle={{
                            backgroundColor: '#fffafa'
                        }}
                        titleStyle={{
                            fontSize: 20
                        }}
                    >
                        <Image
                            source={require('../images/match.jpg')}
                            style={{
                                resizeMode: 'contain',
                                width: SCREEN_WIDTH * 0.82,
                                height: 200,
                            }}
                        />
                    </Card>
                    <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 15 }}>
                        <Text style={{ fontSize: 18 }}>双方互赞表明你们喜欢彼此，即可配对，开始聊天。</Text>
                        <Text style={{ fontSize: 18 }}>配对后，男生请绅士的多向女生打招呼。</Text>
                        <Text style={{ fontSize: 18 }}>男生配对后更多的和对方展开聊天会增加推荐机会。</Text>
                    </View >
                </View>
            </ScrollView>
        )
    }
}

export class A2 extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 15 }}>
                    <Text style={{ color: '#BB3D00', fontSize: 30, }}>怎样让更多人喜欢我，怎样得到更多匹配？</Text>
                </View>
                <View style={{ marginTop: 20, marginBottom: 20, marginLeft: 15 }}>
                    <Text style={{ color: 'black', fontSize: 40, }}>长得好看！！！！</Text>
                    <Text style={{ color: 'black', fontSize: 40, }}>不然你以为呢？？？</Text>
                </View >

            </ScrollView>
        )
    }
}

export class A3 extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/1.jpg')}
                    style={{
                        resizeMode: 'contain',
                        width: SCREEN_WIDTH,
                        height: 562,
                    }}
                />
            </View >
        )
    }
}

export class A4 extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/4.jpg')}
                    style={{
                        resizeMode: 'contain',
                        width: SCREEN_WIDTH,
                        height: 562,
                    }}
                />
            </View >
        )
    }
}

export class A5 extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/5.jpg')}
                    style={{
                        resizeMode: 'contain',
                        width: SCREEN_WIDTH,
                        height: 562,
                    }}
                />
            </View >
        )
    }
}

export class A6 extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/6.jpg')}
                    style={{
                        resizeMode: 'contain',
                        width: SCREEN_WIDTH,
                        height: 562,
                    }}
                />
            </View >
        )
    }
}

export class A7 extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/7.jpg')}
                    style={{
                        resizeMode: 'contain',
                        width: SCREEN_WIDTH,
                        height: 562,
                    }}
                />
            </View >
        )
    }
}

export class A8 extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/8.jpg')}
                    style={{
                        resizeMode: 'contain',
                        width: SCREEN_WIDTH,
                        height: 562,
                    }}
                />
            </View >
        )
    }
}

