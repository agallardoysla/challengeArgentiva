import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {backgrounds, fontFamily} from '../themes/themesConst';
import {normalize} from '../hooks/useResponsive';
import Entypo from 'react-native-vector-icons/Entypo';

interface HeaderProps {
  title?: string;
  actionLeft: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
const Header = ({actionLeft, containerStyle, title}: HeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={actionLeft}>
        <Entypo name="chevron-thin-left" size={normalize(16)} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: backgrounds.light,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  containerLeft: {
    width: '40%',
    flexDirection: 'row',
  },
  containerRigth: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {},
  title: {
    color: backgrounds.dark,
    fontSize: normalize(14),
    marginLeft: normalize(16),
    fontWeight: '500',
    fontFamily: fontFamily.Poppins,
  },
});

export default Header;
