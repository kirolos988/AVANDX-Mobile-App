import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('services')}>
        <Text>Services</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
