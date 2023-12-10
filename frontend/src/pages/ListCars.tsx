import Navbar from '../components/Navbar';
import Heading from '../components/Heading/Cars';
import FormFilter from '../components/FormFilter';
import Footer from '../components/Footer';
import './../styles/App.css';

const ListCars = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <FormFilter />
      <Footer />
    </div>
  );
};

export default ListCars;