import './App.css';
import { Footer } from './components/commons/FooterComponent';
import { Header } from './components/commons/HeaderComponent';
import { StateViewComponent } from './components/state-view-components/state-view/StateViewComponent'

function App() {
  return (
    <div className="App">
      <Header/>
      <StateViewComponent/>
      <Footer/>
    </div>
  );
}

export default App; 