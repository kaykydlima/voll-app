import React from 'react';
import { Button } from 'native-base';

interface IProps {
  onPress?: () => void;
  children: React.ReactNode;
}

const UButton: React.FC<IProps> = ({ onPress, children, ...rest }) => {
  return (
    <Button
      bgColor='blue.800'
      mt={10}
      borderRadius='lg'
      onPress={onPress}
      w='100%'
      {...rest}
    >
      {children}
    </Button>
  )
}

export default UButton;
