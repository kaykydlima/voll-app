import { StatusBar, NativeBaseProvider } from 'native-base'
import { THEME } from './src/assets/styles/themes';
import Routes from './src/Routes';


export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.blue[800]}/>
      <Routes />
    </NativeBaseProvider>
  )
}