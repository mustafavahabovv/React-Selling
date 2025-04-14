import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Notification from './components/Notification';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Leadership from './components/Leadership';
import Special from './components/Special';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BlogPosts from './components/BlogPosts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Products />
      <Notification />
      <FeaturedProducts />
      <About />
      <Leadership />
      <Special />
      <Services />
      <Testimonials />
      <BlogPosts />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;