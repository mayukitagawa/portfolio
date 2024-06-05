import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Gallery />
    <About />
    <Footer />
  </div>
);

export default App;
