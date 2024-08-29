import SideBar from '../components/SideBar.jsx'
import AddDonante from '../components/Home/AddDonante'
import './../styles/home.scss'
import HomeBanner from '../components/Home/HomeBanner'

export const Home = () => {
  return (
    <>
      <div className="app-container">
      <SideBar />
      <div className="content-container">
        <AddDonante />
        <HomeBanner />
      </div>
    </div>
    </>
  )
}