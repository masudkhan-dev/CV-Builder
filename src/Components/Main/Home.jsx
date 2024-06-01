import Banner from "../Home/02 Banner/Banner";
import Footer from "../Home/Footer/Footer";
import Header from "../Home/01 Header/Header";
import Summary from "../Home/03 Summary/Summary";
import Highlights from "../Home/04 Highlights/Highlights";
import Qualification from "../Home/05 Qualification/Qualification";
import PersonalDetails from "../Home/06 Personal Details/PersonalDetails";

const Home = () => {
  return (
    <main>
      <div>
        <Header />
        <Banner />
        <Summary />
        <Highlights />
        <Qualification />
        <PersonalDetails />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
