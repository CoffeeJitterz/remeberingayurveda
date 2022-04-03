import {Link} from 'react-router-dom'

import Card from "../shared/Card"

import bioImage from '../images/bioImage.jpg'

export default function About({ expand }) {

  switch (expand) {
    case true :
    return (
      <div>
          <Card>
              <img src={bioImage} height={400}/>
              <h2>This Is Who We Are</h2>
              <h6>Image Placeholder</h6>
              <p>And this is why that matters!</p>
              <h2>What is Ayurveda?</h2>
              <p>This is what Ayurveda is!</p>
          </Card>
      </div>
    )
    case false :
    return (
      <Link to='/about'>
      <div>
        <h1>About</h1>
          <Card>
              <h2>This Is Who We Are</h2>
              <h6>Image Placeholder</h6>
              <p>And this is why that matters!</p>
          </Card>
      </div>      
      </Link>
    )
  }
}
