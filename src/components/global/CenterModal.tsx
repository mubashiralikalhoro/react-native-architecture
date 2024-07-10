import {View, Modal, StyleSheet} from 'react-native';
import {useSizes} from '../../constants/size';
import {useMemo} from 'react';

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};

const CenterModal = ({isVisible, children}: Props) => {
  const {styles} = useStyles();
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>{children}</View>
    </Modal>
  );
};

export default CenterModal;

const useStyles = () => {
  const sizes = useSizes();

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
      }),
    [sizes],
  );

  return {
    styles,
    sizes,
  };
};
