
import styles from "./Form.module.css";
import { useState } from "react";
  
  function Form(props) {
   const { provinces, setProvinces } = props;
 
    // Buat variable state provinsi
    const [provinsi, setProvinsi] = useState("Jakarta");
    const [status, setStatus] = useState("kasus");
    const [jumlah, setJumlah] = useState("");
    const [isJumlahError, setIsJumlahError] = useState(false);

    // Buat fungsi handleprovinsi
    function handleProvinsi(e) {
     setProvinsi(e.target.value);
    }
 
    // Buat fungsi handlestatus
    function handleStatus(e) {
      setStatus(e.target.value);
    }
 
    // Buat fungsi handlejumlah
    function handleJumlah(e) {
     setJumlah(e.target.value);
    }
 
    // Buat fungsi handleSubmit
    function handleSubmit(e) {
      e.preventDefault();
      
      if (jumlah === "") {
        setIsJumlahError(true);
    }
    else {
        const province = provinces.map(obj =>
            obj.kota === provinsi ? { ...obj, [status]:Number(jumlah) } : obj, 
            );
            setProvinces(province);
            // setIsJumlahError(false);
          }
    }
    return (
      <div className={styles.container}>
        <section className={styles.Form}>
          <div className={styles.Form__left}>
            <img
              className={styles.Form__image}
              src="https://media.discordapp.net/attachments/894919708938223657/961641500121370634/hero.jpg"
              alt="placeholder"
            />
          </div>
          <div className={styles.form__form}>
                    <h2 className={styles.form__formtitle}>Form</h2>
                        <form className={styles.form__form} onSubmit={handleSubmit} action="">
                            <div className={styles.form__provinsi}>
                                <label className={styles.form__label}>Provinsi</label>
                                <br />
                                <select className={styles.form__provinsi} name="provinsi" id="provinsi" onChange={handleProvinsi} value={provinsi}>
                                    {provinces.map(( provinces ) => (    
                                        <option key={provinces.kota} value={provinces.kota}>{provinces.kota}</option>
                                    
                                    
                                    ))}
                                </select>
                            </div>
                            <div className={styles.form__status}>
                                <label className={styles.form__label}>Status</label>
                                <br /> 
                                <select className={styles.form__status} name="status" id="status" onChange={handleStatus} value={status}>
                                    <option value="kasus">Positif</option>
                                    <option value="sembuh">Sembuh</option>
                                    <option value="dirawat">Dirawat</option>
                                    <option value="meninggal">Meninggal</option>
                                </select>                            
                            </div>
                            <div className={styles.form__jumlah}>
                                <label className={styles.form__label}>Jumlah</label>
                                <br />
                                <input className={styles.form__input} onChange={handleJumlah} type="number" min="0" value={jumlah} />
                                <br />
                                 {isJumlahError && <p className={styles.form__warning}>silahkan isi jumlah</p>} 
                            </div>
                            <button className={styles.form__button}>Submit</button>
                        </form>
                    </div>
            </section>
        </div>
    );
}
  
  // export Component from
  export default Form;