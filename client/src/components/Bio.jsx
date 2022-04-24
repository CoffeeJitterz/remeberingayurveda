import {Link} from 'react-router-dom'

import Card from "../shared/Card"

import bioImage from '../images/bioImage.jpg'

export default function Bio({ expand }) {

  switch (expand) {
    case true :
    return (
      <div>
          <Card>
            <div className='bio_container'>
          <img src={bioImage} height={400} alt='alt'/>
              <div>
              <p className='bio'>
              <b>Chloe Chaput</b> is a Clinical Ayurvedic Specialist 
              Intern, Reiki practitioner and dedicated yogi. 
              Chloe has been studying Ayurveda, a complete healthcare 
              science focused on restoring and maintaining a balance 
              of the mind, body, and spirit, formally since 2016. 
              Chloe has personally experienced countless benefits 
              of implementing Ayurveda into her life through her 
              journey of managing Juvenile Rheumatoid Arthritis. 
              As an International Homeschool Educator and private 
              Childcare Provider from 2016-2020, Chloe has also 
              seen positive benefits of applying Ayurvedic Principles 
              to child development. She is dedicated to her role as 
              a Clinical Ayurvedic Specialist Intern to work with parents, 
              caregivers, and children to address a variety of clinical 
              health concerns at the root of their cause. Chloe is 
              passionate about working with others to apply the science 
              of self-study to bring holistic health.
              </p>
              <h1>My Approach</h1>
              <p className='approach'>
              My approach works with individuals to fully understand their 
              constitution, and any states of imbalances, from an Ayurvedic 
              perspective. From this, I create individualised treatment plans 
              that directly address clients’ health concerns and goals. Weekly 
              follow up visits enable me to work deeply with individuals to 
              track progress in their treatment, to adjust treatment as necessary 
              and ensure the plan is directly in line with clients goals. I am 
              passionate about empowering individuals with an understanding of 
              their constitution and Ayurvedic approaches to treatment through 
              each step of their journey together.
              </p>
              </div>
            </div>
          </Card>
      </div>
    )
    case false :
    return (
      <Link to='/bio' className='bio'>
      <div>
          <Card>
            <div className='bio_container'>
          <img src={bioImage} height={400} alt='alt'/>
              <p>
              <b>Chloe Chaput</b> is a Clinical Ayurvedic Specialist 
              Intern, Reiki practitioner and dedicated yogi. 
              Chloe has been studying Ayurveda, a complete healthcare 
              science focused on restoring and maintaining a balance 
              of the mind, body, and spirit, formally since 2016. 
              Chloe has personally experienced countless benefits 
              of implementing Ayurveda into her life through her 
              journey of managing Juvenile Rheumatoid Arthritis. 
              As an International Homeschool Educator and private 
              Childcare Provider from 2016-2020, Chloe has also 
              seen positive benefits of applying Ayurvedic Principles 
              to child development. She is dedicated to her role as 
              a Clinical Ayurvedic Specialist Intern to work with parents, 
              caregivers, and children to address a variety of clinical 
              health concerns at the root of their cause. Chloe is 
              passionate about working with others to apply the science 
              of self-study to bring holistic health.
              </p>
            </div>
          </Card>
      </div>      
      </Link>
    )
    default:
  }
}
