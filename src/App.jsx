import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import heroimage from './assets/heroimage.png'; 
import family from './assets/family.png'; 
import hotelm from './assets/hotelm.png'; 
import Buybutton from './components/buybutton';
import AboutUs from './AboutUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { BrowserRouter , Route, Routes, useNavigate } from 'react-router-dom';
import HotelMixturePurchase from './HotelMixturePurchase';
import FamilyMixturePurchase from './Family-mixture';
import Cart from './Cart';
import Payment from './Payment';
import SignIn from './Signin';


function AppContent() {
  const [count, setCount] = useState(0);
  const nav = useNavigate();

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="box">
        <img src={heroimage} alt="heroimage" className="box-image" />
        <div className='header'>
          <h2 className="box-title">Avinash Ass Tea.Co</h2>
          <p className="box-description">Bold Flavours, Energized Days.</p>
        </div>
      </div>

    
      {/* Our Products Section */}
      <div id="product" className="products-section">
        <h1 className="section-title">OUR PRODUCTS</h1>
        
        <div className="product-item">
          <img src={hotelm} alt="Hotel Mixture" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Hotel Mixture</h2>
            <h3 className="product-subtitle">Premium Aromatic Blend</h3>
            <p className="product-description">
              Experience the robust taste of our Hotel Mixture, crafted for those who appreciate 
              a richer, fuller tea experience. Ideal for hotels and cafes, this blend delivers 
              consistent quality and a deep, invigorating flavor that awakens the senses and energizes the day.
              Perfect for morning brews or an afternoon pick-me-up, each sip promises a bold taste that’s both 
              satisfying and memorable.
            </p>
          </div>
        </div>

        <div className="product-item">
          <img src={family} alt="Family Mixture" className="product-image" />
          <div className="product-info">
            <h2 className="product-title">Family Mixture</h2>
            <h3 className="product-subtitle">Warm Comfort in Every Cup</h3>
            <p className="product-description">
              Our Family Mixture is designed to bring the warmth of family gatherings into every cup. 
              This blend combines the soothing qualities of traditional teas with a gentle aroma that’s perfect for shared moments. 
              It’s smooth, comforting, and mild, making it an excellent choice for any time of day, whether it's a quiet morning or a relaxing evening.
              Enjoy a cup of our Family Mixture and feel the heartwarming embrace of home in every sip.
            </p>
          </div>
        </div>
      </div>
      
      <div id="about"><AboutUs /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </>
  );
}
      
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/hotel-mixture" element={<HotelMixturePurchase />} />
        <Route path="/family-mixture" element={<FamilyMixturePurchase />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
