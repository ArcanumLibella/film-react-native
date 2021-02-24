import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";
import {REACT_APP_API_URL_IMAGE} from "@env"

export const Card = ({movieTitle, releaseDate, moviePicture}) => {
  return (
    <TouchableOpacity onPress={() => {Alert.alert('Pouet pouet !')}}>
      <View style={styles.main_container}>

        <View style={styles.image}>
          {
            moviePicture ?
            (<Image style={styles.moviePicture} resizeMode={'contain'} source={{uri : `${REACT_APP_API_URL_IMAGE}${moviePicture}`}}/>)
            :
            // (<View style={{backgroundColor : '#cccccc'}}></View>)
            (<Text>No IMAGE</Text>)
          }
        </View>

        <View style={styles.movieDescription}>
          <Text style={styles.movieName}>{movieTitle}</Text>
          <Text style={styles.movieDate}>{releaseDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 12,
    height: 100,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF'
  },
  image: {
    flex: 1,
    width: 280,
  },
  moviePicture: {
    flex: 1
  },
  movieDescription: {
    flex: 6,
    justifyContent: 'center',
    marginLeft: 8
  },
  movieName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  movieDate: {

  }
})