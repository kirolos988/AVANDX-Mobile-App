import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const Loading = () => {
  return (
    <LinearGradient
      colors={['#6F0000', '#200122']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView>
        <Image
          style={[styles.image, { marginLeft: 120 }]}
          resizeMode="contain"
          source={require('../../assets/OnBoarding/GraphicDesign.png')}
        />
        <Image
          style={[styles.image, { marginLeft: -120 }]}
          resizeMode="contain"
          source={require('../../assets/OnBoarding/MediaProduction.png')}
        />
        <Image
          style={[styles.image, { marginLeft: 120 }]}
          resizeMode="contain"
          source={require('../../assets/OnBoarding/SocialMediaMarketing.png')}
        />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image: {
    opacity: 0.35,
    height: height * 0.3,
  },
});

export default Loading;
