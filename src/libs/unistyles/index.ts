import { UnistylesRegistry } from 'react-native-unistyles'
import { defaultTheme } from './themes'
//import { breakpoints } from './breakpoints'
//import { lightTheme, darkTheme } from './themes'

//type AppBreakpoints = typeof breakpoints

type AppThemes = {
  default: typeof defaultTheme
  //light: typeof lightTheme,
  //dark: typeof darkTheme
}

declare module 'react-native-unistyles' {
  //export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry
  //.addBreakpoints(breakpoints)
  .addThemes({
   default: defaultTheme
  })
  .addConfig({
    initialTheme: 'default',
    adaptiveThemes: true
  })