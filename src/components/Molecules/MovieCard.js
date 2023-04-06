import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/Colors/Colors';

const MovieCard = props => {
  return (
    <TouchableOpacity onPress={props.navigation} style={styles.item}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w200${props.poster_path}`,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  item: {
    width: 150,
    marginRight: 10,
  },
  title: {
    width: 150,
    textAlign: 'center',
    color: Colors.colorPurple,
    fontSize: 12,
    marginTop: 5,
  },
  image: {width: 150, height: 200, borderRadius: 10},
});
