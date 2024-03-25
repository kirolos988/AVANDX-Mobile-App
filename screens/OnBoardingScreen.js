import React, { useRef, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Slide from '../components/Slide';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('screen');

const OnBoardingData = [
  {
    id: '1',
    img: require('../assets/MediaProduction.png'),
    title: 'Media Production',
    content:
      'Media production service introduced with a high quality techniques and equipments.',
    button: 'Next',
  },
  {
    id: '2',
    img: require('../assets/SocialMediaMarketing.png'),
    title: 'Social Media Marketing',
    content:
      'To help you to effectivly deliver your product to the most suitable client.',
    button: 'Next',
  },
  {
    id: '3',
    img: require('../assets/GraphicDesign.png'),
    title: 'Graphic Design',
    content:
      'To make the most creative, simple and elegant design for your ad or your company logo.',
    button: 'Get Started',
  },
];

const OnBoardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const ref = useRef(null);

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex !== OnBoardingData.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = OnBoardingData.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.indicatorView}>
          {OnBoardingData.map((_, index) => (
            <View
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#fff',
                  width: 25,
                },
              ]}
              key={index}
            />
          ))}
        </View>
        <View style={{ marginBottom: 20 }}>
          {currentSlideIndex === OnBoardingData.length - 1 ? (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('homeScreen')}
              >
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={skip}
                style={[styles.btn, styles.skipBtn]}
              >
                <Text style={[styles.btnText, { color: '#fff' }]}>Skip</Text>
              </TouchableOpacity>
              <View style={{ width: 20 }} />
              <TouchableOpacity style={styles.btn} onPress={goNextSlide}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#6F0000', '#200122']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style={{ backgroundColor: '#6F0000' }} />
        <FlatList
          data={OnBoardingData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ height: height * 0.5 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item }) => <Slide item={item} />}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          ref={ref}
          pagingEnabled
        />
        <Footer />
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: '#555',
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  skipBtn: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#fff',
  },
});

export default OnBoardingScreen;
