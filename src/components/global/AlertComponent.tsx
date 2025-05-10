import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import useTheme from '../../styles/theme';

export interface AlertProps {
  visible: boolean;
  onOkPress: () => void;
  onCancelPress: () => void;
  okText?: string;
  cancelText?: string;
  title?: string;
  message?: string;
}
const AlertComponent: React.FC<AlertProps> = ({
  onOkPress,
  okText = 'OK',
  cancelText = 'Cancel',
  title = 'Alert',
  message = 'This is an alert message',
  onCancelPress,
  visible,
}) => {
  const { styles, theme } = useStyles();
  return (
    <Modal
      animationType="fade"
      onRequestClose={onCancelPress}
      transparent={true}
      visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.lModalView}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.msgText}>{message}</Text>
          <View style={styles.buttonContainer}>
            {onCancelPress && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onCancelPress}
                style={styles.cancelBox}>
                <Text style={styles.cancelText}>{cancelText}</Text>
              </TouchableOpacity>
            )}
            {onOkPress && (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onOkPress}
                style={styles.okBox}>
                <Text style={styles.okText}>{okText}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertComponent;

const useStyles = () => {
  const theme = useTheme();

  const styles = useMemo(() => {
    const { colors, globalStyles, sizes } = theme;
    return StyleSheet.create({
      centeredView: {
        height: sizes.HEIGHT,
        width: sizes.WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
      },
      lModalView: {
        padding: sizes.PADDING,
        width: sizes.WIDTH * 0.6,
        backgroundColor: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: sizes.WIDTH * 0.05,
      },
      msgText: {
        fontSize: sizes.WIDTH * 0.03,
        color: colors.TEXT,
        textAlign: 'center',
        marginBottom: sizes.PADDING,
      },
      titleText: {
        ...globalStyles.TEXT_STYLE_BOLD,
        fontSize: sizes.WIDTH * 0.04,
        color: colors.TEXT,
        textAlign: 'center',
      },
      okBox: {
        ...globalStyles.TEXT_STYLE,
        height: sizes.HEIGHT * 0.05,
        backgroundColor: colors.PRIMARY,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizes.WIDTH * 0.025,
        borderWidth: 1,
        borderColor: colors.PRIMARY,
        flex: 1,
      },
      okText: {
        ...globalStyles.TEXT_STYLE_BOLD,
        fontSize: sizes.WIDTH * 0.03,
        color: colors.PRIMARY_TEXT,
      },
      cancelBox: {
        ...globalStyles.TEXT_STYLE,
        height: sizes.HEIGHT * 0.05,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: sizes.WIDTH * 0.025,
        borderWidth: 1,
        borderColor: colors.RED,
        flex: 1,
      },
      cancelText: {
        fontSize: sizes.WIDTH * 0.03,
        color: colors.RED,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: sizes.PADDING,
      },
    });
  }, [theme]);

  return {
    styles,
    theme,
  };
};
