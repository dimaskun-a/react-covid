import styles from "./Indonesia.module.css";

function Indonesia() {
  return (
    <div className={styles.container}>
      <section className={styles.indonesia}>
        <h2 className={styles.indonesia__title}>INDONESIA</h2>
        <h3 className={styles.indonesia__subtitle}>Data Covid Berdasarkan Global</h3>
        <div className={styles.indonesia__container}>
          
        </div>
      </section>

      <section className={styles.indonesia}>
                <div className={styles.indonesia__justfy}>
                    <div className={styles.cards__items}>
                        <div className={styles.cards__one}>
                            <h1>Sembuh</h1>
                            <h1 className={styles.cards__colom1} value="">6.005.646</h1>
                        </div>
                    </div>


                    <div className={styles.cards__items}>
                        <div className={styles.cards__indonesia}>
                            <h1>Dirawat</h1>
                            <h1 className={styles.cards__colom2}>100.000</h1>
                        </div>
                    </div>

                    <div className={styles.cards__items}>
                        <div className={styles.cards__indonesia}>
                            <h1>Meninggal</h1>
                            <h1 className={styles.cards__colom3}>10.000</h1>
                        </div>
                    </div>


                </div>
            </section>
    </div>
  );
}

export default Indonesia;