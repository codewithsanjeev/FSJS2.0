import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <div className='card-section site-width mx-auto'>

        <Cards name={'Hitesh Choudhary'} desc={'The Coolest Person I have ever seen.'} url={'./images/hitesh.jpeg'} />

        <Cards name={'Anurag Tiwari'} desc={'The Coolest Person I have ever seen.'} url={'./images/anurag.jpeg'} />

        <Cards name={'Sanjeev Pratap Singh'} desc={'The Coolest Person I have ever seen.'} url={'./images/sanjeev.jpeg'} />

      </div>

      <Footer />
    </>
  );
}

export default App;
