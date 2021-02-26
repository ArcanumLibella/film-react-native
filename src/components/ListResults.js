import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Card } from './Card';

const ListResults = ({movies, onEndReached, goToDetails}) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={movies}
        keyExtractor={item => item.id.toString()+Math.random()}
        renderItem={({item}) => 
          <Card 
            key={item.id.toString()+Math.random()} 
            movieTitle={item.title} 
            releaseDate={item.release_date}
            moviePicture={item.poster_path}
            goToDetails={() => goToDetails(item.id)}
          />}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: 'white'
  }
})

export default ListResults