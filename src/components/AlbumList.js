import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        // fetch('https://rallycoding.herokuapp.com/api/music_albums')
        // .then(response => response.json())
        // .then(responseData => console.log(responseData));
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => console.log(response));
    }

    render() {
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }

    
}

export default AlbumList;
