import React from 'react'
import './home.css';
import { BrowserRouter , Router, Routes, Route, Link, NavLink } from 'react-router-dom';


function Home() {
  return (
    <div>
      <div>
        <img className="absolute" width="100%"src="/images/WhatsApp Image 2022-03-20 at 11.27.17 AM.jpeg" alt="" />
        <div>
          <NavLink className="pic" to="/TurningRed">
            <img width="50%" src="https://lumiere-a.akamaihd.net/v1/images/en_tred-1_lg_r_2x_ed01d52a.png?region=0,0,1000,320" alt="" />
            <h5 className="cinema">In cinemas now</h5>
            <button type="button" class="find btn btn-warning">FIND OUT MORE</button>
          </NavLink>
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-center">Movies</h1>
        <div class="Row">
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_b342b03e.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Doctor Strange in the Multiverse of Madness</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/hb_placeholder_desktop_7575eb06.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Lightyear</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_42bfe4a2.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Turning Red</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="mt-4 text-center">Parks</h1>
        <a href="https://www.disneylandparis.com/language-selection/?redirectFrom=INTL&redirectPath=/en-int/events/30th-anniversary/">
        <img class="centerr" width="95%" src="images\WhatsApp Image 2022-03-20 at 1.08.28 PM.jpeg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Home