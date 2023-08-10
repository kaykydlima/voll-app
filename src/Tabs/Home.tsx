import { VStack, Text, ScrollView, Image, Divider } from "native-base";
import Title from "../components/Title";
import Logo from "../assets/images/Logo.png"
import LocaleCard from "../components/LocaleCard";

export default function Consultation() {
  return (
    <ScrollView>
      <VStack flex={1} p={5}>
        <VStack>
          <Image source={Logo} mt={3}></Image>
          <Title color='blue.500' fontSize='3xl' mb={6}>Boas-vindas!</Title>
          <LocaleCard />
        </VStack>
        <VStack alignItems='center'>
          <Title color='blue.800' fontSize='3xl'>Depoimentos</Title>
          <Text mt={3} color="gray.300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, cupiditate cum laborum numquam ullam atque. Vitae repudiandae, nihil totam aliquid fuga minima neque accusantium error laboriosam officiis odio optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, cupiditate cum laborum numquam ullam atque. Vitae repudiandae, nihil totam aliquid fuga minima neque accusantium error laboriosam officiis odio optio?
          </Text>
          <Text color='gray.500' fontWeight='bold' fontSize='md' mt={2} mb={5}>Júlio, 40 anos, São Paulo/SP</Text>
          <Divider />
          <Text mt={3} color="gray.300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, cupiditate cum laborum numquam ullam atque. Vitae repudiandae, nihil totam aliquid fuga minima neque accusantium error laboriosam officiis odio optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, cupiditate cum laborum numquam ullam atque. Vitae repudiandae, nihil totam aliquid fuga minima neque accusantium error laboriosam officiis odio optio?
          </Text>
          <Text color='gray.500' fontWeight='bold' fontSize='md' mt={2} mb={5}>Júlio, 40 anos, São Paulo/SP</Text>
          <Divider />
          <Text mt={3} color="gray.300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, cupiditate cum laborum numquam ullam atque. Vitae repudiandae, nihil totam aliquid fuga minima neque accusantium error laboriosam officiis odio optio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis, cupiditate cum laborum numquam ullam atque. Vitae repudiandae, nihil totam aliquid fuga minima neque accusantium error laboriosam officiis odio optio?
          </Text>
          <Text color='gray.500' fontWeight='bold' fontSize='md' mt={2} mb={5}>Júlio, 40 anos, São Paulo/SP</Text>
          <Divider />
        </VStack>
      </VStack>
    </ScrollView>
  )
}
