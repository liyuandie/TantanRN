import React, { Component } from 'react';
import { View, ScrollView, Image, Modal, TouchableOpacity } from 'react-native';
import { Text, Button, Icon, List, ListItem, Slider, CheckBox } from 'react-native-elements';

const list = [
    {
        title: '个人信息',
        subtitle: '编辑姓名等',
        detail: 'Info',
        icon: <Icon
            name="user-circle"
            size={22}
            color='blue'
            type='font-awesome'
            containerStyle={{ paddingRight: 25 }}
        />
    },
    {
        title: '隐私与权限',
        subtitle: '联系人，我的相册，朋友圈',
        detail: 'authority',
        icon: <Icon
            name="key"
            size={22}
            color='orange'
            type='font-awesome'
            containerStyle={{ paddingRight: 25 }}
        />

    },
    {
        title: '消息提醒与聊天',
        subtitle: '通知，聊天设置',
        detail: 'message',
        icon: <Icon
            name="chat"
            size={23}
            color='green'
            containerStyle={{ paddingRight: 24 }}
        />
    },
    {
        title: '数据和缓存',
        subtitle: '数据和缓存设置',
        detail: 'data',
        icon: <Icon
            name="settings-box"
            size={25}
            color='pink'
            type='material-community'
            containerStyle={{ paddingRight: 23 }}
        />
    },
    {
        title: '帐号与安全',
        subtitle: '修改手机号和密码',
        detail: 'safe',
        icon: <Icon
            name="lock"
            size={26}
            color='purple'
            containerStyle={{ paddingRight: 23 }}
        />
    },
]

const list2 = [
    {
        title: '男生'
    },
    {
        title: '女生'
    },
    {
        title: '不限'
    },
]

