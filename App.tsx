import 'expo-dev-client';
import '@/libs/unistyles'
import { Home } from '@/screens/home';

import {  Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Loading } from '@/components/loading';


export default function App() {

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />
  }


  return (
    <>
      <StatusBar translucent backgroundColor='transparent'  />
      <Home />
    </>
  )
}


