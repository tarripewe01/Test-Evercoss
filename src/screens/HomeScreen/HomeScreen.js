/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Sizebox from '../../components/Atoms/Sizebox';
import Title from '../../components/Atoms/Title';
import MovieCard from '../../components/Molecules/MovieCard';
import {Colors} from '../../utils/Colors/Colors';

const logo = require('../../assets/logo.png');

const HomeScreen = ({navigation}) => {
  const [isLoading, setIsloading] = useState(true);
  const [dataNowPlaying, setDataNowPlaying] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);
  const [dataUpcoming, setDataUpcoming] = useState([]);

  useEffect(() => {
    loadDataNowPlaying();
    loadDataPopular();
    loadDataUpcoming();
  }, []);

  const loadDataNowPlaying = () => {
    setIsloading(true);
    axios
      .get('https://api.themoviedb.org/3/movie/now_playing', {
        params: {
          api_key: 'cdec8fbf1897d2db962aca6cc0d5d205',
        },
      })
      .then(response => {
        let datas = response.data.results;
        setIsloading(false);
        setDataNowPlaying(datas);
      })
      .catch(error => {
        setIsloading(false);
        console.log(error);
      });
  };

  const loadDataPopular = () => {
    setIsloading(true);
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: 'cdec8fbf1897d2db962aca6cc0d5d205',
        },
      })
      .then(response => {
        let datas = response.data.results;
        setIsloading(false);
        setDataPopular(datas);
      })
      .catch(error => {
        setIsloading(false);
        console.log(error);
      });
  };

  const loadDataUpcoming = () => {
    setIsloading(true);
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming', {
        params: {
          api_key: 'cdec8fbf1897d2db962aca6cc0d5d205',
        },
      })
      .then(response => {
        let datas = response.data.results;
        setIsloading(false);
        setDataUpcoming(datas);
      })
      .catch(error => {
        setIsloading(false);
        console.log(error);
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.background}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <Sizebox height={20} />
        <Image
          source={require('../../assets/logo.png')}
          style={{width: 250, height: 100, alignSelf: 'center'}}
        />
        <Sizebox height={10} />

        <Title title="Now Playing" />
        <Sizebox height={10} />
        <FlatList
          data={dataNowPlaying}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            console.log('item?.id', item?.id);
            return (
              <MovieCard
                title={item?.title}
                poster_path={item.poster_path}
                navigation={() => navigation.navigate('Detail', {id: item?.id})}
              />
            );
          }}
        />

        <Title title="Popular" />
        <Sizebox height={10} />
        <FlatList
          data={dataPopular}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <MovieCard
                title={item?.title}
                poster_path={item.poster_path}
                navigation={() => navigation.navigate('Detail', {id: item?.id})}
              />
            );
          }}
        />

        <Title title="Upcoming" />
        <Sizebox height={10} />
        <FlatList
          data={dataUpcoming}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <MovieCard
                title={item?.title}
                poster_path={item.poster_path}
                navigation={() => navigation.navigate('Detail', {id: item?.id})}
              />
            );
          }}
        />

        <Sizebox height={20} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.colorBlack,
    flex: 1,
    paddingLeft: 15,
    paddingTop: 15,
  },
});
