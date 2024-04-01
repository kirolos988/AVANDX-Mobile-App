import {
  SafeAreaView,
  View,
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import ServiceList from '../../components/Services/ServiceList';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const servicesList = [
  {
    img: require('../../assets/Services/MediaProductionService.jpg'),
    title: 'Media Production',
    description:
      'Media production involves creating captivating content through storytelling and technical expertise.',
  },
  {
    img: require('../../assets/Services/DigitalMarketingService.jpg'),
    title: 'Digital Marketing',
    description:
      'Digital marketing leverages online channels to reach and engage target audiences.',
  },
  {
    img: require('../../assets/Services/BrandingService.jpg'),
    title: 'Branding',
    description:
      'Branding is crafting a unique identity to resonate with consumers.',
  },
  {
    img: require('../../assets/Services/Web&AppDevelopment.jpg'),
    title: 'Web And App Development',
    description:
      'Web and app development involves coding to create interactive digital experiences.',
  },
  {
    img: require('../../assets/Services/MediaBuyingService.jpg'),
    title: 'Media Buying',
    description:
      'Media buying entails strategically purchasing ad space for optimal audience targeting.',
  },
  {
    img: require('../../assets/Services/ConsultationService.jpg'),
    title: 'Consultation',
    description:
      'Media consultation provides strategic guidance for optimizing communication and outreach strategies.',
  },
];

const Services = ({ navigation }) => {
  return (
    <SafeAreaView style={[{ backgroundColor: '#6b0001', paddingTop: 35 }]}>
      <View style={styles.headerView}>
        <TouchableOpacity style={[styles.icons, styles.menu]}>
          <FontAwesome name="bars" size={16} color="#fff" />
        </TouchableOpacity>
        <View style={styles.header}>
          <Text style={styles.headerText}>Services</Text>
        </View>
        <TouchableOpacity style={[styles.icons, styles.bell]}>
          <FontAwesome name="bell" size={16} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.FlatListView}>
        <FlatList
          data={servicesList}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ServiceList navigation={navigation} item={item} />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#841213',
    padding: 10,
  },
  headerText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#fff',
  },
  FlatListView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: height,
    borderRadius: 50,
    marginTop: 20,
    paddingTop: 5,
    paddingBottom: 125,
  },
  icons: {
    backgroundColor: '#841213',
    width: width * 0.1,
    height: width * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.05,
    shadowColor: '#aaa',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 6,
  },
  menu: {
    marginLeft: width * 0.05,
  },
  bell: {
    marginRight: width * 0.05,
  },
});

export default Services;
