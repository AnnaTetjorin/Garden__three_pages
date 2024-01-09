import styles from './footer.module.css'
import insta from '../../media/insta.svg'
import whatsup from '../../media/whatsup.svg'

function Footer() {
   return(
    <div>
        <h1 className={styles.h1}>Contact</h1>
        <div className={styles.divContact}>
            <div className={styles.twoDivs}> 
            <div className={styles.containerOne}>
                <h6>Phone</h6>
                <p>+49 999 999 99 99</p>
            </div>
            <div className={styles.containerSocial}>
                <h6>Socials</h6>
                <div className={styles.divIcons}>
                    <img src= { insta }/>
                    <img src= { whatsup }/>
                </div>
            </div>
            
            </div>
            <div className={styles.twoDivs}>
            <div className={styles.containerOne}>
                <h6>Address</h6>
                <p>Linkstrasse 2, 8 OG, 10785, Berlin, Deutschland</p>
            </div>
            <div className={styles.containerTwo}>
                <h6>Working Hours</h6>
                <p>24 hours a day</p>
            </div>
            </div>
        </div>
    </div>
   )
}
export default Footer;