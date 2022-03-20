import './App.css';
import { BrowserRouter , Router, Routes, Route, Link, NavLink } from 'react-router-dom';
// component
import Home from "./Component/Home/Home";
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Movies from "./Component/Movies/Movies";
import Featured from "./Component/Featured/Featured";
import DoctorStrange from "./Component/DoctorStrange/DoctorStrange";
import Lightyear from "./Component/Lightyear/Lightyear";
import TurningRed from "./Component/TurningRed/TurningRed";
import Lucasfilm from "./Component/Lucasfilm/Lucasfilm";
import Marvel from "./Component/Marvel/Marvel";
import Pixar from "./Component/Pixar/Pixar";
// Movies
import InCinemas from "./Component/InCinemas/InCinemas";
import ComingSoon from "./Component/ComingSoon/ComingSoon";
import WatchatHome from "./Component/WatchatHome/WatchatHome";
import MoreMovies from "./Component/MoreMovies/MoreMovies";
import Error from "./Component/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar logo="/images/1280px-Disney_wordmark.svg.png"/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Movies" element={<Movies/>} />
        <Route path="/Featured" element={<Featured/>} />
        <Route path="/DoctorStrange" element={<DoctorStrange/>} />
        <Route path="/Lightyear" element={<Lightyear/>} />
        <Route path="/TurningRed" element={<TurningRed/>} />
        <Route path="/Lucasfilm" element={<Lucasfilm/>} />
        <Route path="/Marvel" element={<Marvel/>} />
        <Route path="/Pixar" element={<Pixar/>} />
        {/* Movies */}
        <Route path="/InCinemas" element={<InCinemas/>} />
        <Route path="/ComingSoon" element={<ComingSoon/>} />
        <Route path="/WatchatHome" element={<WatchatHome/>} />
        <Route path="/MoreMovies" element={<MoreMovies/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer logo="/images/1280px-Disney_wordmark.svg.png"/>
    </BrowserRouter>
  )
}

export default App;
