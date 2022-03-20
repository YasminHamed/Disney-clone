import React from 'react'
import './doctorstranger.css';

function DoctorStrange() {
  return (
    <div>
    <img width="100%" src="images\DoctorStrange.jpeg" alt="" />
    <div className="container">
      <div className="row ">
        <div className="mb-4 mt-4 col-lg-6 col-sm-12">
          <img className="pho" width="60%" src="https://lumiere-a.akamaihd.net/v1/images/image_b342b03e.jpeg?region=0%2C0%2C540%2C810" alt="" />
        </div>
        <div className="prag mb-4 mt-4 col-lg-6 col-sm-12">
          <h2>Doctor Strange in the Multiverse of Madness</h2>
          <br />
          <p>May 5, 2022  </p>
          <br />
          <p>In Marvel Studios’ “Doctor Strange in the Multiverse of Madness,” the MCU unlocks the Multiverse and pushes its boundaries further than ever before. Journey into the unknown with Doctor Strange, who, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary. “Doctor Strange in the Multiverse of Madness” stars Benedict Cumberbatch, Chiwetel Ejiofor, Elizabeth Olsen, Benedict Wong, Xochitl Gomez, with Michael Stühlbarg, and Rachel McAdams. The film is directed by Sam Raimi, and Kevin Feige is the producer. Louis D’Esposito, Victoria Alonso, Eric Hauserman Carroll and Jamie Christopher serve as executive producers. The screenplay was written by Michael Waldron.</p>
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

export default DoctorStrange