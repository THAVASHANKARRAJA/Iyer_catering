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
    bg: '/menu/tiffin/main.avif',
    items: [
      { name: 'Idly', img: '/menu/tiffin/idly.png' },
      { name: 'Vada', img: '/menu/tiffin/Vada.jpg' },
      { name: 'Pongal', img: '/menu/tiffin/Pongal.webp' },
      { name: 'Upma/Kichdi', img: '/menu/tiffin/Upma.webp' },
      { name: 'Lemon Sevai', img: '/menu/tiffin/Lemon.webp' },
      { name: 'Cocount Sevai', img: '/menu/tiffin/Cocount.webp' },
      { name: 'Puri', img: '/menu/tiffin/puri.jpeg' },
      { name: 'Plain Dosa', img: '/menu/tiffin/Dosa.webp' },
      { name: 'Masala Dosa', img: '/menu/tiffin/Masala.webp' },
      { name: 'Onion Dosa', img: '/menu/tiffin/Onion.jpeg' },
      { name: 'Rava Dosa', img: '/menu/tiffin/Rava.webp' },
      { name: 'Uthappam', img: '/menu/tiffin/Uthappam.jpeg' },
      { name: 'Pesarattu', img: '/menu/tiffin/Pesarattu.jpeg' },
      { name: 'Alu Masala', img: '/menu/tiffin/Aloo.jpeg' },
      { name: 'Sambar', img: '/menu/tiffin/Sambar.jpeg' },
      { name: 'Cocount Chutney', img: '/menu/tiffin/Coconut chutney.jpeg' },
      { name: 'Tomato Chutney', img: '/menu/tiffin/tomato.jpeg' },
      { name: 'Pudina Chutney', img: '/menu/tiffin/pudina.jpeg' },
      { name: 'Allam Chutney (Ginger)', img: '/menu/tiffin/Allam.jpeg' },
    ],
  },
  {
    title: 'Curries & Masalas',
    bg: '/menu/curries/main.avif',
    items: [
        { name: 'Vazhakai Podimass', img: '/menu/curries/Vazhakkai.webp' },
        { name: 'Mix Veg Cocount Curry', img: '/menu/curries/mixveg.jpeg '},
        { name: 'Beans Paruppusli', img: '/menu/curries/paruppu usli.jpeg' },
        { name: 'Aloo Kara Curry', img: '/menu/curries/aloo.jpeg' },
        { name: 'Any Kootu', img: '/menu/curries/kootu.jpeg' },
        { name: 'Avial', img: '/menu/curries/avial.jpeg' },
        { name: 'Olan', img: '/menu/curries/olan.jpeg' },
        { name: 'Vankaya Karampatti', img: '/menu/curries/karampatti.jpeg' },
        { name: 'Guthi Vankaya', img: '/menu/curries/guthi.jpeg' },
        { name: 'Paneer Butter Masala', img: '/menu/curries/buttermasala.jpeg' },
        { name: 'Kadai Paneer', img: '/menu/curries/kadai.jpeg' },
        { name: 'Shahi Paneer', img: '/menu/curries/shahi.jpeg' },
        { name: 'Mutter Paneer', img: '/menu/curries/mutter.jpeg' },
        { name: 'Palak Paneer', img: '/menu/curries/palak.jpeg' },
        { name: 'Paneer Tikka Masala', img: '/menu/curries/tikka.jpeg' },
        { name: 'Bagara Baingan', img: '/menu/curries/bagara.jpeg' },        
        { name: 'Mirchi Ka Salan', img: '/menu/curries/mirchi.jpeg' },
        { name: 'Mix Veg Kurma', img: '/menu/curries/mixvegkurma.jpeg' },
        { name: 'Chole Masala', img: '/menu/curries/chole.jpeg' },
        { name: 'Malai Koftha', img: '/menu/curries/kofta.jpeg' },
        { name: 'Capsicum Masala', img: '/menu/curries/capsicum.jpeg' },
        { name: 'Navarathna Kurma', img: '/menu/curries/navaratna.jpeg' },
        { name: 'Tawa Sabhji', img: '/menu/curries/tawasabji.jpeg' },
        { name: 'Dal Thadka', img: '/menu/curries/daltadka.jpeg' },
        { name: 'Dal Makhani', img: '/menu/curries/Dalmakhani.jpeg' },

    ],
  },
  {
    title: 'Flavors of Rice',
    bg: '/menu/rice/main.avif',
    items: [
        { name: 'Tamarind Rice (Pulihora)', img: '/menu/rice/Pulihora.jpeg' },
      { name: 'Cocount Rice', img: '/menu/rice/coconut.jpeg' },
      { name: 'Lemon Rice', img: '/menu/rice/Lemon.jpeg' },
      { name: 'Pudina Rice', img: '/menu/rice/pudina.jpeg' },
      { name: 'Tomato Rice', img: '/menu/rice/tomato.jpeg' },
      { name: 'White Rice', img: '/menu/rice/white.jpeg' },
      { name: 'Curd Rice', img: '/menu/rice/curd.jpeg' },
      { name: 'Bisibelabath (Sambar Rice)', img: '/menu/rice/Bisibelabath.jpeg' },
      { name: 'Veg Fried Rice', img: '/menu/rice/fried.jpeg' },
      { name: 'Jeera Rice', img: '/menu/rice/Jeera.jpeg' },
      { name: 'Veg Pulao', img: '/menu/rice/pulao.jpeg'},
      { name: 'Veg Dum Biryani', img: '/menu/rice/dumbiryani.jpeg' },
    ],
  },
  {
    title: 'Quick Bites',
    bg: '/menu/Snacks/main.avif',
    items: [
        { name: 'Aloo Bonda', img: '/menu/Snacks/aloobonda.jpeg' },
      { name: 'Aloo Samosa', img: '/menu/Snacks/aloosamosa.jpeg' },
      { name: 'Onion Samosa', img: '/menu/Snacks/onion.jpeg' },
      { name: 'Corn Samosa', img: '/menu/Snacks/corn.jpeg' },
      { name: 'Vazhakai Bhajji', img: '/menu/Snacks/vazhakkai.jpeg' },
      { name: 'Aloo Bhajji', img: '/menu/Snacks/aloobhajji.jpeg' },
      { name: 'Mirchi Bhajji', img: '/menu/Snacks/mirchi.jpeg' },
      { name: 'Onion Pakoda', img: '/menu/Snacks/onionpakoda.jpeg' },
      { name: 'Palak Pakoda', img: '/menu/Snacks/palakpakoda.jpeg' },
      { name: 'Mixture', img: '/menu/Snacks/mixture.jpeg' },
      { name: 'Dokla', img: '/menu/Snacks/dokla.jpeg' },
      { name: 'Kuzhi Paniyaram', img: '/menu/Snacks/kuzhi.webp' },
    ],
  },
  {
    title: 'Flavorsome Appetizers',
    bg: '/menu/starters/main.avif',
    items: [
        { name: 'Veg Manchurian', img: '/menu/starters/manchuria.jpeg' },
      { name: 'Spring Roll', img: '/menu/starters/spring roll.jpeg' },
      { name: 'Hara Bara Kabab', img: '/menu/starters/harabara.jpeg' },
      { name: 'Cheese balls', img: '/menu/starters/cheeseballs.jpeg' },
      { name: 'Gold Coin', img: '/menu/starters/goldcoin.jpeg' },
      { name: 'Veg Bullets', img: '/menu/starters/bullets.jpeg' },
      { name: 'Veg Lollipop', img: '/menu/starters/lollipop.jpeg' },
      { name: 'Crispy Corn', img: '/menu/starters/crispy corn.jpeg' },
      { name: 'Chilly Paneer', img: '/menu/starters/chilly.jpeg' },
      { name: 'Paneer 65', img: '/menu/starters/65.jpeg' },
      { name: 'Paneer Tikka', img: '/menu/starters/tikka.jpeg' },
    ],
  },
  {
    title: 'Mithai Magic',
    bg: '/menu/sweets/main.avif',
    items: [
      { name: 'Pal Payasam', img: '/menu/sweets/palpayasam.jpeg' },
      { name: 'Pal Adai Pradhamam Payasam', img: '/menu/sweets/paladai.jpeg' },
      { name: 'Chekka Pradhamam Payasam', img: '/menu/sweets/chekka.jpeg' },
      { name: 'Sadhasadhayam', img: '/menu/sweets/sadhasadhayam.jpeg' },
      { name: 'Semiya Payasam', img: '/menu/sweets/semiya.jpeg' },
      { name: 'Kadalai Paruppu Payasam', img: '/menu/sweets/kadalai.webp' },
      { name: 'Elaneer Pal Payasam', img: '/menu/sweets/elaneer.jpeg' },
      { name: 'Sakkarai Pongal', img: '/menu/sweets/sakkarai pongal.jpeg' },
      { name: 'Poli (Bobbatlu)', img: '/menu/sweets/poli.jpeg' },
        { name: 'Laddu', img: '/menu/sweets/laddu.jpeg' },
        { name: 'Rava Laddu', img: '/menu/sweets/rava.jpg' },
        { name: 'Dry Fruit Laddu', img: '/menu/sweets/dryfruit.jpeg' },
        { name: 'Mothichoor Laddu', img: '/menu/sweets/motichoor.jpeg' },
      { name: 'Badusha', img: '/menu/sweets/badhusha.jpeg' },
      { name: 'Mysore Pak', img: '/menu/sweets/mysore.jpeg' },
      { name: 'Jaangri', img: '/menu/sweets/jangri.jpeg' },
      { name: 'Jilebi', img: '/menu/sweets/jilebi.jpeg' },
      { name: 'Malpua', img: '/menu/sweets/malpua.webp' },
      { name: 'Booralu', img: '/menu/sweets/booralu.jpeg' },
      { name: 'Gulab Jamun', img: '/menu/sweets/gulab.jpeg' },
      { name: 'Kaala Jamun', img: '/menu/sweets/kala.jpeg' },
      { name: 'Rasmalai', img: '/menu/sweets/rasmalai.jpeg' },
      { name: 'Angoor Rasmalai', img: '/menu/sweets/angoor.jpeg' },
      { name: 'Rasgulla', img: '/menu/sweets/rasgulla.jpeg' },
      { name: 'Tawa Sweet', img: '/menu/sweets/tawa.jpeg' },
      { name: 'Double ka Meeta', img: '/menu/sweets/double.jpeg' },
      { name: 'Qurbani ka Meeta', img: '/menu/sweets/qurbani.jpeg' },
      { name: 'Gajar ka Halwa', img: '/menu/sweets/gajar.jpeg' },
      { name: 'Beetroot Halwa', img: '/menu/sweets/beetroot.jpeg' },
      { name: 'Ashoka Halwa', img: '/menu/sweets/ashoka.jpeg' },
      { name: 'Kasi Halwa', img: '/menu/sweets/kasi.jpeg' },
      { name: 'Badam Halwa', img: '/menu/sweets/badam.jpeg' },
      { name: 'Rava Kesari', img: '/menu/sweets/rava.jpg' },
      { name: 'Pineapple Kesari', img: '/menu/sweets/pineapple.jpeg' },
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
  
    const handleScroll = () => {
      let currentSection = '';
      let minDistance = window.innerHeight;
  
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight / 2);
  
          if (distance < minDistance) {
            minDistance = distance;
            currentSection = id;
          }
        }
      });
  
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load
  
    return () => window.removeEventListener('scroll', handleScroll);
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
      <img src={`/images/memory${i + 1}.jpeg`} alt={`Memory ${i + 1}`} />
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
    <h3>Who we are?</h3>
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
          © 2025 Iyer Caterers. All rights reserved. Developed by @Wildbeans
        </footer>


        <button id="backToTop" className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <FaArrowUp />
</button>

      </div>)} 
      </>
    );
  };
  
  export default HomePage;
  