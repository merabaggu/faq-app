import React,{useEffect,useRef,useState} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";


import {
  ChakraProvider,theme
} from '@chakra-ui/react';
import { NavBar } from './NavBar';
import { Faq } from './Faq';
import {scroller} from 'react-scroll';

function App() {
  const alanBtnInstance = useRef(null);
  const [index,setIndex] = useState(null)

useEffect(() => {
    if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
            key: 'ab880f2b99d0f2bcca81e88a0988a6e12e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                if (commandData.command === 'gotoFaq') {
                  scroller.scrollTo(`accodion-item-${commandData.faqId}`,{
                    duration: 1000,
                    delay: 0,
                    smoth: 'easeInOutQuart'
                  })
                  setIndex(commandData.faqId - 1)
                        // Call the client code that will react to the received command
                    }
                }
        });
    }
}, []);
  return (
    <ChakraProvider theme={theme}>
        <NavBar />
        <Faq index={index} setIndex={setIndex}/>
    </ChakraProvider>
  )
}

export default App;
