import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
  return (
    <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}}>
      <Text>Fahmi</Text>
      <Alfareza />
      <Text>Imhaf</Text>
      <Text>Azerafla</Text>
      <Photo />
      <TextInput style={{borderWidth: 1, borderColor: '#fff'}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Alfareza = () => {
  return <Text>Alfareza Mangku Negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/animals'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/tech'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini Tech</Text>
      </View>
    );
  }
}

export default SampleComponent;
