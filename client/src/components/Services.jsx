import {Link} from 'react-router-dom'

import Card from '../shared/Card'

export default function Services({ expand }) {

  switch (expand) {
    case true:
      return (
        <div>
        <h1>Services</h1>
        <Card>
          <p>These Are my services!</p>
          <p>And this is even more information about my services!</p>
        </Card>
    </div>
      )
      case false:
        return (
          <Link to='services'>
            <div>
              <h1>Services</h1>
              <Card>
                <p>These Are my services!</p>
              </Card>
            </div>         
          </Link>
        )
  }
}
