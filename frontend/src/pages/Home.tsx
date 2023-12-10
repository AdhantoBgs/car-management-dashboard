import Navbar from '../components/Navbar';
import Heading from '../components/Heading/Home';
import Section from '../components/Section';
import Footer from '../components/Footer';
import './../styles/App.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Section />
      <Footer />
    </div>
  );
};

export default Home;
