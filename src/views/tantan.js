import React, { Component } from 'react';
import { View, ScrollView, Image, } from 'react-native';
import { Text, Button, Icon, Card } from 'react-native-elements';
import Swiper from 'react-native-swiper-animated';

const list = [
    {
        name: '草莓味的小可爱',
        age: 18,
        constellation: '巨蟹座',
        location: '成都',
        distance: 7,
        image: require('../images/women/1.jpg'),
    },
    {
        name: '凉凉',
        age: 19,
        constellation: '天秤座',
        location: '乐山',
        distance: 120,
        image: require('../images/women/2.jpg'),
    },
    {
        name: 'mua~',
        age: 16,
        constellation: '天蝎座',
        location: '眉山',
        distance: 80,
        image: require('../images/women/3.jpg'),
    },
    {
        name: '你玩探探你女朋友知道吗',
        age: 20,
        constellation: '狮子座',
        location: '龙泉驿',
        distance: 24,
        image: require('../images/women/4.jpg'),
    },
    {
        name: '吻得太逼真',
        age: 17,
        constellation: '处女座',
        location: '大邑',
        distance: 45,
        image: require('../images/women/5.jpg'),
    },
]

class Tantan_view extends Component {
    render() {
        return (
            <Swiper
                stack
                stackDepth={3}
                showPagination={false}
            >
                {list.map((l, i) => (
                    <Card key={i}
                        containerStyle={styles.cardContainer}
                        image={l.image}
                        imageStyle={{ height: 330 }} >
                        <View>
                            <Text style={styles.name}>{l.name}</Text>
                            <View style={styles.view1}>
                                <View horizontal={true}
                                    style={styles.view2}>
                                    <Icon name='gender-female' type='material-community' color='white' size={15} />
                                    <Text style={styles.age}>{l.age}</Text>
                                </View>
                                <Text>  </Text>
                                <View style={styles.view3}>
                                    <Text style={styles.constellation}>{l.constellation}</Text>
                                </View>
                            </View>
                            <Text style={{ color: '#BEBEBE', fontSize: 11, }}>
                                {l.location}({l.distance}km)
                            </Text>
                        </View>
                    </Card>
                ))}
            </Swiper>
        );
    }
}


const styles = {
    cardContainer: {
        height: 420,
        borderRadius: 12
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: '400'
    },
    age: {
        color: 'white',
        fontSize: 12
    },
    constellation: {
        color: 'white',
        fontSize: 10
    },
    view1: {
        paddingTop: 7,
        paddingBottom: 7,
        flexDirection: 'row',
    },
    view2: {
        height: 15,
        width: 32,
        backgroundColor: 'pink',
        borderRadius: 4,
        flexDirection: 'row',
    },
    view3: {
        height: 15,
        width: 32,
        backgroundColor: 'green',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
}


export default Tantan_view;