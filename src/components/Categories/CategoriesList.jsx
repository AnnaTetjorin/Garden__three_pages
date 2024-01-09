import { useState, useEffect } from "react"
import { Category } from "./Category"
import styles from './categories.module.css'



export const CategoriesList = ({content, style }) => {
    const [categoriesList, setCategoriesList] =useState([])
    useEffect(() => {
       const fetchCategories = async() => {
        const response = await fetch('http://127.0.0.1:3333/categories/all')
        const data = await response.json()
        setCategoriesList(() => ([...data]))
       } 
       fetchCategories()
      }, [])
    return <div>
     
         <div className={styles.h1SpanCategories}>
           <h1>Categories</h1>
           <div className={styles.line} style={style}></div>
           <span style={style}>All categories</span>
        </div>
        <div className={styles.showAllCategories}>
        {content === "main"
        ? categoriesList
          .map((category) => (
            <Category key={category.id} {...category}/>
        ))
          .splice(0, 4)
        : categoriesList.map((category) => (
            <Category key={category.id} {...category}/>
        ))}
        </div>
       
            <button className={styles.hidden_button}>All categories</button>
       
    </div>
}