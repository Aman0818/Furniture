import { Navbar } from '../components/Navbar/Navbar'
import './Page1.css'
import Hero from '../assets/Hero.jpg'
import whoweare from '../assets/whoweare.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { FurnishingCard } from '../components/FurnishingCard/FurnishingCard';
const card=[
    "Aman",
    "Simi",
    "Aman",
    "Simi",
]
export const Page1 = () => {
    return (
        <div className='page1'>
            <Navbar />
            <div className="hero">
                <img src={Hero} alt="hero image" />
                <div className='hero-layar'></div>
                <div className="hero-text">
                    <p>
                        <h3>Bringing Simplicity</h3>
                        <h3>In The Furnishing Market</h3>
                    </p>
                    <p id='hero-desc'>
                        Discover thoughtfully crafted furniture designed to make your space feel calm, comfortable, and effortlessly stylish. We blend timeless design with everyday functionality because simplicity should never mean compromise.
                        <button className='hero-btn'> Start Your Furnishing Journey</button>
                    </p>
                </div>
            </div>
            <div className="section">
                <div className="section-part1">
                    <div className="sp1-1">
                        <p className='sp11-desc'>Eco-conscious and sustainable practices</p>
                        <GoArrowUpRight />
                    </div>
                    <div className="sp1-2">
                        <p>
                            150+
                            <p className='sp11-desc'>
                                Furnished Products
                            </p>
                        </p>
                        <p>
                            15+
                            <p className='sp11-desc'>
                                Furnished Products
                            </p>
                        </p>
                    </div>
                </div>
                <div className="section-part2">
                    <p id='sp2-desc'>
                        <h3>Who <span style={{ color: '#92300a' }}>We</span> Are</h3>
                        <p>At the heart of our brand lies a passion for design and a commitment to quality. We blend tradition with innovation to deliver furniture that’s as refined as it is comfortable for homes that deserve nothing less.</p>
                    </p>
                    <div className="section-part2-image">
                        <img src={whoweare} alt="" />
                    </div>
                </div>
            </div>
            <div className="section2">
                {
                    card.map(()=>{
                        return <FurnishingCard/>
                    })
                }
                
            </div>
        </div>
    )
}
