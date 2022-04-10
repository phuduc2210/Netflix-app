import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss"

export default function Watch() {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video src="./demon-slayer-trailer.mp4" className="video" autoPlay progress controls></video>
    </div>
  )
}
