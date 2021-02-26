import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";

import {getMovieById} from '../services/network'

const MovieDetailsScreen = ({route}) => {
  console.log('test', route.params.id);
  const [movieId, setMovieId] = useState(route.params.id);
  const [movieDetails, setMovieDetails] = useState({});

  const fetchMovie = () => {
    getMovieById(movieId)
      .then(res => setMovieDetails(res))
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <View style={{flex:1}}>
      <View style={styles.bgHeader}></View>
      <View style={styles.titleContainer}></View>
      <View style={styles.descriptionContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgHeader: {
    flex: 2,
    backgroundColor: 'red'
  },
  titleContainer: {
    flex: 1,
    backgroundColor: 'green'
  },
  descriptionContainer: {
    flex: 2,
    backgroundColor: 'yellow'
  }
})

export default MovieDetailsScreen
