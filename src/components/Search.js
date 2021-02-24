import React from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";
import { Icon } from 'react-native-elements'

export default class Search extends React.Component {
    render() {
        const {searchText, onSearch} = this.props;
        
        return (
            <View style={styles.main_container}>
                <View style={styles.searchContent}>
                    <Icon name="search" size={30} style={styles.searchIcon}/>
                    <TextInput 
                        style={styles.textinput} 
                        placeholder='Titre du film'
                        onChangeText={(text) => onSearch(text)}
                    />
                    {/* <Button title='Rechercher' style={styles.button} onPress={() => {}}/> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        padding: 20,
        backgroundColor: '#F44802',
        width: '100%',
        paddingTop: 80,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
    },
    searchContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 12,
        marginBottom: 12,
        padding: 12,
    },
    textinput: {

    },
    searchIcon:{
        marginRight: 15
    },
    button: {
        color: 'white'
    }
})
