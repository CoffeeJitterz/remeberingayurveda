import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Control from './components/Control';
import EventPanel from './components/EventPanel';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/blog' element={<Blog />}/>
        <Route path='/control' element={<Control />} />
        <Route path='/eventpanel' element={<EventPanel />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
