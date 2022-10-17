import React from 'react'
import { Link } from "react-router-dom";
import BannerImage from '../assets/cake.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}> {/*added background image here */}
      <div className="headerContainer"> 
        <h1>Jazz Cake Bakery</h1>
        <p>Send best wishes in a delicious way</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home