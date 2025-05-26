import styles from './Footer.module.css'
const Footer = () => {
  return (
    <>
      <footer
        class="d-flex justify-content-between align-items-center py-3 px-3 mx-auto"
      >
        <p class="text-secondary small mb-0">
          © ferdous Zihad , All Right Reserved
        </p>
        <div class="d-flex gap-3">
          <a href="#" aria-label="Facebook" className={styles.facebook}>
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className={styles.twitter}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className={styles.instagram}>
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  )
}
export default Footer;