class Setting_home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            range: 45,
            minAge: 16,
            maxAge: 18,
            sexuality: '女生',
            visible: false,
        };
    }
    render() {
        const { navigation } = this.props;
        const range = this.state.range;
        const sexuality = this.state.sexuality;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.view1}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>向我显示</Text>
                    </View>
                    <List containerStyle={styles.listContainer} >
                        <ListItem
                            title='范围'
                            titleStyle={{ fontSize: 15, }}
                            containerStyle={{ borderBottomWidth: 0, paddingBottom: 25 }}
                            hideChevron={true}
                            rightTitle={`${range}km`}
                            rightTitleStyle={{ color: '#BB3D00' }} />
                        <ScrollView horizontal={true} style={{ flex: 1, paddingBottom: 30 }}>
                            <Icon name="bicycle" size={17} color='grey' type='font-awesome' containerStyle={{ paddingLeft: 20, paddingRight: 25 }} />
                            <Slider
                                maximumValue={100}
                                minimumValue={0}
                                value={this.state.range}
                                onValueChange={(value) => this.setState({ range: value })}
                                step={1}
                                minimumTrackTintColor='#D94600'
                                style={{ width: 225 }}
                                trackStyle={{ height: 3.5, }}
                                thumbTintColor='#D94600'
                            />
                            <Icon name="plane" size={17} color='grey' type='simple-line-icon' containerStyle={{ paddingLeft: 25, }} />
                        </ScrollView>
                        <ListItem
                            title='显示性别'
                            titleStyle={{ fontSize: 15, }}
                            containerStyle={{ borderBottomWidth: 0, paddingBottom: 30 }}
                            hideChevron={true}
                            rightTitle={`${sexuality}`}
                            rightTitleStyle={{ color: '#BB3D00' }}
                            onPress={() => this.setState({ visible: true })} />
                        <ListItem
                            title='年龄'
                            titleStyle={{ fontSize: 15, }}
                            containerStyle={{ borderBottomWidth: 0, paddingBottom: 25 }}
                            hideChevron={true}
                            rightTitle={`${this.state.minAge} - ${this.state.maxAge}`}
                            rightTitleStyle={{ color: '#BB3D00' }} />
                        <ScrollView horizontal={true} style={{ flex: 1, paddingBottom: 25 }}>
                            <Icon name="graduation-cap" size={17} color='grey' type='entypo' containerStyle={{ paddingLeft: 20, paddingRight: 25 }} />
                            <Slider
                                maximumValue={50}
                                minimumValue={16}
                                value={this.state.maxAge}
                                onValueChange={(value) => this.setState({ maxAge: value })}
                                step={1}
                                minimumTrackTintColor='#D94600'
                                style={{ width: 225 }}
                                trackStyle={{ height: 3.5, }}
                                thumbTintColor='#D94600'
                            />
                            <Icon name="radio" size={17} color='grey' type='entypo' containerStyle={{ paddingLeft: 25, }} />
                        </ScrollView>
                    </List>
                </View>
                <View style={styles.view1}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>应用设置</Text>
                    </View>
                    <List containerStyle={styles.listContainer} >
                        {list.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.title}
                                subtitle={l.subtitle}
                                leftIcon={l.icon}
                                containerStyle={styles.ListItemContainer}
                                titleStyle={{ fontSize: 15, }}
                                subtitleStyle={{ fontWeight: 'normal' }}
                                onPress={() => navigation.navigate(l.detail)}
                            />
                        ))}
                    </List>
                </View>
                <View>
                    <List containerStyle={{ marginTop: 20, borderTopWidth: 0, borderBottomWidth: 0, }} >
                        <ListItem
                            title='意见反馈'
                            subtitle='感谢你对探探提出宝贵的意见'
                            leftIcon={
                                <Icon name="pencil-circle"
                                    size={27}
                                    color='#BB3D00'
                                    type='material-community'
                                    containerStyle={{ paddingRight: 23 }} />
                            }
                            containerStyle={[styles.ListItemContainer,{marginBottom: 35}]}
                            titleStyle={{fontSize: 15,}}
                            subtitleStyle={{fontWeight: 'normal'}}
                        />
                        <Button
                            title='退出登录'
                            backgroundColor='#BB3D00'
                            containerViewStyle={{ width: 300, justifyContent: 'center', paddingLeft: 30, paddingBottom: 50 }}
                        />
                        <View style={{ paddingBottom: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'grey', fontSize: 12, textDecorationLine: 'underline', textDecorationColor: 'grey', }}>探探2.8.9</Text>
                        </View>
                    </List>
                </View>
                <View>
                    <Modal
                        animationType={"fade"}
                        transparent={true}
                        visible={this.state.visible}
                        onRequestClose={() => this.setState({ visible: false })}
                    >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ visible: false })}>
                            <View style={styles.modalContainer}>
                                <View style={styles.modalView}>
                                    <View style={styles.modalTextView}>
                                        <Text style={styles.modalText}>显示性别</Text>
                                    </View>
                                    <List containerStyle={[styles.listContainer,{marginTop:0}]}>
                                        {list2.map((l, i) => (
                                            <ListItem
                                                title={l.title}
                                                key={i}
                                                containerStyle={{ borderBottomWidth: 0, height: 40 }}
                                                titleStyle={{ fontSize: 16 }}
                                                rightIcon={<CheckBox
                                                    iconRight
                                                    size={18}
                                                    checkedIcon="dot-circle-o"
                                                    uncheckedIcon="circle-o"
                                                    checked={this.state.sexuality === l.title}
                                                    checkedColor="#BB3D00"
                                                    containerStyle={{ backgroundColor: 'white', borderColor: 'white' }}
                                                    onPress={() => this.setState({ visible: false, sexuality: l.title })} />}
                                            />
                                        ))}
                                    </List>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
            </ScrollView>
        )
    }

}
const styles = {
    
    container:{
        backgroundColor: 'white'
    },

    view1:{
        borderBottomWidth: 1, 
        borderBottomColor: '#cbd2d9'
    },

    textView:{
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 15,
    },

    text:{
        color: '#BB3D00', 
        fontSize: 15
    },

    listContainer:{
        marginTop: 20, 
        borderTopWidth: 0, 
        borderBottomWidth: 0,
    },

    ListItemContainer:{
        borderTopWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
        height: 65
    },

    modalContainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    modalView:{
        height: 200, 
        width: 300, 
        backgroundColor: 'white'
    },

    modalTextView:{
        paddingLeft: 15, 
        paddingTop: 15, 
        paddingBottom: 20
    },

    modalText:{
        fontSize: 18, 
        color: "black"
    }
    
}

export default Setting_home;