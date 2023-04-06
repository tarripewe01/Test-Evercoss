/* eslint-disable react-hooks/exhaustive-deps */
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/Colors/Colors';
import Sizebox from '../../components/Atoms/Sizebox';
import Divider from '../../components/Atoms/Divider';
import {ScrollView} from 'react-native-gesture-handler';
import {tglIndoNormal} from '../../utils/Utils';
var currencyFormatter = require('currency-formatter');

const DetailScreen = () => {
  const route = useRoute();
  const {id} = route.params;

  const [isLoading, setIsloading] = useState(true);
  const [detailMovie, setDetailMovie] = useState({});

  useEffect(() => {
    loadDetailMovie();
  }, [id]);

  const loadDetailMovie = () => {
    setIsloading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: 'cdec8fbf1897d2db962aca6cc0d5d205',
        },
      })
      .then(response => {
        let datas = response.data;
        setIsloading(false);
        setDetailMovie(datas);
      })
      .catch(error => {
        setIsloading(false);
        console.log(error);
      });
  };

  return (
    <ScrollView style={styles.background}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`,
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{detailMovie?.original_title}</Text>
        <Text style={styles.tagline}>{detailMovie?.tagline}</Text>
        <Sizebox height={10} />
        <Text style={styles.desc}>{detailMovie?.overview}</Text>
        <Sizebox height={20} />
        <Divider />
      </View>

      <Sizebox height={20} />
      <View style={styles.containerData}>
        <View>
          <Text style={styles.infoDetail}>Release Date</Text>
          <Text style={styles.info2}>
            {tglIndoNormal(detailMovie?.release_date)}
          </Text>
        </View>
        <View>
          <Text style={styles.infoDetail}>Budget</Text>
          <Text style={styles.info2}>
            {currencyFormatter.format(detailMovie?.budget, {code: 'USD'})}
          </Text>
        </View>
        <View>
          <Text style={styles.infoDetail}>Popularity</Text>
          <Text style={styles.info2}>{detailMovie?.popularity}</Text>
        </View>
        <View>
          <Text style={styles.infoDetail}>Rating</Text>
          <Text style={styles.info2}>{detailMovie?.vote_average}</Text>
        </View>
      </View>
      <Sizebox height={30} />
      <View style={styles.containerData}>
        <View>
          <Text style={styles.infoDetail}>Production Companies</Text>
          {detailMovie?.production_companies?.map(item => {
            return <Text style={styles.info2}>{item?.name}</Text>;
          })}
        </View>
        <View>
          <Text style={styles.infoDetail}>Production Country</Text>
          {detailMovie?.production_countries?.map(item => {
            return <Text style={styles.info2}>{item?.name}</Text>;
          })}
        </View>
        <View>
          <Text style={styles.infoDetail}>Genre</Text>
          {detailMovie?.genres?.map(item => {
            return <Text style={styles.info2}>{item?.name}</Text>;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.colorBlack,
    flex: 1,
  },
  image: {width: '100%', height: 300, resizeMode: 'cover'},
  logo: {width: '200', height: 150},
  info: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    color: Colors.colorPurple,
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 14,
    color: Colors.colorPink,
    fontWeight: 'bold',
  },
  infoDetail: {
    fontSize: 12,
    color: Colors.colorPink,
    fontWeight: 'bold',
  },
  info2: {
    fontSize: 10,
    color: Colors.colorWhite,
  },
  desc: {
    color: Colors.colorWhite,
    textAlign: 'justify',
  },
  containerData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});
