import { useState, useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage';
import EventsFeedPage from './pages/EventsFeedPage';
import EventPage from './pages/EventPage';
import EventPanel from './components/EventPanel';
import BioPage from './pages/BioPage'
import BlogFeedPage from './pages/BlogFeedPage';
import BlogPage from './pages/BlogPage';
import Control from './components/Control';
import './App.css';


function App() {
  const [events, setEvents] = useState(null)
  const[blogs, setBlogs] = useState(null)

  useEffect(() => {
    axios.get('/api/events')
    .then(res => {
      setEvents(res.data)
    })
    axios.get('/api/blogs')
    .then(res => {
      setBlogs(res.data)
    })
  }, [])

if(events){console.log(`Events: ${events}`)}
if(blogs){console.log(`Blogs: ${blogs}`)}

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home events={events}/>} />
        <Route path='/services' element={<ServicesPage />}/>
        {events && <Route path='/events' element={<EventsFeedPage events={events} />} />}
        <Route path='/events/:id' element={<EventPage events={events}/>}/>
        <Route path='/eventpanel' element={<EventPanel />} />
        <Route path='/blogs' element={<BlogFeedPage blogs={blogs} />}/>
        <Route path='/blogs/:id' element={<BlogPage blogs={blogs}/>}/>
        <Route path='/bio' element={<BioPage />}/>
        <Route path='/control' element={<Control />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
