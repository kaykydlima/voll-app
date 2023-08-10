import { VStack } from 'native-base'
import FormField from './FormField'
import UButton from './UButton'

export default function LocaleCard() {
  return(
    <VStack bg='white' borderRadius='xl' p={5} shadow={2}>
      <FormField placeholder='Digite a especialidade'></FormField>
      <FormField placeholder='Digite a localização'></FormField>
      <UButton mt={4} p={4}>Buscar</UButton>
    </VStack>
  )
}