import logo from './logo.svg';
import './App.css';
import {Homepage} from'./pages/homepage';
import {Header} from './components/header';
import {Footer} from './components/footer';
import {ArtistList} from './components/artistList';
import {Detailpage} from './pages/detailpage';

function App() {
  return (
    <>
      <Header/>
      <Homepage/>
      <Footer/>

      {/* <Header/>
      <ArtistList/>
      <Footer/> */}

      {/* <Header/>
      <Detailpage/>
      <Footer/> */}
    </>
  );
}

export default App;
