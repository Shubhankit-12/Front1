import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Testmonials from "./components/Testmonials";
import Footer from "./components/Footer";
import WorkingProcess from "./components/WorkingProcess";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <WorkingProcess />
      <Testmonials />

      <Footer />
    </div>
  );
};

export default App;
