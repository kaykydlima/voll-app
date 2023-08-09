import { Text, ITextProps } from 'native-base'

interface IProps extends ITextProps {
  children: React.ReactNode
}

export default function Title({ children, ...rest }: IProps) {
  return (
    <Text 
      fontSize='2xl'
      fontWeight='bold'
      mt={5}
      {...rest}
    >
      {children}
    </Text>
  )  
} 
