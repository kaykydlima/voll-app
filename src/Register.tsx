import { VStack, Image, Box, Checkbox, ScrollView, Text } from 'native-base'
import Logo from './assets/images/Logo.png'
import Title from './components/Title'
import FormField from './components/FormField';
import UButton from './components/UButton';
import { useState } from 'react'
import sections from './utils/TextInputRegister';

export default function Register() {
  const [sectionNumber, setSectionNumber] = useState(0)
  
  function nextSection() {
    if (sectionNumber < sections.length - 1) setSectionNumber(sectionNumber + 1)
  }
  function backSection() {
    if (sectionNumber > 0) setSectionNumber(sectionNumber - 1)
  }

  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf='center' />
      <Title color='gray.300'>{sections[sectionNumber].title}</Title>
      <Box>
        {sections[sectionNumber]?.input?.map(section => (
          <FormField label={section.label} placeholder={section.placeholder} key={section.id} />
        ))}
      </Box>
      <Box>
      <Text mt={3} mb={3} fontSize='md' color='blue.800' fontWeight='bold'>Selecione os planos:</Text>
      </Box>
      <Box>
        {
          sections[sectionNumber]?.checkbox?.map(section => (
            <Checkbox value= {section.value} key={section.id}>{section.value}</Checkbox>
          ))
        }
      </Box> 
      { sectionNumber > 0 && <UButton onPress={() => backSection()} bgColor="gray.400">Voltar</UButton> }
      <UButton onPress={() => nextSection()} mt={4} mb={5} >Avançar</UButton>
    </ScrollView>
  );
}

