import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Home />
      <Footer></Footer>
    </>
  );
}

export default App;
