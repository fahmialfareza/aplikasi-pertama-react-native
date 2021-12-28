import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UndrawWorld from './undraw_world.svg';

const ReactNativeSVG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi menggunakan file SVG</Text>
      <UndrawWorld width={244} height={125} />
    </View>
  );
};

export default ReactNativeSVG;

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', padding: 20},
  textTitle: {textAlign: 'center'},
});
