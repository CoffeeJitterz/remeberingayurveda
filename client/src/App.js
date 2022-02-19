import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
