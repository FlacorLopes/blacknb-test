import styles from './mainSection.module.css';

export default function CompanyData({ heading, contents }) {
  return (
    <div className={styles.companyDescription}>
      <h3>{heading} </h3>
      {contents}
    </div>
  );
}
