import {Link} from 'react-router-dom'

import Card from '../shared/Card'

export default function Services({ expand }) {

  switch (expand) {
    case true:
      return (
        <div>
        <h1>Services</h1>
        <Card>
          <h4>15 minute Discovery Call</h4>
          <h6>Free</h6>
            <p>This appointment takes place over the phone. 
                It provides the opportunity for you to ask questions 
                about Ayurveda/ treatment plans/ your cheif concerns 
                to see if working with Remembering Ayurveda is right 
                for you and your holistic health.
            </p>
          <h4>Initial Intake Consultation and Report of Findings Consultation </h4>
          <h6>2 hours and 1 hour $95.00</h6>
            <p>The first step on one's path to optimal health through Clinical 
              Ayurvedic Care begins with an Initial Consultation. This consultation 
              will include an intake and assessment, followed by a report of findings. 
              From this experience, you can expect to gain a deeper understanding of 
              the foundational principles of Ayurveda, a summary of your constitution 
              and any current states of imbalances, as well as initial recommendations 
              to begin your healing journey.  
            </p>
            <p>
            At the Report of Findings meeting, the best personalized treatment plan will 
            be outlined. Clients can expect to work with them in an ongoing manner for 4-12 months. 
            Throughout this time your treatment plan will be implemented at a pace that is 
            appropriate for you. Our goal is to provide you with the tools of Ayurveda, 
            which will empower you to be able to make choices in your life that will create 
            and sustain optimal health and peace of mind.
            </p>
          <h4>Follow Up Visits</h4>
          <h6>1 hour $60.00 (price can decrease over time with the treatment plan)</h6>
          <p>
          Follow up visits provide the time and space to work together with one’s treatment plan. 
          We will routinely check one’s vitals, functional, emotional patterns and the frequency 
          and intensity of symptoms. We will check in with how previous recommendations are working 
          and be able to provide creative support as needed. New recommendations will be implemented 
          at the most appropriate time for one's healing journey.
          </p>
        </Card>
    </div>
      )
      case false:
        return (
          <Link to='services' className='services'>
            <div>
              <h1>Services</h1>
              <Card>
                <h4>15 minute Discovery Call</h4>
                <h6>Free</h6>
                <h4>Initial Intake Consultation and Report of Findings Consultation </h4>
                <h6>2 hours and 1 hour $95.00</h6>
                <h4>Follow Up Visits</h4>
                <h6>1 hour $60.00 (price can decrease over time with the treatment plan)</h6>
              </Card>
            </div>         
          </Link>
        )
  }
}
