import React from 'react'
import './watchathome.css';
import { BrowserRouter , Router, Routes, Route, Link, NavLink } from 'react-router-dom';


function WatchatHome() {
  return (
    <div>
      <h1 className="explore mt-4 ">Explore our movies</h1>
      <nav>
        <ul class="menuItems">
          <li>
            <NavLink class="sec" to="/Featured" >Featured</NavLink>
          </li>
          <li>
            <NavLink class="sec" to="/InCinemas" >In Cinemas</NavLink>
          </li>
          <li>
            <NavLink class="sec" to="/ComingSoon" >Coming Soon</NavLink>
          </li>
          <li>
            <NavLink class="sec" to="/WatchatHome" >Watch at Home</NavLink>
          </li>
          <li>
            <NavLink class="sec" to="/MoreMovies" >More Movies</NavLink>
          </li>
        </ul>
      </nav>
      <div class="Row">
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_bf2c13ad.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Frozen 2</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_809c2428.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">The Lion King</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_2ea507d5.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Onward</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_a89e70e8.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Star Wars: The Rise of Skywalker (Episode IX)</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_ffefe4c8.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Toy Story 4</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WatchatHome