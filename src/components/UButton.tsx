import { Button } from 'native-base'

interface IProps {
    children: React.ReactNode
}

export default function UButton({ children }: IProps) {
    return(
        <Button bgColor='blue.800' mt='10' borderRadius='lg'>{ children }</Button>
    )
}