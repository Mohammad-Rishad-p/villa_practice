import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className=" w-full h-screen bg-blend-darken bg-cover bg-black bg-opacity-75 bg-no-repeat bg-[url(https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4526/1534526-v-ebf6f46b5514)]">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
