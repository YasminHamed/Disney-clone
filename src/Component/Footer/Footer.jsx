import React from 'react'
import './footer.css';

function Footer(props) {
  return (
    <footer class="font-small ">
        <div>
            <img class="center" width="8%"src={props.logo} />
        </div>
        <div class="container text-center text-md-left">
            <div class="row">
                <div class="col-md mx-auto">
                    <a class="footer mt-3 mb-4" href="https://support.disney.com/hc/en-za">Help</a>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md mx-auto">
                <a class="footer mt-3 mb-4" href="https://en.disneyme.com/sitemap">Sitemap</a>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md mx-auto">
                    <a class="footer mt-3 mb-4" href="https://disneytermsofuse.com/english-middle-east/">Terms of Use</a>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md mx-auto">
                    <a class="footer mt-3 mb-4" href="https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/">Privacy Policy </a>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md mx-auto">
                    <a class="footer mt-3 mb-4" href="https://preferences-mgr.truste.com/?pid=disney01&aid=disneyemea01&type=Disneyemea">Interest-based Ads </a>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md mx-auto">
                    <a class="footer mt-3 mb-4" href="https://en.disneyme.com/about-us">About Us</a>
                </div>
                <hr class="clearfix w-100 d-md-none"/>
                <div class="col-md mx-auto">
                    <a class="footer mt-3 mb-4" href="https://thewaltdisneycompany.eu/">The Walt Disney Company</a>
                </div>
            </div>
        </div>
        <div class="footer  text-center py-3">
            © Disney © Disney•Pixar © & ™ Lucasfilm LTD © Marvel. All Rights Reserved
        </div>
    </footer>
  )
}

export default Footer