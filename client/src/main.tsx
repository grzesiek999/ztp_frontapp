import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {UserContextProvider} from "./context/UserContext.tsx";
import "./styles/index.scss";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <UserContextProvider>
          <App />
      </UserContextProvider>
  </StrictMode>,
)
