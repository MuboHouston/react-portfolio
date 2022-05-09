import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About'
import ContactForm from './components/Contact';
// import Portfolio from './components/Portfolio'
// import Resume from './components/resume'

function App() {
  const [currentPage, setCurrentPage] = useState('About');
  
  const renderPage = () => {
    if(currentPage === 'About') {
      return <About />
    }
    if(currentPage === 'Contact') {
      return <ContactForm />
    }
    // if(currentPage === 'Portfolio') {
    //   return <Portfolio />
    // }
    // if(currentPage === 'Resume') {
    //   return <Resume />
    // }
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Nav 
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default App;
