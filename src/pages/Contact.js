import React, { Component } from 'react'
import CakeLeft from '../assets/cakeLeft.jpg';
import '../styles/Contact.css';

export class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"",
       email:"",
       message:""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  namehandler = (event) => {
    this.setState({
        name: event.target.value
    })
  }
  emailhandler = (event) => {
    this.setState({
        email: event.target.value
    })
  }
  messagehandler = (event) => {
    this.setState({
        message: event.target.value
    })
  }
  handleSubmit = (event) => {
    alert(`Hey ${this.state.name} we,ve recieved your message. Good Day!`)
    console.log(this.state);
    this.setState({
      name: "",
      email:"",
     message:"",
    })
    event.preventDefault()
  }
  render() {
    return (
      <div className='contact'> {/*we'll divide our page into 2 divs. leftside for pizza photo, rightside for form */}
        <div className='leftSide' style={{backgroundImage: `url(${CakeLeft})`}}></div>
        <div className='rightSide'>
          <h1>Contact Us</h1>
          <form onSubmit={this.handleSubmit}>
            <label>Full Name</label>
            <input value={this.state.name} placeholder="Enter full name..." type="text" onChange={this.namehandler}/>{/*in react, "input" is self closing but not in html */}
            <label>Email</label>
            <input value={this.state.email} placeholder="Enter email..." type="email" onChange={this.emailhandler}/>{/*type-email is a type in html */}
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Enter message..."
              required
              value={this.state.message}
              onChange={this.messagehandler}
            >
            </textarea>
            <button type="submit" value="Submit">Add Message</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact