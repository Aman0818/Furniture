import './FurnishingCard.css'
export const FurnishingCard = ({no,head,desc,image}) => {
  return (
    <div className='FurnishingCard'>
        <div className="fc-part1">
          <div className="">{no}</div>
          <div className="">
            
          </div>
          <div className="">{head}</div>
          <div className="">{desc}</div>
          <button>Learn more</button>
        </div>
        <div className="fc-part2">
            <img src={image} alt="" />
        </div>
    </div>
  )
}
