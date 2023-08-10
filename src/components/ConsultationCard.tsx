import { Text, Avatar, VStack } from 'native-base'
import UButton from './UButton'

interface IProps {
  name: string,
  photo: string,
  especiality: string,
  date?: string,
  wasAnswered?: boolean,
  wasScheduled?: boolean
}

export default function ConsultationCard({name, photo, especiality, date, wasAnswered, wasScheduled}: IProps) {
  return(
    <VStack w='100%' bg={wasAnswered ? 'blue.200' : 'white'} p={5} borderRadius='lg' shadow={2} mb={5}>
      <VStack flexDirection='row'>
        <VStack>
          <Avatar source={{uri: photo}} size='lg'/>
        </VStack>
        <VStack pl={4}>
          <Text fontSize='md' fontWeight='bold'>{ name }</Text>
          <Text>{ especiality }</Text>
          <Text>{ date }</Text>
        </VStack>
      </VStack>
      <UButton mt={4}>{wasScheduled ? 'Cancelar consulta' : 'Agendar consulta'}</UButton>
    </VStack>
  )
}