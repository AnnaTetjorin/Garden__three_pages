import Header from "../../layout/Header/Header";
import Discount from "../../components/Discount/Discount";
import DataForm from "../../components/Form/DataForm";
import Footer from "../../layout/Footer/Footer";
import Map from "../../layout/Map/Map";
import { CategoriesList } from "../../components/Categories/CategoriesList";
import { SaleList } from "../../components/Sale/SaleList";



function MainPage() {
  
  return (
    <div>
      <Header />
      <Discount/>
      <CategoriesList content="main"/>
      <DataForm/>
      <SaleList/>
      <Footer/>
      <Map/>
    </div>
  );
}

export default MainPage;
