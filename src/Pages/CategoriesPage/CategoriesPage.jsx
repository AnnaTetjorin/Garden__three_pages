import { CategoriesList } from "../../components/Categories/CategoriesList";
import { CategoryItemPage } from "../../components/Categories/CategoryItemPage";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Map from "../../layout/Map/Map";



function CategoriesPage() {
  
    return (
      <div>
        <Header />
        <CategoryItemPage/>
        <CategoriesList style={{display: 'none'}} />
        <Footer/>
        <Map/>
      </div>
    );
  }
  
  export default CategoriesPage;