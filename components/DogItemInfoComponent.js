import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { DOGITEMS } from '../shared/dogitems';

function RenderDogItem({dogItem}) {

    if (dogItem) {
        return (
            <Card
                featuredTitle={dogItem.name}
                image={require('../shared/images/dog_bed.jpg')}
            >
                <Text style={{margin: 10}}>
                    {dogItem.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

class DogItemInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogItems: DOGITEMS
        };
    }

    static navigationOptions = {
        title: 'Dog Item Information'
    }

    render() {
        const dogId = this.props.navigation.getParam('dogId');
        const dogItem = this.state.dogItems.filter(dogItem => dogItem.id === dogId)[0];
        return <RenderDogItem dogItem={dogItem} />;
    }
}

export default DogItemInfo;