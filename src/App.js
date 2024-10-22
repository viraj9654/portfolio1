import logo from './logo.svg';
import './App.css';
import './index.css'
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  const siteProps = {
    name: "Viraj Chaudhary",
    title: "Full Stack Developer",
    email: "21virajchaudhary@gmail.com",
    gitHub: "viraj9654",
    instagram: "chaudhary_viraj_",
    linkedIn: "viraj--chaudhary/",
  };
  
  const primaryColor = "#4E567E";
  const secondaryColor = "#D2F1E4";
  return (
    <>
   <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
    </>
  );
}

export default App;
