import { Navbar } from '../components/Navbar/Navbar'
import './Page1.css'
import Hero from '../assets/Hero.jpg'

export const Page1 = () => {
    return (
        <div className='page1'>
            <Navbar />
            <div className="hero">
                <img src={Hero} alt="hero image" />
                <div className="hero-text">
                    <p>
                        <h3>Bringing Simplicity</h3>
                        <h3>In The Furnishing Market</h3>
                    </p>
                    <p id='hero-desc'>
                        Discover thoughtfully crafted furniture designed to make your space feel calm, comfortable, and effortlessly stylish. We blend timeless design with everyday functionality because simplicity should never mean compromise.
                        <button className='hero-btn'> Explore Now</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
