import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ContainerScreenWithstatusBar from '../../generics/components/ContainerScreenWithstatusBar';
import GenericListContainer from '../../generics/components/GenericListContainer';
import genericRequestHandler, {
  GenericRequestContext,
  GenericRequestType,
} from '../../generics/components/GenericRequestHandler';
import {getPokemons, PokemonItemList} from '../../generics/utils/service';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {normalize} from '../../generics/hooks/useResponsive';
import {colors} from '../../generics/themes/themesConst';
import SceneNames from '../../navigator/SceneNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigator/RootStackParamList';
import {search} from '../../generics/utils/functions';

type Navigation = NativeStackNavigationProp<
  RootStackParamList,
  SceneNames.HomeScreen
>;

const HomeScreen = ({navigation}: {navigation: Navigation}) => {
  const {onMakeRequest, loading, errorMessage}: GenericRequestType = useContext(
    GenericRequestContext,
  );
  const [pokemons, setPokemons] = useState<PokemonItemList[]>([]);
  const [searchText, setSearchText] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      onGetPokemons();
    }, []),
  );

  const searchPokemon = () =>
    pokemons.filter(({name}) => search(name, searchText));

  const onGetPokemons = () =>
    onMakeRequest((resultHandler, errorHandler) => {
      getPokemons(
        1200,
        0,
        res => {
          setPokemons(res.results);
          resultHandler();
        },
        error => errorHandler({message: error}),
      );
    });

  return (
    <ContainerScreenWithstatusBar hasHeader={false}>
      <GenericListContainer
        isLoading={loading}
        onRetry={onGetPokemons}
        error={errorMessage}>
        <View style={{width: '100%', height: '100%'}}>
          <View style={styles.searchContainer}>
            <AntDesign name={'search1'} size={normalize(25)} />
            <TextInput
              placeholder="Busca un pokemon"
              onChangeText={setSearchText}
              style={{fontSize: normalize(18), marginLeft: 10}}
            />
          </View>
          <FlatList
            data={searchPokemon()}
            renderItem={({item}) => (
              <Item navigation={navigation} item={item} />
            )}
          />
        </View>
      </GenericListContainer>
    </ContainerScreenWithstatusBar>
  );
};

const Item = ({
  item,
  navigation,
}: {
  item: PokemonItemList;
  navigation: Navigation;
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(SceneNames.PokemonDetail, {pokemon: item})
      }
      style={styles.itemContainer}>
      <Text style={{fontSize: normalize(18), fontWeight: 'bold'}}>
        {item.name.toLocaleUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  itemContainer: {
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 60,
    borderRadius: 10,
    backgroundColor: colors.skyblue,
    marginTop: 20,
    paddingLeft: 10,
  },
});

export default genericRequestHandler(HomeScreen);
