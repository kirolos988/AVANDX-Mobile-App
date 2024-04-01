import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const SingleService = ({ item, navigation }) => {
  return (
    <ImageBackground
      source={item.img}
      style={styles.imgBackground}
      imageStyle={{ borderRadius: 50 }}
    >
      <View style={styles.overLayColorView}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.readMore}
          onPress={() => navigation.navigate('serviceDescription', item)}
        >
          <Text style={styles.readMoreText}>Read more</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    borderRadius: 50,
    height: height * 0.4,
    width: width * 0.8,
    marginBottom: 30,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 12,
  },
  overLayColorView: {
    backgroundColor: '#6F000036',
    borderRadius: 50,
    width: width * 0.8,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 40,
  },
  readMore: {
    marginTop: 40,
    borderWidth: 2,
    borderColor: '#6F0000',
    borderRadius: 15,
    padding: 16,
    backgroundColor: '#6F000060',
  },
  readMoreText: {
    color: '#fff',
    fontSize: 20,
  },
});

export default SingleService;
