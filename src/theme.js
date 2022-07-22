// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode:'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
    colors: {
        primary: {
         main: "#FE9796",
         women: "#F7F7F7",
         100: "#bbdefb",
         200: "#90caf9",
         300: "#64b5f6",
         400: "#42a5f5",
         500: "#2196f3",
         600: "#1e88e5",
         700: "#1976d2",
         800: "#1565c0",
         900: "#0d47a1"
       }
     }
 })

export default theme