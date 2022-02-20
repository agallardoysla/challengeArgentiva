import {PokemonItemList} from '../generics/utils/service';

export type RootStackParamList = {
  HomeScreen: undefined;
  PokemonDetail: {
    pokemon: PokemonItemList;
  };
};
