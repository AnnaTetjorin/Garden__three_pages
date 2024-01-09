import { ShowSingleProduct } from "../../components/SingleProduct/ShowSingleProduct";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";

function SingleProductPage() {
  
    return (
      <div>
        <Header />
        <ShowSingleProduct/>
        <Footer/>
        <Map/>
      </div>
    );
  }
  
  export default SingleProductPage;