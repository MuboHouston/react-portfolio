import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import ContactForm from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    if(currentPage === 'Home') {
      return <Home />
    }
    if(currentPage === 'About') {
      return <About />
    }
    if(currentPage === 'Contact') {
      return <ContactForm />
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if(currentPage === 'Resume') {
      return <Resume />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div className='main-container'>
      <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
