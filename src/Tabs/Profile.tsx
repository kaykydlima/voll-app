import { VStack, ScrollView, Text, Avatar, Divider } from "native-base";
import Title from "../components/Title";

export default function Profile() {
  return (
    <ScrollView flex={1} p={5}>
      <VStack flex={1} alignItems='center'>
        <Title fontSize='3xl' color='blue.500' mb={4}>Meu Perfil</Title>
        <Avatar source={{uri:"https://github.com/kaykydlima.png"}} mb={4} size="lg"/>
        <Title fontSize='xl' color='blue.500'>Informações pessoais</Title>
        <Text mt={2} fontSize='lg' color='gray.500' fontWeight='bold'>Kayky de Lima</Text>
        <Text mt={1} fontSize='md' color={'gray.500'}>28/05/1990</Text>        
        <Text mt={1} mb={8} fontSize='md' color={'gray.500'}>São Paulo - SP</Text>        
        <Divider />
        <Title fontSize='xl' color='blue.500'>Histórico médico</Title>
        <Text>Bronquite</Text>
        <Text>Sinusite</Text>

        
      </VStack>
    </ScrollView>
  )
}
