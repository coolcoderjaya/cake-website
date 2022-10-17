import React, { useState } from "react"
import Logo from "../assets/cakeLogo.png"; // we give a variable name("Logo")to the image.
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder'; // to insert 3 lined button(named reorder) on navbar
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false); {/* we are using state here as an boolean, when it's true that means hiddenLink will be shown(where we remove logo and show the links) and if false the hidden links will be hidden(logo shown links removed) */}
  {/* we set state equal to false becoz initially we don't want to show links, we show logo*/}
  {/*openLinks-name for state or variable.setOpenLinks- name for a function that will change the value of this state  */}
  {/*varible that whenever you change it's value, it's going to rerender the website so that it shows the changes that were made. If we did this with just normal js variable, it wouldn't trigger a rerender of the website so that's why we're using states*/}

  const toggleNavbar = () => { {/*we create a normal js func. that will change state everytime the button is clicked */}
    setOpenLinks(!openLinks); {/*whenever button is clicked, it will alternate the value, whenever it was true make it false or false to true */}
  }
  return (
    <div className="navbar">
        {/*divided navbar to 2 parts. 1st part for logo etc. 2nd part for all the links to go*/}
        <div className="leftSide" id={openLinks ? "open" : "close"}> {/*if state(openLinks) is true so its equal to "open" else when state is false so its equal to "close" */}
            <img src={Logo} />
            <div className="hiddenLinks">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleNavbar}> {/*we tell this button to call toggleNavbar func. whenever we click this button */}
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar