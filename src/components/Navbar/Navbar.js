import styles from  "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
                   <div>
                       <h2 className={styles.navbar__brand}>Covid ID</h2>
                   </div>

                   <div>
                       <ul className={styles.navbar__list}>
                           <li className={styles.navbar__item}>Global</li>
                           <li className={styles.navbar__item}>Indonesia</li>
                           <li className={styles.navbar__item}>about</li>
                           
                       </ul>
                   </div>
        </nav>
        
        
            
     </div>
  );
}

export default Navbar;
