import About from './component/About/About';
import Blog from './component/Blog/Blog';
import Card from './component/Card/Card';
import Career from './component/Career/Career';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Hero from './component/Hero/Hero';
import Home from './component/Home';
import Privacy from './component/Privacy/Privacy';
import Service from './component/Service/Service';
import Team from './component/Team/Team';

function App() {
  return (
    <div className="App">
      <Home/>
      <Hero/>
      <Blog/>
      <Card/>
      <About/>
      <Privacy/>
      <Team/>
    <Contact/>
    {/* <Career/> */}
    <Footer/>
    <Service/>
    </div>
  );
}

export default App;
