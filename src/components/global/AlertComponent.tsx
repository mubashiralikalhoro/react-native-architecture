import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSizes} from '../../constants/size';
import {useColors} from '../../constants/color';
import {useMemo} from 'react';

type Props = {
  onOkPress: () => void;
  text?: string;
  isVisible: boolean;
  okText?: string;
};

const AlertComponent = ({
  onOkPress,
  text = 'Are you sure?',
  isVisible,
  okText = 'OK',
}: Props) => {
  const {styles} = useStyles();
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.lModalView}>
          <Text style={styles.msgText}>{text}</Text>
          <TouchableOpacity onPress={onOkPress} style={styles.okBox}>
            <Text style={styles.okText}>{okText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AlertComponent;

const useStyles = () => {
  const sizes = useSizes();
  const colors = useColors();

  const styles = useMemo(
    () =>
      StyleSheet.create({
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
        okBox: {
          height: sizes.HEIGHT * 0.05,
          width: sizes.WIDTH * 0.2,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: sizes.WIDTH * 0.025,
          borderWidth: 1,
          borderColor: colors.PRIMARY,
        },
        okText: {
          fontSize: sizes.WIDTH * 0.03,
          color: colors.PRIMARY,
        },
      }),
    [sizes, colors],
  );

  return {
    styles,
    sizes,
    colors,
  };
};
