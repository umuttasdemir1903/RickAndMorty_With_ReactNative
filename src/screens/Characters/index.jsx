import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacters} from '../../store/actions/charactersAction';
import {screensStyle} from '../../styles/screenStyle';
import Spinner from '../../components/UI/Spinner';
import CharacterCard from '../../components/character/characterCard';

const CharactersScreen = () => {
  const {charactersList, pending} = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={charactersList}
          renderItem={({item}) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({});
