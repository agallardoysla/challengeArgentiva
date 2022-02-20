import {RouteProp, useFocusEffect} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import ContainerScreenWithstatusBar from '../../generics/components/ContainerScreenWithstatusBar';
import GenericListContainer from '../../generics/components/GenericListContainer';
import genericRequestHandler, {
  GenericRequestContext,
  GenericRequestType,
} from '../../generics/components/GenericRequestHandler';
import {Ability, getPokemon} from '../../generics/utils/service';
import SceneNames from '../../navigator/SceneNames';
import {RootStackParamList} from '../../navigator/RootStackParamList';
import {normalize} from '../../generics/hooks/useResponsive';

const PokemonDetailScreen = ({
  route,
}: {
  route: RouteProp<RootStackParamList, SceneNames.PokemonDetail>;
}) => {
  const {onMakeRequest, loading, errorMessage}: GenericRequestType = useContext(
    GenericRequestContext,
  );
  const [abilities, setAbilities] = useState<Ability[]>([]);
  const [image, setImage] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      onGetPokemon();
    }, []),
  );

  const onGetPokemon = () =>
    onMakeRequest((resultHandler, errorHandler) => {
      getPokemon(
        route.params.pokemon.name,
        res => {
          setAbilities(res.abilities);
          setImage(res.sprites.other.home.front_default);
          resultHandler();
        },
        error => errorHandler({message: error}),
      );
    });

  return (
    <ContainerScreenWithstatusBar hasHeader={true}>
      <GenericListContainer
        isLoading={loading}
        onRetry={onGetPokemon}
        error={errorMessage}>
        <View style={styles.container}>
          <Text style={styles.name}>
            {route.params.pokemon.name.toLocaleUpperCase()}
          </Text>
          <Image source={{uri: image}} style={styles.image} />
          <View style={styles.abilitiesContainer}>
            <Text style={styles.abilitiesTitle}>{'HABILIDADES:'}</Text>
            <FlatList
              data={abilities}
              renderItem={({item}) => <Item item={item} />}
            />
          </View>
        </View>
      </GenericListContainer>
    </ContainerScreenWithstatusBar>
  );
};

const Item = ({item}: {item: Ability}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={{fontSize: normalize(18)}}>
        *{item.ability.name.toLocaleUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  abilitiesTitle: {
    fontWeight: 'bold',
    fontSize: normalize(20),
  },
  abilitiesContainer: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    marginTop: 20,
    width: '90%',
  },
  image: {
    width: '90%',
    height: 250,
    resizeMode: 'contain',
  },
  container: {width: '100%', height: '100%', alignItems: 'center'},
  itemContainer: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: normalize(30),
    marginTop: 20,
  },
});

export default genericRequestHandler(PokemonDetailScreen);
