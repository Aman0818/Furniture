import { Navbar } from '../components/Navbar/Navbar'
import './Page1.css'
import {Hero,WhoWeAre,CardImage1,CardImage2,CardImage3,CardImage4} from '../assets/assets.js'
import { GoArrowUpRight } from "react-icons/go";
import { FurnishingCard } from '../components/FurnishingCard/FurnishingCard';
import { Footer } from '../components/Footer/Footer';
const card = [
    {
        image: CardImage1,
        title: "Minimalist Sofa",
        description: "Modern, comfy sofa with clean lines and a neutral look. Perfect for relaxing after a long day, it seamlessly fits into any living room decor while offering exceptional comfort and durability.",
    },
    {
        image: CardImage2,
        title: "Eco Wood Dining Set",
        description: "Sustainable wood dining set with a warm, natural finish. Designed for family gatherings and dinner parties, this set combines eco-friendly materials with timeless style and sturdy craftsmanship.",
    },
    {
        image: CardImage3,
        title: "Compact Study Desk",
        description: "Space-saving desk with storage for small workspaces. Ideal for students or remote workers, it features built-in shelves and a sleek design to keep your essentials organized and accessible.",
    },
    {
        image: CardImage4,
        title: "Classic Lounge Chair",
        description: "Eco-friendly lounge chair with ergonomic comfort. Its supportive design and soft upholstery make it a perfect addition to any reading nook or relaxation corner in your home.",
    }
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
                        <img src={WhoWeAre} alt="" />
                    </div>
                </div>
            </div>
            <div className="section2">
                {
                    card.map((item,index)=>{
                        return <FurnishingCard key={index} image={item.image} no={index+1} head={item.title} desc={item.description}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}
