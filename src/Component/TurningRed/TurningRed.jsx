import React from 'react'
import './turningred.css';

function TurningRed() {
  return (
    <div>
      <img width="100%" src="images\turning red.jpeg" alt="" />
      <div className="container">
        <div className="row ">
          <div className="mb-4 mt-4 col-lg-6 col-sm-12">
            <img className="pho" width="60%" src="https://lumiere-a.akamaihd.net/v1/images/image_42bfe4a2.jpeg?region=0%2C0%2C540%2C810" alt="" />
          </div>
          <div className="prag mb-4 mt-4 col-lg-6 col-sm-12">
            <h2>Turning Red</h2>
            <br />
            <p>March 10, 2022  Animation </p>
            <br />
            <p>Disney and Pixar’s “Turning Red” introduces Mei Lee (voice of Rosalie Chiang), a confident, dorky 13-year-old torn between staying her mother’s dutiful daughter and the chaos of adolescence. Her protective, if not slightly overbearing mother, Ming (voice of Sandra Oh), is never far from her daughter—an unfortunate reality for the teenager. And as if changes to her interests, relationships and body weren’t enough, whenever she gets too excited (which is practically ALWAYS), she “poofs” into a giant red panda! Directed by Academy Award® winner Domee Shi (Pixar short “Bao”) and produced by Lindsey Collins.</p>
            <br />
            <h3>Directed By</h3>
            <p>Domee Shi</p>
            <br />
            <h3>Produced By</h3>
            <p>Lindsey Collins</p>
            <br />
            <h3>Cast</h3>
            <p>Rosalie Chiang, Sandra Oh</p>
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

export default TurningRed