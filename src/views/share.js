import React, { Component } from 'react';
import { View, ScrollView, } from 'react-native';
import { Text, Button, Icon, SocialIcon, Card } from 'react-native-elements';


const shareView = () => {
    return (
        <Card
            containerStyle={{ marginTop: 15, marginBottom: 15 }}
            title="将探探分享到"
        >
            <SocialIcon button type="medium" />
            <SocialIcon button type="twitch" />
            <SocialIcon button type="facebook" />
            <SocialIcon button type="twitter" />
            <SocialIcon button type="instagram" />
        </Card>
    )
}
export default shareView;