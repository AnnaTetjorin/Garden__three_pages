import styles from './categories.module.css'


export const CategoryItemPage = () => {
   
    return (
    <div className={styles.mainUndCategoryButtons}>
        <button className={styles.mainButton}>Main Page</button>
        <div className={styles.shortLine}></div>
        <button className={styles.categoryButton}>Categories</button>
    </div>
    )
}