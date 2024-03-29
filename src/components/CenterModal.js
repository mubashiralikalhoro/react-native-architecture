import {View, Modal, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useSizes} from '../constants/size';
import {useColors} from '../constants/color';

const CenterModal = ({isVisible, children}) => {
  const {sizes, styles} = useStyles();
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>{children}</View>
    </Modal>
  );
};

export default CenterModal;

const useStyles = () => {
  const sizes = useSizes();

  const styles = StyleSheet.create({
    centeredView: {
      height: sizes.HEIGHT,
      width: sizes.WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
  });

  return {
    styles,
    sizes,
  };
};
