import './App.css';
import { Footer } from './components/commons/FooterComponent';
import { Header } from './components/commons/HeaderComponent';
import { StartComponent } from './components/state-view-components/start-state/StartState'

function App() {
  return (
    <div className="App">
      <Header/>
      <StartComponent/>
      <Footer/>
    </div>
  );
}

export default App; 