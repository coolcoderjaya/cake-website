// we create footer in 'components' folder and not in 'pages' folder because its not a page, just like navbar it will remain same in every page of web application
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon /> <TwitterIcon /> <LinkedInIcon />
        </div>
        <p> &copy; 2022 jazzcakes.com</p>  {/* &copy;- shows copyright symbol*/}
    </div>
  );
}

export default Footer