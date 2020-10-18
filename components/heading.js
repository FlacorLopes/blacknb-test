import styles from './mainSection.module.css';

export default function Heading({ text }) {
  return (
    <button type="button" className={styles.companyHeading}>
      <div className={styles.headingContainer}>
        <span className={styles.badge}>1</span>
        <span>{text}</span>
      </div>
    </button>
  );
}
