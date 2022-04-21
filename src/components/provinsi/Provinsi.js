import styles from "./Provinsi.module.css";
import Table from "../Table/Table";
function Provinsi (props){
    const {provinces} = props;
    let angka ='';
    return (
        <div className={styles.container}>
            <section className={styles.provinsi}>
                <h2 className={styles.provinsi__title}>provinsi</h2>
                <p className={styles.provinsi__tagline}>data provinsi</p>
                <div className={styles.table__container}>
            <table className={styles.provinsi_table}>
                <thead className={styles.table__head}>
                   <tr className={styles.table__row}>
                        <th className={styles.th}>no</th>
                        <th className={styles.th}>provinsi</th>
                        <th className={styles.th}>positiv</th>
                        <th className={styles.th}>sembuh</th>
                        <th className={styles.th}>dirawat</th>
                        <th className={styles.th}>meninggal</th>
                    </tr> 

                </thead>
                {provinces.map((kota)=>{
                    angka++
                    return <Table kota={kota} no={angka} />
                })}
            </table>
            </div>
            </section>
        </div>
    )
}

export default Provinsi;