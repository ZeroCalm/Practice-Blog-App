import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Header from './header';
import Content from './content';
import Footer from './footer';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <Content />
        <Footer />
     </div> 
   );
  }
}

export default App;
