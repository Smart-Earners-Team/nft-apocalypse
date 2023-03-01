import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { GlobalTypes } from '../globals'

export const AppWrapper = ( {children, className }:GlobalTypes ) => {
  return (
    <ChakraProvider theme={{}}>
        <div className={className}>
          {children}
        </div>
    </ChakraProvider>
  )
}
