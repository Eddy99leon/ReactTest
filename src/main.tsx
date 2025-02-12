import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
