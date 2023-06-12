import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

const business = {
  imageSrc: "HudsonImg.jpg",
  name: "The Hudson",
  address: "208 Curtis Ave",
  city: "Ironton",
  state: "Minnesota",
  zipcode: "56455",
  category: "Cafe",
  rating: 4.8,
  reviewCount: 62,
};

const businesses = [business, business, business, business, business, business];

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <BusinessList businesses={businesses} />
      <Footer />
    </>
  );
}

export default App;
