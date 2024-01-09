import styles from './discount.module.css'
import discountBackground from '..//..//media/discountBackground.svg'


function Discount() {
    return (
    <>
        <div className={styles.divDiscount} style={{backgroundImage: 'url(' + discountBackground + ')'}}>
            <h1 className={styles.h1Amazing} >Amazing Discounts on Garden Products!</h1>
            <button className={styles.greenButton}>Check out</button>
        </div>
    </>
    );
}
export default Discount;