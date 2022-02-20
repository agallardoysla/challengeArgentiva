import {ErrorHanlder, HttpMethod, myFetch} from './baseService';

export type PokemonItemList = {
  name: string;
  url: string;
};

export type PokemonResult = {
  count: number;
  next: string;
  previous: string;
  results: PokemonItemList[];
  status?: boolean;
  errors?: string[];
};

export type Ability = {
  ability: {name: string; url: string};
  is_hidden: boolean;
  slot: number;
};

export type Abilities = {
  ability: Ability[];
};

export type OtherSpritesHome = {
  front_default: string;
};

export type OtherSprites = {
  home: OtherSpritesHome;
};

export type Sprites = {
  back_default: string;
  front_default: string;
};

export type PokemonDetailResult = {
  abilities: Ability[];
  sprites: Sprites;
  status?: boolean;
  errors?: string[];
};

export const getPokemons = (
  limit: number,
  offset: number,
  resultHandler: (result: PokemonResult) => void,
  errorHandler: ErrorHanlder,
) =>
  myFetch<PokemonResult>(
    `pokemon?offset=${offset}&limit=${limit}`,
    JSON.stringify({}),
    resultHandler,
    errorHandler,
    HttpMethod.GET,
  );

export const getPokemon = (
  name: string,
  resultHandler: (result: PokemonDetail) => void,
  errorHandler: ErrorHanlder,
) =>
  myFetch<PokemonDetail>(
    `pokemon/${name}`,
    JSON.stringify({}),
    resultHandler,
    errorHandler,
    HttpMethod.GET,
  );
