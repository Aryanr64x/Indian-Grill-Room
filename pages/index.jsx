import Navbar from "../components/Navbar";
import Hero from "../components/home/Hero";
import Welcome  from "../components/home/Welcome";
import ShowMenu from "../components/home/ShowMenu";
import Ratings from "../components/home/Ratings";
import Contact from '../components/home/Contact'
import Footer from "../components/home/Footer";
export default function Home() {
  return (
    <div className="text-white bg-secondary font-cabin"> 
          <Navbar />
          <Hero />
          <Welcome />
          <ShowMenu />
          <Ratings />
          <Contact />
          <Footer />
    </div>
  );
}
