import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export const AppWrapper = ( {children}:any ) => {
  return (
    <ChakraProvider theme={{}}>
        {children}
    </ChakraProvider>
  )
}
