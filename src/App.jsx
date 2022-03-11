import './App.scss';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Opportunity from './components/Opportunity/Opportunity';
import Services from './components/Services/Services';
import Working from './components/Working/Working';

function App() {
  return (
    <>
      <Header />
      
        <Hero />
      <div className='main'>
        <Services />
        <Working />
        <Opportunity />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
