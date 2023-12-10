import Navbar from '../components/Navbar';
import Heading from '../components/Heading/Cars';
import FormFilter from '../components/FormFilter';
import Footer from '../components/Footer';
import './../styles/App.css';
import CarResult from '../components/CarResult';

const ListCars = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <FormFilter />
      <CarResult />
      <Footer />
    </div>
  );
};

export default ListCars;