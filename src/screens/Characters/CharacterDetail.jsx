import {ScrollView, StyleSheet, Image, View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {screensStyle} from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getsingleCharacter,
  resetData,
} from '../../store/actions/charactersAction';
import Spinner from '../../components/UI/Spinner';
import Colors from '../../theme/colors';

const CharacterDetail = ({route}) => {
  //console.log(route?.params);
  const {characterID} = route?.params;

  const {singleCharacter, pendingSingleCharacter} = useSelector(
    state => state.characters,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getsingleCharacter(characterID));
    return () => {
      dispatch(resetData());
    };
  }, []);

  return (
    <View style={screensStyle.container}>
      {pendingSingleCharacter ? (
        <Spinner />
      ) : (
        <ScrollView>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 270,
            }}>
            <View style={{height: 200, width: 200}}>
              <Image
                source={{uri: singleCharacter.image}}
                style={{
                  width: '100%',
                  height: '100%',
                  borderWidth: 5,
                  borderColor:
                    singleCharacter.status == 'Alive'
                      ? '#5fc992'
                      : singleCharacter.status == 'unknown'
                      ? '#2ccce4'
                      : '#fd1d00',
                  borderRadius: 300,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: -10,
                  alignSelf: 'center',
                  backgroundColor:
                    singleCharacter.status == 'Alive'
                      ? '#5fc992'
                      : singleCharacter.status == 'unknown'
                      ? '#2ccce4'
                      : '#fd1d00',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: 16,
                    fontWeight: '600',
                  }}>
                  {singleCharacter.status}
                </Text>
              </View>
            </View>
          </View>
          <Text style={{fontSize: 26, fontWeight: 'bold', textAlign: 'center'}}>
            {singleCharacter.name}
          </Text>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>PROPERTIES</Text>
            <View style={styles.rowContainer}>
              <View style={styles.infoContainer}>
                <Text>Gender</Text>
              </View>
              <View style={styles.infoBox}>
                <Text>{singleCharacter.gender}</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.infoContainer}>
                <Text>Species</Text>
              </View>
              <View style={styles.infoBox}>
                <Text>{singleCharacter.species}</Text>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <View style={styles.infoContainer}>
                <Text>Status</Text>
              </View>
              <View style={styles.infoBox}>
                <Text>{singleCharacter.status}</Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>WHEREABOUTS</Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.infoContainer}>
              <Text>Origin</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>{singleCharacter?.origin?.name}</Text>
            </View>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.infoContainer}>
              <Text>Location</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>{singleCharacter?.location?.name}</Text>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>FEAATURE CHAPTERS</Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.infoContainer}>
              <Text>Created</Text>
            </View>
            <View style={styles.infoBox}>
              <Text>{singleCharacter.created}</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CharacterDetail;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    color: Colors.BROWN,
  },
  sectionContainer: {
    margin: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
  },
  infoContainer: {backgroundColor: '#e5ded1', padding: 10, flex: 1},
  infoBox: {
    backgroundColor: '#e5ded1',
    padding: 10,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
});
