import './Navbar.css'
import { FaLocationArrow } from "react-icons/fa";
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src="/logo.png" alt="HomeStyle"/>
        </div>
        <div className="nav-links">
            <li>Haven</li>
            <li>Explore collections</li>
            <li>Lookbook</li>
            <li>Seasonal Picks</li>
        </div>
        <button className='nav-btn'><FaLocationArrow/>Explore</button>
    </div>
  )
}
