import React from 'react'
import MultipleCakes from '../assets/multipleCakes.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{backgroundImage: `url(${MultipleCakes})`}}></div> {/*divide the about page in 2 parts, top and botton. Top contains image, bottom contains text*/}
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>Fulfilling with uniform quality and devotion to innovation, the company has moved ahead step by step. 
              In 2018, Jazz Bakery started with just one small outlet in Alambagh, Lucknow.
               Now we operate ten outlets with Jazz Institute and one Jaya Lawn stretching the altitude and span of the city.
               With frequent innovating on the products, the organization can proudly assert that it fulfills the largest combination of desserts and other products in the town.
               Bakery brought the photo cake or doll cake in the town. The company has the biggest collection of Wedding & Anniversary Cakes. Satisfying with the trend we came with a bang of online cake delivery in Lucknow.
            </p>
        </div>
    </div>
  )
}

export default About