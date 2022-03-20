import React from 'react'
import './lucasfilm.css';

function Lucasfilm() {
  return (
    <div>
    <h2 className="explore mt-4 ">Lucasfilm Movies</h2>
    <div class="Row">
        <div class="cardd card mb-4 col-md-2">
          <div class="view overlay">
            <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_517b1d6c.jpeg?region=0,0,540,810&width=320"
              alt="Card image cap"/>
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body">
            <a class="name card-title">Solo: A Star Wars Story</a>
          </div>
        </div>
        <div class="cardd card mb-4 col-md-2">
          <div class="view overlay">
            <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_fb8bbf87.jpeg?region=0,0,540,810&width=320"
              alt="Card image cap"/>
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body">
            <a class="name card-title">Star Wars: The Last Jedi</a>
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
      </div>
  </div>
  )
}

export default Lucasfilm