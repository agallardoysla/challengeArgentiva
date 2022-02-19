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
import Iconos from './Iconos';
import Entypo from 'react-native-vector-icons/Entypo';

interface HeaderProps {
  title?: string;
  actionLeft: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  actionRight: () => void;
}
const Header = ({
  actionLeft,
  actionRight,
  containerStyle,
  title,
}: HeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={actionLeft}>
        <Entypo name="chevron-thin-left" size={normalize(16)} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={actionRight} style={styles.icon}>
        <Iconos
          name="Cerrar"
          height={normalize(15.42)}
          width={normalize(15.42)}
        />
      </TouchableOpacity>
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
