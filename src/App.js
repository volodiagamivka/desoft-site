import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Info from './components/Info/Info';
import Solution from './components/Solution/Solution';
import TeamSection from './components/Team/Team';
import ContactForm from './components/Form/Form';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Info/>
      <Solution/>
      <TeamSection/>
      <ContactForm/>
      <Footer/>

    </div>
  );
}

export default App;
