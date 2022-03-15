import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Services from './components/Services';
import Events from './pages/Events';
import AboutPage from './pages/AboutPage'
import Blog from './pages/Blog';
import Control from './components/Control';
import EventPanel from './components/EventPanel';
import EventPage from './pages/EventPage';
import './App.css';

function App() {

  const events = [
    {
        id: 0,
        title: 'Awesome Event 1',
        date: '06/03/2022',
        description: "It's an awesome event in the park it's gonna be awesome!",
        image: 'image 1'
    },
    {
        id: 1,
        title: 'Awesome Event 2',
        date: '16/10/2022',
        description: "It's an awesome event in the park it's gonna be awesome!",
        image: 'image 2'
    },
    {
        id: 2,
        title: 'Awesome Event 3',
        date: '16/17/2022',
        description: "It's an awesome event in the park it's gonna be awesome!",
        image: 'image 3'
    }
]

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/control' element={<Control />} />
        <Route path='/eventpanel' element={<EventPanel />} />
        <Route path={`/events/:id`} element={<EventPage events={events}/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
