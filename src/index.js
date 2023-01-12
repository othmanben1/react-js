import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import ChangeTitle from './ChangeTitle';
import SelectVille from './SelectVille';
import TestHook from './TestHook';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ChangeTitle/>
  </StrictMode>
);
