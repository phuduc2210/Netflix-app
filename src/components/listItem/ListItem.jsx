import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from "@mui/icons-material"
import { useState } from "react"
import "./listItem.scss"

export default function ListItem({index}) {
  const [isHoved, setIsHoved] = useState(false)
  // const trailer ="./demon-slayer-trailer.mp4"
  return (
    <div className="listItem" 
    style={{left:isHoved && index * 225 - 50 + index * 2.5}}
    onMouseEnter={()=>setIsHoved(true)} 
    onMouseLeave={()=>setIsHoved(false)}>
      <img src="./film.jpg" alt="" />
      {isHoved && (
        <>
      <video src={"./demon-slayer-trailer.mp4"} autoPlay={true} loop ></video>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow className="icon"/>
          <Add className="icon"/>
          <ThumbUpAltOutlined className="icon like"/>
          <ThumbDownOutlined className="icon dislike"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hours 15 mins</span>
          <span className="limit">+16</span>
          <span>2019</span>
        </div>
        <div className="desc">
          Cuộc hành trình của cậu bé Tanjiro đi giải cứu loài người khỏi lũ quỷ đã giết hại gia đình cậu và trở thành 1 thợ săn quỷ như truyền thống gia đình
        </div>
        <div className="genre">Action</div>
      </div>
      </>
      )}
    </div>
  )
}
