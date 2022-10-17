import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";//for having certain pages in our app. Now we'll call BrowserRouter as Router. We have imported Router, Route, Routes

function App() {
  return (
    <div className="App">
      <Router> {/* is wraps around all our different routes */}
        <Navbar /> {/*We have put it above Routes becoz we want to display it in every single page */}
        <Routes> {/* this tag is just a component that will allow us to tell that we're only gonna render 1 route at a time*/ }
          {/*it will contain all the pages or routes*/}
          <Route path="/" exact element={<Home/>} /> {/* Path for home page"/", exact-tells that we want to access just this 1 route or multiple routes, element-will tell which component to render when opening this route*/}
          <Route path="/menu" exact element={<Menu />}/>
          <Route path="/about" exact element={<About />}/>
          <Route path="/contact" exact element={<Contact />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
