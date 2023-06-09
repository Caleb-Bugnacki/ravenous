import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <BusinessList />
      <Footer />
    </>
  );
}

export default App;
