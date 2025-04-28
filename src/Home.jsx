import React, { useState, useEffect ,useRef} from 'react';
import UseScrollAnimation from './UseScrollAnimation';
import './Home.css'; 
import { FaArrowUp } from "react-icons/fa";
import whatsappUrl from './Whatsapp';
import Spinner from './Spinner';
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import emailjs from 'emailjs-com'

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
    const [menuOpen, setMenuOpen] = useState(false);
    const formRef = useRef();





const menuItems = [
  {
    title: 'Tiffin Treats',
    bg: '/public/menu/tiffin/main.avif',
    items: [
      { name: 'Idly', img: '/public/menu/tiffin/idly.png' },
      { name: 'Vada', img: '/public/menu/tiffin/vada.jpg' },
      { name: 'Pongal', img: '/public/menu/tiffin/pongal.webp' },
      { name: 'Upma/Kichdi', img: '/public/menu/tiffin/upma.webp' },
      { name: 'Lemon Sevai', img: '/public/menu/tiffin/lemon.webp' },
      { name: 'Cocount Sevai', img: '/public/menu/tiffin/cocount.webp' },
      { name: 'Puri', img: '/public/menu/tiffin/puri.jpeg' },
      { name: 'Plain Dosa', img: '/public/menu/tiffin/dosa.webp' },
      { name: 'Masala Dosa', img: '/public/menu/tiffin/masala.webp' },
      { name: 'Onion Dosa', img: '/public/menu/tiffin/onion.jpeg' },
      { name: 'Rava Dosa', img: '/public/menu/tiffin/rava.webp' },
      { name: 'Uthappam', img: '/public/menu/tiffin/uthappam.jpeg' },
      { name: 'Pesarattu', img: '/public/menu/tiffin/pesarattu.jpeg' },
      { name: 'Alu Masala', img: '/public/menu/tiffin/aloo.jpeg' },
      { name: 'Sambar', img: '/public/menu/tiffin/sambar.jpeg' },
      { name: 'Cocount Chutney', img: '/public/menu/tiffin/coconut chutney.jpeg' },
      { name: 'Tomato Chutney', img: '/public/menu/tiffin/tomato.jpeg' },
      { name: 'Pudina Chutney', img: '/public/menu/tiffin/pudina.jpeg' },
      { name: 'Allam Chutney (Ginger)', img: '/public/menu/tiffin/allam.jpeg' },
    ],
  },
  {
    title: 'Curries & Masalas',
    bg: '/public/menu/curries/main.avif',
    items: [
        { name: 'Vazhakai Podimass', img: '/public/menu/curries/vazhakkai.webp' },
        { name: 'Mix Veg Cocount Curry', img: '/public/menu/curries/mixveg.jpeg '},
        { name: 'Beans Paruppusli', img: '/public/menu/curries/paruppu usli.jpeg' },
        { name: 'Aloo Kara Curry', img: '/public/menu/curries/aloo.jpeg' },
        { name: 'Any Kootu', img: '/public/menu/curries/kootu.jpeg' },
        { name: 'Avial', img: '/public/menu/curries/avial.jpeg' },
        { name: 'Olan', img: '/public/menu/curries/olan.jpeg' },
        { name: 'Vankaya Karampatti', img: '/public/menu/curries/karampatti.jpeg' },
        { name: 'Guthi Vankaya', img: '/public/menu/curries/guthi.jpeg' },
        { name: 'Paneer Butter Masala', img: '/public/menu/curries/buttermasala.jpeg' },
        { name: 'Kadai Paneer', img: '/public/menu/curries/kadai.jpeg' },
        { name: 'Shahi Paneer', img: '/public/menu/curries/shahi.jpeg' },
        { name: 'Mutter Paneer', img: '/public/menu/curries/mutter.jpeg' },
        { name: 'Palak Paneer', img: '/public/menu/curries/palak.jpeg' },
        { name: 'Paneer Tikka Masala', img: '/public/menu/curries/tikka.jpeg' },
        { name: 'Bagara Baingan', img: '/public/menu/curries/bagara.jpeg' },        
        { name: 'Mirchi Ka Salan', img: '/public/menu/curries/mirchi.jpeg' },
        { name: 'Mix Veg Kurma', img: '/public/menu/curries/mixvegkurma.jpeg' },
        { name: 'Chole Masala', img: '/public/menu/curries/chole.jpeg' },
        { name: 'Malai Koftha', img: '/public/menu/curries/kofta.jpeg' },
        { name: 'Capsicum Masala', img: '/public/menu/curries/capsicum.jpeg' },
        { name: 'Navarathna Kurma', img: '/public/menu/curries/navaratna.jpeg' },
        { name: 'Tawa Sabhji', img: '/public/menu/curries/tawasabji.jpeg' },
        { name: 'Dal Thadka', img: '/public/menu/curries/daltadka.jpeg' },
        { name: 'Dal Makhani', img: '/public/menu/curries/dalmakhani.jpeg' },

    ],
  },
  {
    title: 'Flavors of Rice',
    bg: '/public/menu/rice/main.avif',
    items: [
        { name: 'Tamarind Rice (Pulihora)', img: '/public/menu/rice/pulihora.jpeg' },
      { name: 'Cocount Rice', img: '/public/menu/rice/coconut.jpeg' },
      { name: 'Lemon Rice', img: '/public/menu/rice/lemon.jpeg' },
      { name: 'Pudina Rice', img: '/public/menu/rice/pudina.jpeg' },
      { name: 'Tomato Rice', img: '/public/menu/rice/tomato.jpeg' },
      { name: 'White Rice', img: '/public/menu/rice/white.jpeg' },
      { name: 'Curd Rice', img: '/public/menu/rice/curd.jpeg' },
      { name: 'Bisibelabath (Sambar Rice)', img: '/public/menu/rice/bisibelabath.jpeg' },
      { name: 'Veg Fried Rice', img: '/public/menu/rice/fried.jpeg' },
      { name: 'Jeera Rice', img: '/public/menu/rice/jeera.jpeg' },
      { name: 'Veg Pulao', img: '/public/menu/rice/pulao.jpeg'},
      { name: 'Veg Dum Biryani', img: '/public/menu/rice/dumbiryani.jpeg' },
    ],
  },
  {
    title: 'Quick Bites',
    bg: '/public/menu/snacks/main.avif',
    items: [
        { name: 'Aloo Bonda', img: '/public/menu/Snacks/aloobonda.jpeg' },
      { name: 'Aloo Samosa', img: '/public/menu/Snacks/aloosamosa.jpeg' },
      { name: 'Onion Samosa', img: '/public/menu/Snacks/onion.jpeg' },
      { name: 'Corn Samosa', img: '/public/menu/Snacks/corn.jpeg' },
      { name: 'Vazhakai Bhajji', img: '/public/menu/Snacks/vazhakkai.jpeg' },
      { name: 'Aloo Bhajji', img: '/public/menu/Snacks/aloobhajji.jpeg' },
      { name: 'Mirchi Bhajji', img: '/public/menu/Snacks/mirchi.jpeg' },
      { name: 'Onion Pakoda', img: '/public/menu/Snacks/onionpakoda.jpeg' },
      { name: 'Palak Pakoda', img: '/public/menu/Snacks/palakpakoda.jpeg' },
      { name: 'Mixture', img: '/public/menu/Snacks/mixture.jpeg' },
      { name: 'Dokla', img: '/public/menu/Snacks/dokla.jpeg' },
      { name: 'Kuzhi Paniyaram', img: '/public/menu/Snacks/kuzhi.webp' },
    ],
  },
  {
    title: 'Flavorsome Appetizers',
    bg: '/public/menu/starters/main.avif',
    items: [
        { name: 'Veg Manchurian', img: '/public/menu/starters/manchuria.jpeg' },
      { name: 'Spring Roll', img: '/public/menu/starters/spring roll.jpeg' },
      { name: 'Hara Bara Kabab', img: '/public/menu/starters/harabara.jpeg' },
      { name: 'Cheese balls', img: '/public/menu/starters/cheeseballs.jpeg' },
      { name: 'Gold Coin', img: '/public/menu/starters/goldcoin.jpeg' },
      { name: 'Veg Bullets', img: '/public/menu/starters/bullets.jpeg' },
      { name: 'Veg Lollipop', img: '/public/menu/starters/lollipop.jpeg' },
      { name: 'Crispy Corn', img: '/public/menu/starters/crispy corn.jpeg' },
      { name: 'Chilly Paneer', img: '/public/menu/starters/chilly.jpeg' },
      { name: 'Paneer 65', img: '/public/menu/starters/65.jpeg' },
      { name: 'Paneer Tikka', img: '/public/menu/starters/tikka.jpeg' },
    ],
  },
  {
    title: 'Mithai Magic',
    bg: '/public/menu/sweets/main.avif',
    items: [
      { name: 'Pal Payasam', img: '/public/menu/sweets/palpayasam.jpeg' },
      { name: 'Pal Adai Pradhamam Payasam', img: 'public/menu/sweets/paladai.jpeg' },
      { name: 'Chekka Pradhamam Payasam', img: 'public/menu/sweets/chekka.jpeg' },
      { name: 'Sadhasadhayam', img: 'public/menu/sweets/sadhasadhayam.jpeg' },
      { name: 'Semiya Payasam', img: 'public/menu/sweets/semiya.jpeg' },
      { name: 'Kadalai Paruppu Payasam', img: 'public/menu/sweets/kadalai.webp' },
      { name: 'Elaneer Pal Payasam', img: 'public/menu/sweets/elaneer.jpeg' },
      { name: 'Sakkarai Pongal', img: 'public/menu/sweets/sakkarai pongal.jpeg' },
      { name: 'Poli (Bobbatlu)', img: 'public/menu/sweets/poli.jpeg' },
        { name: 'Laddu', img: 'public/menu/sweets/laddu.jpeg' },
        { name: 'Rava Laddu', img: 'public/menu/sweets/rava.jpg' },
        { name: 'Dry Fruit Laddu', img: 'public/menu/sweets/dryfruit.jpeg' },
        { name: 'Mothichoor Laddu', img: 'public/menu/sweets/motichoor.jpeg' },
      { name: 'Badusha', img: 'public/menu/sweets/badhusha.jpeg' },
      { name: 'Mysore Pak', img: 'public/menu/sweets/mysore.jpeg' },
      { name: 'Jaangri', img: 'public/menu/sweets/jangri.jpeg' },
      { name: 'Jilebi', img: 'public/menu/sweets/jilebi.jpeg' },
      { name: 'Malpua', img: 'public/menu/sweets/malpua.webp' },
      { name: 'Booralu', img: 'public/menu/sweets/booralu.jpeg' },
      { name: 'Gulab Jamun', img: 'public/menu/sweets/gulab.jpeg' },
      { name: 'Kaala Jamun', img: 'public/menu/sweets/kala.jpeg' },
      { name: 'Rasmalai', img: 'public/menu/sweets/rasmalai.jpeg' },
      { name: 'Angoor Rasmalai', img: 'public/menu/sweets/angoor.jpeg' },
      { name: 'Rasgulla', img: 'public/menu/sweets/rasgulla.jpeg' },
      { name: 'Tawa Sweet', img: 'public/menu/sweets/tawa.jpeg' },
      { name: 'Double ka Meeta', img: 'public/menu/sweets/double.jpeg' },
      { name: 'Qurbani ka Meeta', img: 'public/menu/sweets/qurbani.jpeg' },
      { name: 'Gajar ka Halwa', img: 'public/menu/sweets/gajar.jpeg' },
      { name: 'Beetroot Halwa', img: 'public/menu/sweets/beetroot.jpeg' },
      { name: 'Ashoka Halwa', img: 'public/menu/sweets/ashoka.jpeg' },
      { name: 'Kasi Halwa', img: 'public/menu/sweets/kasi.jpeg' },
      { name: 'Badam Halwa', img: 'public/menu/sweets/badam.jpeg' },
      { name: 'Rava Kesari', img: 'public/menu/sweets/rava.jpg' },
      { name: 'Pineapple Kesari', img: 'public/menu/sweets/pineapple.jpeg' },
    ],
  },
  // add more categories...
];

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_r7v91pf', 'template_t4s45ea', formRef.current, '-CqSKyyEngNbrTVX3')
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent!');
      },
      (error) => {
        console.error('Email send error:', error.text);
        alert('Failed to send message. Please try again later.');
      }
    );}
