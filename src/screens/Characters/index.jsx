import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacters,
  loadMoreCharacters,
} from '../../store/actions/charactersAction';
import {screensStyle} from '../../styles/screenStyle';
import Spinner from '../../components/UI/Spinner';
import CharacterCard from '../../components/character/characterCard';
import ShowPage from '../../components/UI/ShowPage';

const CharactersScreen = () => {
  const {charactersList, pending, params} = useSelector(
    state => state.characters,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(params));
  }, [params]);

  const handleLoadMore = () => {
    let page = params.page;
    page++;

    dispatch(changeParams({page: page}));

    dispatch(loadMoreCharacters(params));

    //dispatch(loadMoreCharacters({page: page}));
  };

  return (
    <View style={screensStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={charactersList}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={handleLoadMore}
          renderItem={({item}) => <CharacterCard item={item} />}
          //ListHeaderComponent={<ShowPage page={params.page} />}
          ListFooterComponent={<Spinner />}
        />
      )}
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({});
