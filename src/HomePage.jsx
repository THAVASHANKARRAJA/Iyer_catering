import React, { useState, useEffect } from 'react';
import UseScrollAnimation from './UseScrollAnimation';
import './HomePage.css'; 
import { FaArrowUp } from "react-icons/fa";
import whatsappUrl from './Whatsapp';
import Spinner from './Spinner';


const HomePage = () => {
    const [scrolled, setScrolled] = useState(false);
    const [aboutRef, aboutVisible] = UseScrollAnimation();
    const [servicesRef, servicesVisible] = UseScrollAnimation();
    const[menuRef,menuVisible] = UseScrollAnimation();
    const[memoriesRef,memoriesVisible] = UseScrollAnimation();
    const [contactRef, contactVisible] = UseScrollAnimation();
    const [, setContactVisiblity] = useState(false);
    const [showContactDialog, setShowContactDialog] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [activeSection, setActiveSection] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const backgroundUrl = '/src/background.jpg';


const menuItems = [
  {
    title: 'Breakfast',
    bg: '/items/menu1.jpg',
    items: [
      { name: 'Item1', img: '/items/menu1.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
    ],
  },
  {
    title: 'Lunch',
    bg: '/items/menu2.jpg',
    items: [
        { name: 'Item1', img: '/items/menu1.jpg' },
        { name: 'Item2', img: '/items/menu2.jpg' },
    ],
  },
  {
    title: 'Dinner',
    bg: '/items/menu2.jpg',
    items: [
        { name: 'Item1', img: '/items/menu1.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
    ],
  },
  {
    title: 'Snacks',
    bg: '/items/menu2.jpg',
    items: [
        { name: 'Item1', img: '/items/menu1.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
    ],
  },
  {
    title: 'Starters',
    bg: '/items/menu2.jpg',
    items: [
        { name: 'Item1', img: '/items/menu1.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
    ],
  },
  {
    title: 'Sweets',
    bg: '/items/menu2.jpg',
    items: [
        { name: 'Item1', img: '/items/menu1.jpg' },
      { name: 'Item2', img: '/items/menu2.jpg' },
    ],
  },
  // add more categories...
];




useEffect(() => {
  const sections = ['home', 'services', 'menu', 'memories', 'about', 'contact'];
  const observers = [];

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(section);
      observers.push(observer);
    }
  });

  return () => {
    observers.forEach((observer) => observer.disconnect());
  };
}, []);

    
useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactVisiblity(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Adjust based on when you want the button to appear
      }
    );
  
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
  
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const backToTopBtn = document.getElementById('backToTop');
      
        const handleScroll = () => {
          if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
          } else {
            backToTopBtn.classList.remove('show');
          }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
  
    return (
      <>
      {isLoading ? <Spinner/>:(<div className="homepage fade-in">
        {/* Navbar */}
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="container">
          <h1 className="brand">
  <img src="/image copy 2.png" alt="Iyer Caterers Logo" className="logo" />
  <span className="brand-text">IYER CATERERS</span>
</h1>
<nav>
  {['home', 'services', 'menu', 'memories', 'about', 'contact'].map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className={activeSection === section ? 'nav-link active' : 'nav-link'}
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
  ))}
</nav>
          </div>
        </header>
  
        {/* Hero Section */}
        <section id="home" className="hero">
  <div className="hero-bg" />
  <div className="overlay">
  <div className="hero-content">
    <div className="hero-text">
      <h2>
        Welcome to <span className="text-orange">Iyer Caterers</span>
      </h2>
      <h2>Pure. Traditional. Iyer Catering.</h2>
      <p>Delicious South Indian vegetarian meals for every occasion.</p>
    </div>
    <div className="hero-image pop-in">
      <img src="/ganesha.png" alt="Delicious South Indian Meal" />
    </div>
  </div>
  </div>
</section>


  
        {/* Services Section */}
        <section
          id="services"
          ref={servicesRef}
          className={`services ${servicesVisible ? 'section-visible' : 'section-hidden'}`}
        >
          <div className="container">
            <div className="service wedding-bg" >
              <h4>Wedding Catering</h4>
              <p>Traditional full meals served on banana leaves.</p>
            </div>
            <div className="service event-bg">
              <h4>Event Catering</h4>
              <p>Custom menus for your pooja, upanayanam, or grahapravesam.</p>
            </div>
            <div className="service outdoor-bg">
              <h4>Outdoor Catering</h4>
              <p>Get freshly prepared Iyengar meals delivered to your doorstep.</p>
            </div>
            <div className="service family-bg">
              <h4>Family event catering</h4>
              <p>Get freshly prepared Iyengar meals delivered to your doorstep.</p>
            </div>
          </div>
        </section>

 
           {/* Menu Section */}
           <section
          id="menu"
          ref={menuRef}
          className={`menu ${menuVisible ? 'section-visible' : 'section-hidden'}`}
        >
          <div className="container">
            <h3>What we offer?</h3>
            <p>We offer a wide range of loream epsum</p>

            <div className="menu-grid">
  {menuItems.map((item, index) => (
    <div
      className="menu-card"
      key={index}
      style={{ backgroundImage: `url(${item.bg})` }}
      onClick={() => setActiveCard(item)}
    >
      <div className="menu-card-title">{item.title}</div>
    </div>
  ))}
</div>
{activeCard && (
  <div className="modal-overlay" onClick={() => setActiveCard(null)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setActiveCard(null)}>✕</button>
      <h2>{activeCard.title}</h2>
      <ul className="modal-list">
        {activeCard.items.map((item, i) => (
          <li key={i}>
            <span>{item.name}</span>
            <img src={item.img} alt={item.name} />
          </li>
        ))}
      </ul>
    </div>
  </div>
)}

          </div>
        </section>


        
           {/* Memories Section */}
           <section
          id="memories"
          ref={memoriesRef}
          className={`memories ${memoriesVisible ? 'section-visible' : 'section-hidden'}`}
        >
          <div className="container">
            <h3>Our best moments</h3>
            <p>Ryoiki tenkai</p>
            <div className="image-grid">
  {[...Array(9)].map((_, i) => (
    <div className="image-card" key={i}>
      <img src={`/images/memory${i + 1}.jpg`} alt={`Memory ${i + 1}`} />
    </div>
  ))}
</div>

          </div>
        </section>

        {/* About us Section */}
        <section
  id="about"
  ref={aboutRef}
  className={`about ${aboutVisible ? 'section-visible' : 'section-hidden'}`}
>
  <div className="container">
    <h3>About Us</h3>
    <p>
      We specialize in authentic Iyengar catering for weddings, events, and more. Pure vegetarian meals prepared with devotion and tradition.
    </p>

    <div className="about-content">
      <div className="about-text">
        <div className="point">
          <h4>Tradition You Can Taste</h4>
          <p>Rooted in the rich culinary heritage of Iyengar cuisine.</p>
        </div>
        <div className="point">
          <h4>Pure Vegetarian Delights</h4>
          <p>Prepared with fresh, sattvic ingredients for purity and flavor.</p>
        </div>
        <div className="point">
          <h4>Perfect for Every Occasion</h4>
          <p>Weddings, housewarmings, poojas, and custom events covered.</p>
        </div>
        <div className="point">
          <h4>Devotion in Every Dish</h4>
          <p>Food is prepared with care, devotion, and spiritual significance.</p>
        </div>
      </div>

      <div className="about-image">
        <img src="/background.jpg" alt="Iyengar Catering" />
      </div>
    </div>
  </div>
</section>

  
        {/* contact Section */}
        <section
  id="contact"
  ref={contactRef}
  className={`contact ${contactVisible ? 'section-visible' : 'section-hidden'}`}
>
  <div className="container">
    <h3>Contact Us</h3>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
</section>


         {/* WhatsApp Button */}
        
 <div className="whatsapp-button">
 <a
  href={whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-button"
>
  <img src="/image copy.png" alt="WhatsApp" />
</a>
  {/* Floating button that appears over WhatsApp in the contact section */}
  {contactVisible && (
    <>
      <div
        className="floating-contact-btn"
        onClick={() => setShowContactDialog(!showContactDialog)}
      >
        <img src="/phone.png" alt="Contact" />
      </div>
      {showContactDialog && (
  <div className="contact-dialog">
    <button className="close-btn" onClick={() => setShowContactDialog(false)}>
      &times;
    </button>
    <h4>Contact Numbers</h4>
    <ul>
      <li>📞 <a href="tel:+919500660829">+91 9500660829</a></li>
      <li>📞 <a href="tel:+919500660829">+91 9500660829</a></li>
      <li>📞 <a href="tel:+919500660829">+91 9500660829</a></li>
    </ul>
  </div>
)}

    </>
  )}
</div>


  
        {/* Footer */}
        <footer >
          © 2025 Iyer Caterers. All rights reserved. Developed by @Wildbeans, Arun. A T & Vishal. M
        </footer>


        <button id="backToTop" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
</button>

      </div>)} 
      </>
    );
  };
  
  export default HomePage;
  