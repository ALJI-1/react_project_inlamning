import './App.css';
import {Header} from './components/header';
import {Footer} from './components/footer';
import { BrowserRouter} from 'react-router';
import AppRouter from './routes/approuter';
import YouTubePlayer from './components/musicplayer';

function App() { 

  return (
    <>

       <BrowserRouter> 

       <YouTubePlayer /> 
      
       <Header/>
       <AppRouter/>
       <Footer/> 

       </BrowserRouter> 

    </>
  );
}

export default App;
