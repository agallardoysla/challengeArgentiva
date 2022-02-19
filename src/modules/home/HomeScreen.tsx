import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContainerScreenWithstatusBar from '../../generics/components/ContainerScreenWithstatusBar';
import GenericListContainer from '../../generics/components/GenericListContainer';
import {backgrounds} from '../../generics/themes/themesConst';

const HomeScreen = () => {
  useFocusEffect(React.useCallback(() => {}, []));

  return (
    <ContainerScreenWithstatusBar hasHeader={false}>
      <GenericListContainer isLoading={false} onRetry={() => {}} error={''}>
        <View></View>
      </GenericListContainer>
    </ContainerScreenWithstatusBar>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: backgrounds.light},
});

export default HomeScreen;
