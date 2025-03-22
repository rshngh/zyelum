import "./App.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Services from "./components/layout/hero/Services";
import Hero from "./components/layout/hero/Hero";
import Stats from "./components/layout/hero/Stats";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Footer />
    </>
  );
}

export default App;
