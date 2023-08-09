import { FormControl, Input } from "native-base"

interface IProps {
  label: string,
  placeholder: string,
  secureTextEntry?: boolean,
  leftIcon?: React.ReactNode
}

export default function FormField({label, placeholder, secureTextEntry = false}: IProps) {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        size="lg"
        w="100%"
        borderRadius="lg"
        shadow={3}
        bgColor="gray.100"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </FormControl>
  )
}
