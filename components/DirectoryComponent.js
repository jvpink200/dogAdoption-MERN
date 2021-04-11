import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DOGITEMS } from '../shared/dogitems';

class Directory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dogItems: DOGITEMS
        };
    }

    static navigationOptions = {
        title: 'All Dog Items'
    }

    render() {
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={() => navigate('DogItemInfo', { dogId: item.id })}
                    leftAvatar={{ source: require('../shared/images/dog_bed.jpg')}}
                />
            );
        };

        return (
            <FlatList
                data={this.state.dogItems}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

export default Directory;