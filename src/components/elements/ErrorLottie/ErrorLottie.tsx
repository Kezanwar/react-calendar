import Lottie from 'lottie-react';
import React from 'react';
import ErrorAnim from '@app/assets/lottie/empty.json';

const styles = { height: '6rem' };

const ErrorLottie: React.FC = () => {
  return <Lottie style={styles} animationData={ErrorAnim} loop={true} />;
};

export default ErrorLottie;
