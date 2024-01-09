import { useState, useEffect } from "react"
import styles from './sale.module.css'
import { Sale } from "./Sale"


export const SaleList = () => {
    const [saleList, setSaleList] =useState([])
    useEffect(() => {
       const fetchSale = async() => {
        const response = await fetch('http://127.0.0.1:3333/products/all')
        const data = await response.json()
        const discontedProducts = data.filter(product => product.discont_price !== null)
        setSaleList(() => ([...discontedProducts.slice(0, 4)]))
       } 
       fetchSale()
      }, [])
    return <div>
         <div className={styles.h1SpanSale}>
           <h1>Sale</h1>
           <div className={styles.line}></div>
           <span>All sales</span>
        </div>
        <div className={styles.showAllSale}>
        {saleList.map((product) => (
            <Sale key={product.id} {...product}/>
        ))}</div>
         <button className={styles.hidden_button}>All sales</button>
    </div>
}