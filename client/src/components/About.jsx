import {Link} from 'react-router-dom'

import Card from "../shared/Card"

export default function About({ expand }) {

  if(!expand){
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
  } else{
    return (
      <div>
          <Card>
              <h2>This Is Who We Are</h2>
              <h6>Image Placeholder</h6>
              <p>And this is why that matters!</p>
              <h2>What is Ayurveda?</h2>
              <p>This is what Ayurveda is!</p>
          </Card>
      </div>
    )
  }
}
