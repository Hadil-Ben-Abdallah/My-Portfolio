import styles from './style.module.css';
const HyperOne = ({ value }) => {
  return <p className={`maingeader ${styles.h1}`}>{value}</p>;
};

export default HyperOne;
