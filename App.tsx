import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/modules/home/HomeScreen';
import PokemonDetailScreen from './src/modules/pokemonDetail/PokemonDetailScreen';
import {SafeAreaView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SceneNames from './src/navigator/SceneNames';
import {RootStackParamList} from './src/navigator/RootStackParamList';

FontAwesome.loadFont();
Entypo.loadFont();
Ionicons.loadFont();
AntDesign.loadFont();

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={SceneNames.HomeScreen} component={HomeScreen} />
          <Stack.Screen
            name={SceneNames.PokemonDetail}
            component={PokemonDetailScreen}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
