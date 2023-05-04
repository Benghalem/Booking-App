import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropretyList from "../../components/propretyList/PropretyList";
import FeaturedProperties from "../../components/featurePropertie/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return ( 
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle"> Browse by property type</h1>
        <PropretyList />
        <h1 className="homeTitle"> Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer/>
      </div>
    </div>
  )
}

export default Home