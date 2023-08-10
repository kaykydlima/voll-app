import { VStack, Divider, ScrollView } from "native-base";

import ConsultationCard from "../components/ConsultationCard";
import Title from "../components/Title";
import UButton from "../components/UButton";

export default function Consultation() {
  return (
    <ScrollView>
      <VStack p={5} flex={1}>
        <Title color='blue.500' fontSize='3xl' textAlign='center'>Minhas consultas</Title>
        <UButton p={4} mb={3} mt={5}>Agendar outra consulta</UButton>
        <Title color='blue.500' fontSize='xl' mb={3}>Próximas consultas</Title>
        <ConsultationCard 
          name='Dr. Hans Chucrute'
          especiality='Cardioogista'
          date='20/08/2023'
          photo='https://github.com/kaykydlima.png'
          wasScheduled
        />
        <Divider mt={5}/>
        <Title color='blue.500' fontSize='xl' mb={3}>Consultas Passadas</Title>
        <ConsultationCard 
          name='Dr. Hans Chucrute'
          especiality='Cardioogista'
          date='17/08/2023'
          photo='https://github.com/kaykydlima.png'
          wasAnswered
        />
        <ConsultationCard 
          name='Dr. Hans Chucrute'
          especiality='Cardioogista'
          date='17/08/2023'
          photo='https://github.com/kaykydlima.png'
          wasAnswered
        />
        <ConsultationCard 
          name='Dr. Hans Chucrute'
          especiality='Cardioogista'
          date='17/08/2023'
          photo='https://github.com/kaykydlima.png'
          wasAnswered
        />
      </VStack>
    </ScrollView>
  )
}
