import Feartured from "../../components/featured/Feartured"
import List from "../../components/list/List"
import Navbar from "../../components/navbar/Navbar"
import "./home.scss"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img width="100%" src="./banner2.jpg" alt="" />
        <Feartured type="movie"/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home

// rafce