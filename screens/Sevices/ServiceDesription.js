import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const { width, height } = Dimensions.get('window');

const ServiceDesription = ({ route, navigation }) => {
  const { img, title, description } = route.params;
  return (
    <View>
      <ImageBackground
        source={img}
        style={styles.img}
        imageStyle={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
      >
        <SafeAreaView>
          <TouchableOpacity
            onPress={() => navigation.navigate('services')}
            style={styles.back}
          >
            <EvilIcons name="chevron-left" size={40} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.keepInTouch}>
        <Text style={styles.KeepInTouchText}>Keep in Touch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width,
    height: height * 0.6,
  },
  back: {
    backgroundColor: '#6F0000',
    width: width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    height: width * 0.12,
    borderRadius: 10,
    margin: 20,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    paddingVertical: 30,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  keepInTouch: {
    backgroundColor: '#6F0000',
    padding: 20,
    margin: 50,
    borderRadius: 20,
  },
  KeepInTouchText: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
  },
});

export default ServiceDesription;
