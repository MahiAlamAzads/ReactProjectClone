import styles from './Container.module.css'
const Container = ({ children }) => {
  return (
    <div className={`container mb-5 ${styles.container2}`}>
      {children}
    </div>
  );
};

export default Container;
