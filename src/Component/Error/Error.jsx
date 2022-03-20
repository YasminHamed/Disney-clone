import React from 'react'
import './error.css';
import {useNavigate} from'react-router-dom'

function Error() {
  let navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="mb-4 mt-4 col-lg-6 col-sm-12">
          <img className="pho mt-4" width="50%" src="https://lumiere-a.akamaihd.net/v1/images/error-500_aa3dde6a.png?region=0%2C0%2C164%2C228" alt="" />
        </div>
        <div className="prag mb-4 mt-4 col-lg-6 col-sm-12">
          <h1>
            OOPS! PAGE
            <br />
            NOT FOUND.
          </h1>
          <br /><br />
          <p>You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.</p>
          <br />
          <div>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Error