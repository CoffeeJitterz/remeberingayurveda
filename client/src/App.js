import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage';
import EventsFeedPage from './pages/EventsFeedPage';
import EventPage from './pages/EventPage';
import EventPanel from './components/EventPanel';
import AboutPage from './pages/AboutPage'
import BlogFeedPage from './pages/BlogFeedPage';
import BlogPage from './pages/BlogPage';
import Control from './components/Control';
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

const blogs = [
  {id: 0,
   title: 'Post 1',
   date: 'Saturday Febuary 19th 2022',
   body: 'This is the sort of content which would be viewed here if you were to take the time to read it.'
  },
  {id: 1,
   title: 'Post 2',
   date: 'Saturday Febuary 19th 2022',
   body: 'This is the sort of content which would be viewed here if you were to take the time to read it.'
  },
  {id: 2,
   title: 'Post 3',
   date: 'Saturday Febuary 19th 2022',
   body: 'This is the sort of content which would be viewed here if you were to take the time to read it.'
  }

] 

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home events={events}/>} />
        <Route path='/services' element={<ServicesPage />}/>
        <Route path='/events' element={<EventsFeedPage events={events} />} />
        <Route path='/events/:id' element={<EventPage events={events}/>}/>
        <Route path='/eventpanel' element={<EventPanel />} />
        <Route path='/blog' element={<BlogFeedPage blogs={blogs} />}/>
        <Route path='/blog/:id' element={<BlogPage blogs={blogs}/>}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/control' element={<Control />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
