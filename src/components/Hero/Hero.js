import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>COVID ID</h2>
          <h3 className={styles.hero__subtitle}>
          Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <button className={styles.hero__button}>vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src="https://media.discordapp.net/attachments/894919708938223657/961641500121370634/hero.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;

