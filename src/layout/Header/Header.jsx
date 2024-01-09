import shoppingCart from '../../media/shoppingCart.svg'
import logoPlant from '../../media/logoPlant.svg'
import menu from '../../media/menu.svg'
import styles from './header.module.css'
import { useState } from "react";


const Header = () => {
    return (
      <>
        <div className={styles.divHeader}>
        <nav>  
        <img className={styles.logo} src= { logoPlant }/>
          <ul>
            <li>Main Page</li>
            <li>Categories</li>
            <li>All products</li>
            <li>All sales</li>
          </ul>
        <img className={styles.shoppingCart} src= { shoppingCart }/>
        <img className={styles.menu} src ={ menu } />
        </nav>
        </div>
      </> 
       
    );
  }
  
  export default Header;