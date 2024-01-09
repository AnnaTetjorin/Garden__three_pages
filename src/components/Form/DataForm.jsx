import styles from './form.module.css'
import imgFiveHands from '../../media/formHands.svg'

function Form() {
    return (
      <div className={styles.greenDiv}>
       <h2>5% off on the first order</h2>
       <form>
        <div className={styles.imgWrapper}>
            <img className={styles.formHands} src={imgFiveHands} alt="five hands"/>
        </div>
        <div className={styles.divInputs}>
            <input type="text" placeholder="Name"/>
            <input type="text" placeholder="Phone number"/>
            <input type="text" placeholder="Email"/>
            <button className={styles.whiteButton} >Get a discount</button>
        </div> 
        </form>
      </div>
    );
  }
  
  export default Form;
  