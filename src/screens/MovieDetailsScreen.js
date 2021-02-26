import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity, Alert } from "react-native";
import {REACT_APP_API_URL_IMAGE} from "@env"
// import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


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
    // console.log('mov', movieDetails);
  }, [])

  return (
    <View style={{flex:1}}>
      <View style={styles.bgHeader}>
          <Image 
            style={styles.bgHeaderImage}
            source={{uri: `${REACT_APP_API_URL_IMAGE}${movieDetails.backdrop_path}`}}
            resizeMode={'cover'}
          />
          <AntDesign style={styles.bgHeaderPlay} name="caretright" size={22} color="white" />
        </View>
      <View style={styles.titleContainer}>
          <Image 
                style={styles.titleImage}
                source={{uri: `${REACT_APP_API_URL_IMAGE}${movieDetails.poster_path}`}}
                resizeMode={'contain'}
              />
          <View style={styles.titleText}>
              <Text style={styles.titleBold}>{movieDetails.title}</Text>
              {/* <Text>{movieDetails}</Text> */}
          </View>
        </View>
      <View style={styles.descriptionContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgHeader: {
    flex: 2,
    backgroundColor: 'red'
  },
  bgHeaderImage: {
    flex: 1
  },
  bgHeaderPlay: {
    position: 'absolute',
    bottom: -15,
    right: 30,
    backgroundColor: '#F44802',
    padding: 12,
    borderRadius: 22,
    overflow: 'hidden',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'green'
  },
  titleImage: {
    // flex: 1,
    borderWidth: 3,
    borderColor: '#FFFF',
    borderRadius: 15,
    marginLeft: 10,
    width: 100,
    height: 150,
    top: -30
  },
  titleText: {
    marginLeft: 15,
    marginTop: 30
  },
  titleBold: {
    fontWeight: 'bold'
  },
  descriptionContainer: {
    flex: 2,
    backgroundColor: 'yellow'
  }
})

export default MovieDetailsScreen
