import React , {useState} from 'react'
import './moremovies.css';
import { BrowserRouter , Router, Routes, Route, Link, NavLink } from 'react-router-dom';


function MoreMovies() {
  const[show,setShow] = useState(true);
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
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Aladdin (2019)</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_ae30e307.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Ant-Man and the Wasp</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Avengers: Endgame</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Avengers: Infinity War</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Black Panther</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Black Widow</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_captainmarvel_19755_3a1675ee.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Captain Marvel</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_2a028710.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Christopher Robin</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Coco</a>
            </div>
          </div>
          <div class="cardd card mb-4 col-md-2">
            <div class="view overlay">
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_7ff71125.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Cruella</a>
            </div>
          </div>
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
              <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_dumbo_19753_7f6610fc.jpeg?region=0,0,540,810&width=320"
                alt="Card image cap"/>
              <a href="#!">
                <div class="mask rgba-white-slight"></div>
              </a>
            </div>
            <div class="card-body">
              <a class="name card-title">Dumbo (2019)</a>
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
        {
            show ?
             <div class="Row">
              <div class="cardd card mb-4 col-md-2">
                <div class="view overlay">
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_adf151ff.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Encanto</a>
                </div>
              </div>
              <div class="cardd card mb-4 col-md-2">
                <div class="view overlay">
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_517212da.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Eternals</a>
                </div>
              </div>
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
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_theincredibles2_meen_002144c9.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Incredibles 2</a>
                </div>
              </div>
              <div class="cardd card mb-4 col-md-2">
                <div class="view overlay">
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_04c33520.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Jungle Cruise</a>
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
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Luca</a>
                </div>
              </div>
              <div class="cardd card mb-4 col-md-2">
                <div class="view overlay">
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_19736_42ce0589.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Maleficent: Mistress of Evil</a>
                </div>
              </div>
              <div class="cardd card mb-4 col-md-2">
                <div class="view overlay">
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_2a67e7d8.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Mary Poppins Returns</a>
                </div>
              </div>
              <div class="cardd card mb-4 col-md-2">
                <div class="view overlay">
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_b541ad5b.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Mulan</a>
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
                  <img class="card-img-top" src="https://lumiere-a.akamaihd.net/v1/images/image_94f89ec1.jpeg?region=0,0,540,810&width=320"
                    alt="Card image cap"/>
                  <a href="#!">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>
                <div class="card-body">
                  <a class="name card-title">Ralph Breaks the Internet</a>
                </div>
              </div>
              </div>
              : null
        }
        <button onClick={() => setShow(true)}>Show More+...</button>
        <button onClick={() => setShow(false)}>Show Less-...</button>
    </div>
  )
}

export default MoreMovies