import { ColorModeScript ,ChakraProvider,theme} from '@chakra-ui/react';
import React ,{ StrictMode } from 'react';

import ReactDOM from 'react-dom/client';
import ColorModeSwitcher from './ColorModeSwitcher';
import App from './App';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
       <ColorModeScript />
    <ChakraProvider theme={theme}>
 <ColorModeSwitcher />

    <App />
    </ChakraProvider>
  </StrictMode>
);

export const Server="https://api.coingecko.com/api/v3";

