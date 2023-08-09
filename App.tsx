import Login from './src/Login'
import { StatusBar, NativeBaseProvider } from 'native-base'
import { THEME } from './src/assets/styles/themes';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar backgroundColor={THEME.colors.blue[800]}/>
      <Login />
    </NativeBaseProvider>
  );
}