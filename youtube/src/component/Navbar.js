import axios from 'axios';
import React, { useContext } from 'react'
import {DataContext} from './context/context'
import { BrowserRouter as Route ,Router, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Single from './single';
import Wahtch from './Whatch';

const Navbar = () => {
  const data = useContext(DataContext)

  async function getByWord(e) {
    e.preventDefault();
    let input = document.getElementById("input").value;
    console.log(input);
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${input}&key=AIzaSyA-kaDkOB8Kk5i7bj0t4jOef9w22EViaFs`;
      const res = await axios.get(url);
      console.log(res.data.items);
      data.setPopularV(res.data.items);
    } catch (err) {
      console.log(err);
    }
  }


  return (    

    // <Router> 
    <nav class="navbar navbar-light bg-white shadow">
    <div class="container-fluid">
    <Link to="/"><a class="navbar-brand" >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" class="bi bi-youtube me-1" viewBox="0 0 16 16">
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
    </svg>
    YouTube
    </a>
    </Link>
    
    <div class="input-group force-width" >
    <input id="input" type="text" class="form-control" placeholder="Search"></input>
    <Link to="/Search"><button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={getByWord}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
    </button></Link>
    </div>
        </div>
            </nav>
             /*   <Switch>
          <Route exact path="/"><Home/></Route>
          <Route path="/Single"> <Single/> </Route>
     <Route path="/watchLater">
           <Wahtch/>
          </Route> 
          </Switch> 
      </Router>  */
        );
}
 export default Navbar;