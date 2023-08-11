import { VStack, Text, ScrollView } from "native-base";
import LocaleCard from "../components/LocaleCard";
import Title from "../components/Title";
import ConsultationCard from "../components/ConsultationCard";

export default function Search() {
  return (
    <ScrollView>
      <VStack p={5}>
        <LocaleCard></LocaleCard>
        <Title color="blue.500" fontSize='3xl' textAlign='center' mb="5">Resultado da Busca</Title>
        <ConsultationCard 
          name="Dr. Drauzio Varela"
          photo="https://github.com/kaykydlima.png"
          especiality="Nutricionista"
          ></ConsultationCard>
      </VStack>
    </ScrollView>
  )
}
