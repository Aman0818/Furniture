import './FurnishingCard.css'
import whoweare from '../../assets/whoweare.jpg'
export const FurnishingCard = (image) => {
  return (
    <div className='FurnishingCard'>
        <div className="fc-part1"></div>
        <div className="fc-part2">
            <img src={whoweare} alt="" />
        </div>
    </div>
  )
}
