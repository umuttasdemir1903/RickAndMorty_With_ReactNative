//import liraries

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  changeParams,
  getCharacters,
} from '../../store/actions/charactersAction';
import {FlatList, TextInput, View, Text} from 'react-native';
import CustomButton from '../../components/UI/CustomButton';
import {screensStyle} from '../../styles/screenStyle';
import Colors from '../../theme/colors';
import ItemInSearchScreen from '../../components/character/itemInSearchScreen';

// create a component
const SearchCharacters = () => {
  const {charactersList, pending, params} = useSelector(
    state => state.characters,
  );

  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters(params));
  }, []);

  const handleSumbit = () => {
    dispatch(changeParams({name: searchText}));
  };
  const ListHeaderComponent = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TextInput
          value={searchText}
          returnKeyType="search"
          placeholder="Search Character"
          //onSubmitEditing={handleSumbit}
          style={{
            width: '95%',
            height: 40,
            backgroundColor: Colors.BACKTITLECOLOR,
            borderWidth: 0.5,
            borderRadius: 100,
            borderColor: Colors.BROWN,
            padding: 10,
          }}
          onChangeText={text => {
            setSearchText(text);
          }}
        />
        <CustomButton
          onPress={() => handleSumbit()}
          title="Search"
          backColor={Colors.GREEN}
          titleColor={Colors.WHITE}
        />
      </View>
    );
  };
  return (
    <View style={screensStyle.container}>
      <FlatList
        data={charactersList}
        renderItem={({item}) => <ItemInSearchScreen item={item} />}
        ListHeaderComponent={ListHeaderComponent}
        // onEndReachedThreshold={0.5}
        // onEndReached={handleLoadMore}
        // ListFooterComponent={<Spinner />}
      />
    </View>
  );
};

export default SearchCharacters;
