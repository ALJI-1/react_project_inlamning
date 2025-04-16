
import './App.css';

import {Header} from './components/header';
import {Footer} from './components/footer';
import { BrowserRouter} from 'react-router';
import AppRouter from './routes/approuter';


function App() { 
  return (
    <>
      
      <BrowserRouter> 

      <Header/>
      <AppRouter/>
      <Footer/> 

      </BrowserRouter> 

    </>
  );
}

export default App;
