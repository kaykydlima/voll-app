import { VStack, Image, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/images/Logo.png'
import Title from './components/Title'
import FormField from './components/FormField';
import UButton from './components/UButton';

export default function Login({ navigation }) {
  return (
    <VStack flex={1} alignItems='center' p={5} justifyContent='center'>
      <Image source={Logo} alt="Logo Voll" />
      <Title color='gray.300'>Faça o seu login</Title>
      <Box>
        <FormField label="Email" placeholder="Insira seu endereço de email" />
        <FormField label="Senha" placeholder="Insira seu endereço de senha" />
      </Box>
      <UButton onPress={() => navigation.navigate('Tabs')}>Entrar</UButton>
      <Link href='https://google.com'
      justifyContent='center' marginTop={2}>Esqueceu sua senha?</Link>
      <Box 
        w='100%' 
        flexDirection='row'
        justifyContent='center'
        gap={1}
        marginTop={8}
      >
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text color='blue.500'>Faça seu cadastro!</Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}

