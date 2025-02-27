import TopNavigation from "./components/TopNavigation";
import Hero from "./components/Hero";
import DigitalStratergy from "./components/DigitalStratergy";
import WebDevelopment  from "./components/WebDevelopment";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
const App = () => (
  <div>
    <TopNavigation />
    <Hero />
    <div className="w-1064 h-414 top-857 left-188 gap-108">
    <WebDevelopment/>
    </div>
   <DigitalStratergy/>
   <FAQs/>
    <Footer />
  </div>
);

export default App;
