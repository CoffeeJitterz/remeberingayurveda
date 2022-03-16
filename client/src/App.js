import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage';
import EventsFeedPage from './pages/EventsFeedPage';
import AboutPage from './pages/AboutPage'
import Blog from './pages/BlogFeedPage';
import Control from './components/Control';
import EventPanel from './components/EventPanel';
import EventPage from './pages/EventPage';
import './App.css';
import BlogFeedPage from './pages/BlogFeedPage';

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
        <Route exact path='/' element={<Home events={events}/>} />
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/events' element={<EventsFeedPage events={events} />} />
        <Route path={`/events/:id`} element={<EventPage events={events}/>}/>
        <Route path='/eventpanel' element={<EventPanel />} />
        <Route path='/blog' element={<BlogFeedPage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/control' element={<Control />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
