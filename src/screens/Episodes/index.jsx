import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getEpisodes} from '../../store/actions/episodesActions';

const EpisodesScreen = () => {
  const {episodesList, pending, error} = useSelector(state => state.episodes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes());
  }, []);

  return (
    <View>
      <Text>EpisodesScreen</Text>
    </View>
  );
};

export default EpisodesScreen;

const styles = StyleSheet.create({});
