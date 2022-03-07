import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Control from './components/Control';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/control' element={<Control />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
