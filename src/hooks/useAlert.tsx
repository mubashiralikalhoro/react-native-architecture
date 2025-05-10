import React, { useState } from 'react';
import AlertComponent from '../components/global/AlertComponent';

interface AlertProps {
  visible: boolean;
  onOkPress: () => void;
  onCancelPress: () => void;
  okText?: string;
  cancelText?: string;
  title?: string;
  message?: string;
}

const useAlert = () => {
  const [alertProps, setAlertProps] = useState<AlertProps | null>(null);

  const showAlert = (props: AlertProps | null) => {
    setAlertProps(props);
  };

  const Alert = () => {
    return alertProps ? <AlertComponent {...alertProps} /> : null;
  };

  return { showAlert, Alert };
};

export default useAlert;
