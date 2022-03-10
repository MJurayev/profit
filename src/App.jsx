import './App.scss';
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
      <main className='main'>
        <Hero />
        <Services />
        <Working />
        <Opportunity />
      </main>
      <Footer />
    </>
  );
}

export default App;
