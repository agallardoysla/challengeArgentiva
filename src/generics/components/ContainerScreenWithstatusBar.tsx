import {useNavigation} from '@react-navigation/native';
import React, {ReactNode} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import {backgrounds} from '../themes/themesConst';
import Header from './Header';

type Props = {
  children: ReactNode;
  hasHeader?: boolean;
};

function ContainerScreenWithstatusBar({children, hasHeader = true}: Props) {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? backgrounds.dark : backgrounds.light,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {hasHeader && (
        <Header
          actionLeft={navigation.goBack}
          containerStyle={{backgroundColor: 'transparent'}}
        />
      )}
      <View style={styles.viewContainer}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgrounds.light,
  },
  viewContainer: {
    backgroundColor: backgrounds.light,
    flex: 1,
    width: '100%',
  },
});

export default ContainerScreenWithstatusBar;
