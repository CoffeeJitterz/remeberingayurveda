import {Link} from 'react-router-dom'
import Event from "./Event"

export default function EventFeed({expand}) {

// const events = [
// {title, date, description, image}
// ] 

const events = [
    {
        title: 'Awesome Event 1',
        date: '06/03/2022',
        description: "It's an awesome event in the park it's gonna be awesome!",
        image: 'image 1'
    },
    {
        title: 'Awesome Event 2',
        date: '16/10/2022',
        description: "It's an awesome event in the park it's gonna be awesome!",
        image: 'image 2'
    },
    {
        title: 'Awesome Event 3',
        date: '16/17/2022',
        description: "It's an awesome event in the park it's gonna be awesome!",
        image: 'image 3'
    }
]

    const output = events.map((event) => {   
        if (expand) {
            return <Event
            title={event.title}
            date={event.date}
            description={event.description}
            image={event.image}
            />
        } else {
            return <Event
            title={event.title}
            date={event.date}
            />
        }
    })
  return (
      <Link to='/events'>
<span>
    {output}   
</span>     
      </Link>

  )
}
