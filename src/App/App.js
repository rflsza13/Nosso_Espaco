import './App.css';
import Capa from '../Capa/Capa';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Time from '../Time/Time';
import Garden from '../Garden/Garden';
import Timeline from '../Timeline/Timeline';
import Music from '../Music/Music';

function App() {
  return (
    <div className="App">
      <Capa />
      <About />
      <Time />
      <Timeline />
      <Garden />
      <Music />
      <Footer />
    </div>
  );
}

export default App;
