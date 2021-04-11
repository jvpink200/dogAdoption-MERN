import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { DOGITEMS } from '../shared/dogitems';
import * as Animatable from 'react-native-animatable';

function RenderItem({item}) {
    if (item) {
        return (
            <Card
                image={require('../shared/images/dog_bowls.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}
function RenderItem2({item}) {
    if (item) {
        return (
            <Card
                image={require('../shared/images/dog_collar.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}
function RenderItem3({item}) {
    if (item) {
        return (
            <Card
                image={require('../shared/images/dog_house.jpg')}
            >
                <Text style={{margin: 10}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogItems: DOGITEMS
        };
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <RenderItem 
                        item={this.state.dogItems.filter(dogItem => dogItem.id)[0]}
                    />
                    <RenderItem2 
                        item={this.state.dogItems.filter(dogItem => dogItem.id)[1]}
                    />
                    <RenderItem3 
                        item={this.state.dogItems.filter(dogItem => dogItem.id)[2]}
                    />
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Home;