const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



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
      {/* Hamburger visible only on small screens */}
      <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />

      {/* Navigation Links */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {/* Close Button visible only on small screens */}
        <IoIosCloseCircle className="close-btn" onClick={toggleMenu} />
        
        {['home', 'services', 'menu', 'memories', 'about', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={activeSection === section ? 'nav-link active' : 'nav-link'}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
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
        Welcome to<span className="text-orange">ㅤIyer Caterers</span>
      </h2>
      <h2>Where Purity Meets Flavor.</h2>
      <p>Pure vegetarian catering, passionately crafted for your most cherished occasions.</p>
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
              <h4>Wedding Feasts</h4>
              <p>Banana leaf feasts crafted for your special day,  
              where tradition meets timeless taste and celebration.</p>
            </div>
            <div className="service event-bg">
              <h4>Sacred Ceremonies</h4>
              <p>Signature menus for poojas, upanayanams, and grihapravesams,  
              crafted to honor your most treasured traditions.</p>
            </div>
            <div className="service outdoor-bg">
              <h4>Traditional Buffet</h4>
              <p>Elegant buffet spreads designed for receptions, corporate meets,  
              and grand celebrations with a traditional touch.</p>
            </div>
            <div className="service family-bg">
              <h4>Home Celebrations</h4>
              <p>Delicious meals lovingly crafted for birthdays, anniversaries,  
              and intimate family gatherings at your home.</p>
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
            <p>Bringing you the best of taste with a variety of pure vegetarian dishes for every occasion.</p>

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
            <h3>A Glimpse Into Our Stories</h3>
            <p>Every event we cater brings alive the rich traditions of our culture — with sacred paruppu thengai, golu bommai displays, and timeless flavors.</p>
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
    <h3>Who Are We?</h3>
    <p>
    We, Iyer Caterers, blend tradition and love, offering authentic vegetarian cuisine made with the finest ingredients for your cherished moments.
    </p>

    <div className="about-content">
      <div className="about-text">
        <div className="point">
          <h4>On-Time, Every Time</h4>
          <p>Every celebration deserves perfect timing — hot, fresh meals served right on time, every time.</p>
        </div>
        <div className="point">
          <h4>Taste That Creates Memories</h4>
          <p>Crafted with passion, every bite brings authentic flavors that stay with you.</p>
        </div>
        <div className="point">
          <h4>Service with Soul</h4>
          <p>Serving every meal with care, devotion, and a personal touch.</p>
        </div>
        <div className="point">
          <h4>Hygiene Without Compromise</h4>
          <p>From kitchen to table, we ensure top-notch hygiene — because purity is our first promise.</p>
        </div>
      </div>

      <div className="about-image">
        <img src="/background.jpg" alt="Iyengar Catering" />
      </div>
    </div>
  </div>
</section>

  
        {/* contact Section */}
       {/* contact Section */}
       <section
  id="contact"
  ref={contactRef}
  // className={contactVisible ? 'section-visible' : 'section-hidden'}
  className='contact'
>
  <div className="container">
    <h3>Contact Us</h3>
    <form ref={formRef} onSubmit={handleSubmit}>
  <input type="text" name="user_name" placeholder="Name" />
  <input type="email" name="user_email" placeholder="Email" />
  <textarea name="message" placeholder="Message"></textarea>
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
      <li>📞 <a href="tel:+919500660829">+91 9391040942</a></li>
      <li>📞 <a href="tel:+919500660829">+91 9849315819</a></li>
      <li>📞 <a href="tel:+919500660829">+91 7780292074</a></li>
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
  