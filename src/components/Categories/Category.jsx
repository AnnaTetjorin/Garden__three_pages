import styles from './categories.module.css'


export const Category = ({image, title}) => {
    const imageUrl = `http://127.0.0.1:3333${image}`
    return (
    <div className={styles.fourCategories}>
        <div className={styles.categoryItem}>
        <img className={styles.imgCategory} src={imageUrl} alt={title}/>
        <p className={styles.pCategory}>{title}</p>
        </div>
    </div>
       
    )
}