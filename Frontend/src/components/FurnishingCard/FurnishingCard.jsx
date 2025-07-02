import './FurnishingCard.css'
export const FurnishingCard = ({no,head,desc,image}) => {
  return (
    <div className='FurnishingCard' data-scroll data-scroll-sticky data-scroll-target='.section2'>
        <div className="fc-part1">
          <div className="card-no">{no}</div>
          <div className=""></div>
          <div className="card-head">{head}</div>
          <div className="card-desc">{desc}</div>
          <button className='card-btn'>Learn more</button>
        </div>
        <div className="fc-part2">
            <img src={image} alt="" />
        </div>
    </div>
  )
}
