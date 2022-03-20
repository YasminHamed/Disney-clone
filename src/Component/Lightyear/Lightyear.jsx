import React from 'react'
import './lightyear.css';


function Lightyear() {
  return (
    <div>
    <img width="100%" src="images\lightyear.jpeg" alt="" />
    <div className="container">
      <div className="row ">
        <div className="mb-4 mt-4 col-lg-6 col-sm-12">
          <img className="pho" width="60%" src="https://lumiere-a.akamaihd.net/v1/images/hb_placeholder_desktop_7575eb06.jpeg?region=0%2C0%2C540%2C810" alt="" />
        </div>
        <div className="prag mb-4 mt-4 col-lg-6 col-sm-12">
          <h2>Lightyear</h2>
          <br />
          <p>Disney and Pixar’s “Lightyear,” an original feature film. The sci-fi action-adventure presents the definitive origin story of Buzz Lightyear—the hero who inspired the toy—introducing the legendary Space Ranger who would win generations of fans. Chris Evans lends his voice to Buzz. “The phrase ‘a dream come true’ gets thrown around a lot, but I’ve never meant it more in my life,” says Evans. “Anyone who knows me knows that my love for animated films runs deep. I can’t believe that I get to be a part of the Pixar family and work with these truly brilliant artists who tell stories unlike anyone else. Watching them work is nothing short of magic. I pinch myself every day.” Annie Award-winning director and veteran Pixar animator Angus MacLane, who co-directed 2016’s “Finding Dory,” helms “Lightyear.” Galyn Susman (“Toy Story That Time Forgot” short) produces.</p>
          <br />
        </div>
      </div>
    </div>
    <div>
      <h1 className="ml-4">More Movies</h1>
      <div class="wrapper">
        <section id="section1">
          <a href="#section3" class="arrow__btn">‹</a>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_adf151ff.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_517212da.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_bf2c13ad.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/p_theincredibles2_meen_002144c9.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_04c33520.jpeg?region=0,0,540,810&width=320" />
          </div>
          <a href="#section2" class="arrow__btn">›</a>
        </section>
        <section id="section2">
          <a href="#section1" class="arrow__btn">‹</a>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/hb_placeholder_desktop_7575eb06.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_19736_42ce0589.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_2a67e7d8.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_b541ad5b.jpeg?region=0,0,540,810&width=320" />
          </div>
          <a href="#section3" class="arrow__btn">›</a>
        </section>
        <section id="section3">
          <a href="#section2" class="arrow__btn">‹</a>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_9e35a739.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/image_ae30e307.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/p_avengersinfinitywar_19871_cb171514.jpeg?region=0,0,540,810&width=320" />
          </div>
          <div class="item">
            <img width="250px" src="https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0,0,540,810&width=320" />
          </div>
          <a href="#section1" class="arrow__btn">›</a>
        </section>
      </div>
    </div>
  </div>
  )
}

export default Lightyear