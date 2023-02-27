import Header from './Header';
import Main from './Main';
import data from './data.json';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Gallery of Horns"/>
      <Main id='My Brain is Vaporizing'/>
      <Footer author='Cody L.'/>
    </div>
  );
}

export default App;
