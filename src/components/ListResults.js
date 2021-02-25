import React from 'react';
import { SafeAreaView } from 'react-native';
import { View, StyleSheet, FlatList, Text } from "react-native";
import { Card } from './Card';

export default class ListResults extends React.Component {
  render() {
    const {movies, onEndReached} = this.props;

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
              />}
              onEndReached={onEndReached}
              onEndReachedThreshold={0.5}
          />
        </SafeAreaView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: 'white'
  }
})