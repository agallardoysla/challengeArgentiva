import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Modal,
} from 'react-native';
import {normalize} from '../hooks/useResponsive';
import {colors, opacities} from '../themes/themesConst';

interface Props {
  isVisible: boolean;
  onOkPressed: () => void;
  message: string;
  title?: string;
}

function AlertScreen({isVisible, onOkPressed, message, title}: Props) {
  if (!isVisible) {
    return <View />;
  }
  return (
    <Modal onDismiss={() => {}} transparent={true} visible={isVisible}>
      <View style={styles.modal}>
        <View style={styles.flexContainer}>
          {title && (
            <View style={styles.titleSection}>
              <Text style={{fontWeight: 'bold', fontSize: normalize(16)}}>
                {title}
              </Text>
            </View>
          )}
          <View style={styles.messageSection}>
            <Text style={{fontSize: normalize(13)}}>{message}</Text>
          </View>
          <TouchableOpacity style={styles.pressMe} onPress={onOkPressed}>
            <Text style={{color: colors.blue, fontSize: normalize(14)}}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: opacities.light05,
    width: Dimensions.get('window').width,
    flex: 1,
    justifyContent: 'center',
  },
  titleSection: {
    marginTop: 10,
  },
  flexContainer: {
    minHeight: 150,
    width: 300,
    backgroundColor: 'white',
    marginBottom: 100,
    alignSelf: 'center',
    borderColor: opacities.light09,
    padding: 20,
    justifyContent: 'space-between',
  },
  pressMe: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  messageSection: {
    justifyContent: 'center',
    borderColor: opacities.light09,
    flex: 1,
  },
});

export default AlertScreen;
