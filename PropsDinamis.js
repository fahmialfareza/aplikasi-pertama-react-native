import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 50}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Materi Component dengan Props Dinamis</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            gambar="https://placeimg.com/640/480/animals"
            judul="Youtube Channel"
          />
          <Story
            gambar="https://placeimg.com/640/480/animals"
            judul="Kelas Online"
          />
          <Story
            gambar="https://placeimg.com/640/480/animals"
            judul="Kabayan Coding"
          />
          <Story gambar="https://placeimg.com/640/480/animals" judul="Shoot" />
          <Story gambar="https://placeimg.com/640/480/animals" judul="Food" />
          <Story gambar="https://placeimg.com/640/480/animals" judul="Tamiya" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
  },
});
