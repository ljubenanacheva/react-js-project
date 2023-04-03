import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfoundDiv}>
        <div className={styles.notFound404}>
          <h1 className={styles.notfoundTitle}>
            4<span className={styles.notfoundSpan}>0</span>4
          </h1>
        </div>
        <p className={styles.notfoundP}>
          The page you are looking for is not found.
        </p>
        <a href="#" className={styles.notfoundLink}>
          home page
        </a>
      </div>
    </div>
  );
};
