import styles from './styles.module.css';
import Icons from '../components/Icons';
export default function DiagramPage() {
  return (
    <>
      <div class={styles.navigation_container}>
        <div className={styles.navigation_row}>
          <div className={styles.navigation_header_wallet}>
            <Icons name="wallet" className={styles.navigation_icon_wallet} />
            <p>Wallet</p>
          </div>
          <div className={styles.navigation_header}>
            <p className={styles.navigation_header_title}>Имя</p>
            <p className={styles.navigation_header_title}>|</p>
            <Icons
              name="exit"
              size="18"
              className={styles.navigation_icon_exit}
            />
            <button type="button" className={styles.navigation_header_logout}>
              <p>Выйти</p>
            </button>
          </div>
        </div>
      </div>

      <section className={styles.navigation_home_image}></section>
    </>
  );
}
