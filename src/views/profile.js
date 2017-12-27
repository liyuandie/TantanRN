import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import { Text, Button, Icon, List, ListItem } from 'react-native-elements';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window')

const list = [
    {
        title: '有没有一首歌，喜欢了很多年？',
        subtitle: '不来也不去(live)',
    },
    {
        title: '什么样的异性最让你心动？',
        subtitle: '得不到的都心动',
    },
    {
        title: '如果能拥有一种超能力，要什么？',
        subtitle: '超喜欢你',
    },
    {
        title: '如果女朋友生气了，怎么哄？',
        subtitle: '亲亲抱抱举高高',
    },
    {
        title: '如果有钱有时间，最想去做什么？',
        subtitle: '躺在世界上最大最软的沙发里，吃了就睡醒了又吃先过一年',
    },
]

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 7586,
        };
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Swiper style={styles.wrapper}
                    height={350}
                    loop={false}
                    dot={<View style={styles.dot} />}
                    activeDot={<View style={styles.activeDot} />}
                    paginationStyle={{
                        bottom: 10
                    }}
                >
                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.image} source={require('../images/profile/1.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.image} source={require('../images/profile/2.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.image} source={require('../images/profile/3.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.image} source={require('../images/profile/4.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.image} source={require('../images/profile/5.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image resizeMode='cover' style={styles.image} source={require('../images/profile/6.jpg')} />
                    </View>
                </Swiper>
                <View style={styles.view1}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '400', paddingLeft: 15 }}>好啊那你抱紧啊</Text>
                    <View style={{ paddingTop: 7, paddingBottom: 7, flexDirection: 'row', paddingLeft: 15 }}>
                        <View horizontal={true} style={styles.view2}>
                            <Icon name='gender-male' type='material-community' color='white' size={15} />
                            <Text style={{ color: 'white', fontSize: 12 }}>22</Text>
                        </View>
                        <Text>  </Text>
                        <View style={styles.view3}>
                            <Text style={{ color: 'white', fontSize: 10, }}>巨蟹座</Text>
                        </View>
                    </View>
                    <Text style={{ color: '#BEBEBE', fontSize: 11, paddingLeft: 15 }}>
                        成都(1m)，1分钟前活跃
                </Text>
                </View>
                <List containerStyle={styles.list1}>
                    <ListItem
                        title={`${this.state.like}人喜欢了你`}
                        subtitle='每天右滑越多，获得的喜欢数越多哦！'
                        rightTitle='炫耀一下'
                        hideChevron
                        leftIcon={{ name: 'heart', type: 'evilicon', color: '#BB3D00', }}
                        containerStyle={{
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            paddingLeft: 2,
                            height: 80
                        }}
                        titleStyle={{ fontSize: 14 }}
                        subtitleStyle={{ fontWeight: 'normal', color: '#BEBEBE' }}
                        rightTitleStyle={{ color: '#BB3D00', fontSize: 14 }}
                        titleContainerStyle={{ paddingLeft: 25, paddingTop: 5 }}
                        subtitleContainerStyle={{ paddingTop: 15, paddingLeft: 25 }}
                        rightTitleContainerStyle={{ justifyContent: 'flex-start', flex: 0, paddingTop: 5 }}
                    />
                </List>
                <View style={styles.view4}>
                    <Text style={{ color: '#BB3D00', fontSize: 14 }}>个人签名</Text>
                </View>
                <View style={styles.view5}>
                    <Icon
                        name='pencil-square-o'
                        type='font-awesome'
                        color='#d0d0d0'
                        size={20}
                        containerStyle={{ paddingLeft: 15, paddingRight: 33 }}
                    />
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 2 }}>剪影的你轮廓太好看，凝住眼泪才敢细看</Text>
                </View>
                <View style={styles.view4}>
                    <Text style={{ color: '#BB3D00', fontSize: 14 }}>我的信息</Text>
                </View>
                <View style={styles.view6}>
                    <Icon
                        name='computer'
                        color='#d0d0d0'
                        size={20}
                        containerStyle={{ paddingLeft: 15, paddingRight: 33 }}
                    />
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 2 }}>IT/互联网/通信</Text>
                </View>
                <View style={styles.view6}>
                    <Icon
                        name='home'
                        type='simple-line-icon'
                        color='#d0d0d0'
                        size={20}
                        containerStyle={{ paddingLeft: 15, paddingRight: 33 }}
                    />
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 2 }}>你胸大你先说</Text>
                </View>
                <View style={styles.view5}>
                    <Icon
                        name='location-pin'
                        type='simple-line-icon'
                        color='#d0d0d0'
                        size={20}
                        containerStyle={{ paddingLeft: 15, paddingRight: 33 }}
                    />
                    <Text style={{ fontSize: 15, color: 'black', paddingTop: 2 }}>你胸大你先说</Text>
                </View>
                <View style={styles.view4}>
                    <Text style={{ color: '#BB3D00', fontSize: 14 }}>我的标签</Text>
                </View>
                <View style={styles.view5}>
                    <Icon
                        name='pound-box'
                        type='material-community'
                        color='#003E3E'
                        size={26.5}
                        containerStyle={{ paddingLeft: 14, paddingRight: 33 }}
                    />
                    <Text style={styles.tag_text1}>宅</Text>
                    <Text style={styles.tag_text2}>Irving</Text>
                    <Text style={styles.tag_text3}>佛系青年</Text>
                </View>
                <View style={styles.view4}>
                    <Text style={{ color: '#BB3D00', fontSize: 14 }}>我的兴趣</Text>
                </View>
                <View style={styles.view6}>
                    <Icon
                        name='headphones-box'
                        type='material-community'
                        color='#000093'
                        size={27}
                        containerStyle={{ paddingLeft: 15, paddingRight: 33 }}
                    />

                    <Text style={styles.tag_text4}>陈二萌</Text>
                    <Text style={styles.tag_text4}>毛不易</Text>
                </View>
                <View style={styles.view5}>
                    <Icon
                        name='dribbble-box'
                        type='material-community'
                        color='#009100'
                        size={27}
                        containerStyle={{ paddingLeft: 15, paddingRight: 33 }}
                    />
                    <Text style={styles.tag_text5}>Basketball</Text>
                </View>
                <View style={styles.view4}>
                    <Text style={{ color: '#BB3D00', fontSize: 14 }}>我的问答</Text>
                </View>
                <List containerStyle={styles.list2} >
                    {list.map((l, i) => (
                        <ListItem
                            key={i}
                            title={l.title}
                            subtitle={l.subtitle}
                            hideChevron
                            containerStyle={{
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                paddingBottom: 20,
                                height: 60
                            }}
                            subtitleContainerStyle={{ paddingTop: 3 }}
                            titleStyle={{ fontSize: 15, }}
                            subtitleStyle={{ fontWeight: 'normal', fontSize: 14 }}
                        />
                    ))}
                </List>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        backgroundColor: 'white'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        width,
        flex: 1
    },
    activeDot: {
        backgroundColor: '#fff',
        width: 6,
        height: 6,
        borderRadius: 7,
        marginLeft: 3,
        marginRight: 3
    },
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 6,
        height: 6,
        borderRadius: 7,
        marginLeft: 3,
        marginRight: 3
    },
    view1: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    view2: {
        height: 15,
        width: 32,
        backgroundColor: '#46A3FF',
        borderRadius: 4,
        flexDirection: 'row',
    },
    view3: {
        height: 15,
        width: 32,
        backgroundColor: '#FFDC35',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    view4: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
    },
    view5: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 35,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    view6: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
    },
    tag_text1: {
        fontSize: 16,
        color: '#003E3E',
        paddingTop: 5,
        backgroundColor: '#9999CC',
        borderRadius: 5,
        width: 50,
        height: 30,
        textAlign: 'center',
        marginRight: 10
    },
    tag_text2: {
        fontSize: 16,
        color: '#003E3E',
        paddingTop: 5,
        backgroundColor: '#9999CC',
        borderRadius: 5,
        width: 60,
        height: 30,
        textAlign: 'center',
        marginRight: 10
    },
    tag_text3: {
        fontSize: 16,
        color: '#003E3E',
        paddingTop: 5,
        backgroundColor: '#9999CC',
        borderRadius: 5,
        width: 80,
        height: 30,
        textAlign: 'center',
        marginRight: 10
    },
    tag_text4: {
        fontSize: 16,
        color: '#000093',
        paddingTop: 5,
        backgroundColor: '#FFAF60',
        borderRadius: 5,
        width: 80,
        height: 30,
        textAlign: 'center',
        marginRight: 10
    },
    tag_text5: {
        fontSize: 16,
        color: '#009100',
        paddingTop: 5,
        backgroundColor: '#FFE153',
        borderRadius: 5,
        width: 80,
        height: 30,
        textAlign: 'center',
        marginRight: 10
    },
    list1: {
        marginTop: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        borderTopColor: '#E0E0E0',
    },
    list2: {
        marginTop: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        marginBottom: 150
    }
}

export default Profile;