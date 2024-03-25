import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: 'center', width }}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    color: '#fff',
    fontSize: 13,
    marginTop: 10,
    maxWidth: '70%',
    textAlign: 'center',
    lineHeight: 23,
  },
  image: {
    height: '75%',
    width: '90%',
    resizeMode: 'contain',
  },
});
export default Slide;
